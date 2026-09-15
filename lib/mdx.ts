import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ContentType = 'notes' | 'projects';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  [key: string]: any;
}

export interface PostContent {
  meta: PostMeta;
  content: string;
}

const getContentDirectory = (type: ContentType) => {
  return path.join(process.cwd(), 'content', type);
};

/**
 * Retrieves all post metadata from a specific content directory (notes or projects).
 * Sorted by date descending (newest first). Safe against non-existent directories.
 */
export function getPosts(type: ContentType): PostMeta[] {
  const dir = getContentDirectory(type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  try {
    const files = fs.readdirSync(dir);

    const posts = files
      .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace(/\.mdx?$/, '');
        const filePath = path.join(dir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        return {
          slug,
          title: data.title || slug,
          date: data.date || '',
          excerpt: data.excerpt || '',
          ...data,
        } as PostMeta;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime() || 0;
        const dateB = new Date(b.date).getTime() || 0;
        return dateB - dateA;
      });

    return posts;
  } catch (error) {
    console.error(`Error reading ${type} posts:`, error);
    return [];
  }
}

/**
 * Retrieves a single post's metadata and content by type and slug.
 * Safe against missing files/directories.
 */
export function getPostBySlug(type: ContentType, slug: string): PostContent | null {
  const dir = getContentDirectory(type);

  if (!fs.existsSync(dir)) {
    return null;
  }

  const mdxPath = path.join(dir, `${slug}.mdx`);
  const mdPath = path.join(dir, `${slug}.md`);

  let targetPath = '';
  if (fs.existsSync(mdxPath)) {
    targetPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    targetPath = mdPath;
  } else {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(targetPath, 'utf-8');
    const { data, content } = matter(fileContent);

    const meta: PostMeta = {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      ...data,
    };

    return {
      meta,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug} in ${type}:`, error);
    return null;
  }
}

export function getAllNotes(): PostMeta[] {
  return getPosts('notes');
}

export function getNoteBySlug(slug: string): PostContent | null {
  return getPostBySlug('notes', slug);
}

export function getAllProjects(): PostMeta[] {
  return getPosts('projects');
}

export function getProjectBySlug(slug: string): PostContent | null {
  return getPostBySlug('projects', slug);
}
