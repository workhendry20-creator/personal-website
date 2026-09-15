import type { Metadata } from 'next';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { getAllProjects } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Projects | Hendry Bambang Siswanto',
  description: 'Selected projects, research initiatives, and storytelling case studies.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
        <Link
          href="/"
          className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors uppercase tracking-wider"
        >
          ← Back to Home
        </Link>
        <ThemeToggle />
      </div>

      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
            Selected Projects &amp; Work
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl font-normal">
            Case studies of initiatives, platforms, and research focused on solving real-world problems through story, science, and digital technology.
          </p>
        </header>

        <section className="pt-6 border-t border-border">
          {projects.length > 0 ? (
            <div className="space-y-6">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="group p-6 rounded-lg border border-border bg-stone-50/50 dark:bg-stone-900/40 hover:bg-stone-100/50 dark:hover:bg-stone-800/40 transition-colors space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h2 className="font-bold text-xl text-text-primary group-hover:underline">
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </h2>
                    <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                      {project.role && <span>{project.role}</span>}
                      {project.role && project.date && <span>•</span>}
                      {project.date && <time dateTime={project.date}>{project.date}</time>}
                    </div>
                  </div>

                  {project.subtitle && (
                    <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-sm sm:text-base font-normal text-text-secondary leading-relaxed line-clamp-3">
                    {project.excerpt}
                  </p>

                  {project.tech && Array.isArray(project.tech) && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((t: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full border border-teal-500/30 text-teal-600 dark:text-teal-400 bg-teal-500/5 dark:bg-teal-500/10 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-1">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-xs font-bold text-text-primary hover:underline uppercase tracking-wider"
                    >
                      Read Case Study →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-sm text-text-secondary italic">
              No projects published yet.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
