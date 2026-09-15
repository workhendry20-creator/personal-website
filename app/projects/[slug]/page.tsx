import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllProjects, getProjectBySlug } from '@/lib/mdx';
import ThemeToggle from '@/components/ThemeToggle';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: 'Project Not Found | Hendry Bambang Siswanto',
    };
  }

  return {
    title: `${project.meta.title} | Hendry Bambang Siswanto`,
    description: project.meta.excerpt,
  };
}

const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="font-bold text-2xl sm:text-3xl text-text-primary mt-8 mb-4 tracking-tight"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="font-bold text-xl sm:text-2xl text-text-primary mt-8 mb-3 tracking-tight"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="font-bold text-lg text-text-primary mt-6 mb-2 tracking-tight"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="text-text-secondary text-base leading-relaxed my-4 font-normal"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className="list-disc list-inside my-4 space-y-2 text-text-secondary text-base leading-relaxed"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-inside my-4 space-y-2 text-text-secondary text-base leading-relaxed"
      {...props}
    />
  ),
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-stone-400 dark:border-stone-600 pl-4 my-6 italic text-text-secondary text-base font-normal"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-mono text-xs px-1.5 py-0.5 rounded"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-4 rounded-lg overflow-x-auto text-xs font-mono my-6 border border-border"
      {...props}
    />
  ),
  a: (props: any) => (
    <a
      className="text-text-primary underline hover:text-stone-600 transition-colors font-semibold"
      {...props}
    />
  ),
};

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <article className="space-y-8">
        {/* Navigation Back Link & Theme Toggle */}
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs text-text-secondary hover:text-text-primary transition-colors font-semibold uppercase tracking-wider"
          >
            ← Back to Projects
          </Link>
          <ThemeToggle />
        </div>

        {/* Project Header */}
        <header className="space-y-3 pb-6 border-b border-border">
          <div className="flex items-center gap-3 text-xs text-text-secondary font-semibold uppercase tracking-wider">
            {project.meta.role && <span>{project.meta.role}</span>}
            {project.meta.role && project.meta.date && <span>•</span>}
            {project.meta.date && <time dateTime={project.meta.date}>{project.meta.date}</time>}
          </div>
          <h1 className="font-bold text-3xl sm:text-4xl text-text-primary tracking-tight leading-tight">
            {project.meta.title}
          </h1>
          {project.meta.subtitle && (
            <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider">
              {project.meta.subtitle}
            </p>
          )}
          {project.meta.excerpt && (
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed pt-1 font-normal">
              {project.meta.excerpt}
            </p>
          )}

          {project.meta.tech && Array.isArray(project.meta.tech) && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.meta.tech.map((t: string, idx: number) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-border/40 text-text-primary border border-border/80"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {project.meta.github && (
            <div className="pt-2">
              <a
                href={project.meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-text-primary hover:underline uppercase tracking-wider"
              >
                View on GitHub →
              </a>
            </div>
          )}
        </header>

        {/* MDX Body Content */}
        <div>
          <MDXRemote source={project.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
