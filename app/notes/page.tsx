import type { Metadata } from 'next';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { getAllNotes } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Notes | Hendry Bambang Siswanto',
  description: 'Thoughts, reflections, and writings on systems, physics, technology, and society.',
};

export default function NotesPage() {
  const notes = getAllNotes();

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
            Notes &amp; Thoughts
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl font-normal">
            A collection of essays, research reflections, and thoughts on information systems, physics, digital technology, and youth advocacy.
          </p>
        </header>

        <section className="pt-6 border-t border-border">
          {notes.length > 0 ? (
            <div className="space-y-8">
              {notes.map((note) => (
                <article key={note.slug} className="group space-y-1.5">
                  <div className="flex items-center gap-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    <time dateTime={note.date}>{note.date}</time>
                    {note.readTime && <span>• {note.readTime}</span>}
                  </div>
                  <h2 className="font-bold text-xl text-text-primary group-hover:underline">
                    <Link href={`/notes/${note.slug}`}>{note.title}</Link>
                  </h2>
                  <p className="text-sm sm:text-base font-normal text-text-secondary line-clamp-2 leading-relaxed">
                    {note.excerpt}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-sm text-text-secondary italic">
              No notes published yet.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
