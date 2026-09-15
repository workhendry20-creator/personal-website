import type { Metadata } from 'next';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'About | Hendry Bambang Siswanto',
  description: 'Background, multidisciplinary exploration in Systems, Physics, and Youth Advocacy.',
};

export default function AboutPage() {
  const currentRoles = [
    {
      title: 'Deputy Chair',
      organization: 'Indonesian Youth Diplomacy (IYD) West Java',
      period: '2024 — Present',
      description:
        'Directing regional youth diplomacy initiatives, public policy discussions, and cross-generational exchange programs in West Java.',
    },
    {
      title: 'CEO & Founder',
      organization: 'Webtizen.id',
      period: '2023 — Present',
      description:
        'Leading the development of digital literacy advocacy and education platforms for Indonesian youth.',
    },
    {
      title: 'Multidisciplinary Researcher & Builder',
      organization: 'Independent Exploration',
      period: 'Ongoing',
      description:
        'Exploring the integration of information systems and computational physics modeling for social-impact applications.',
    },
  ];

  const focusAreas = [
    {
      area: 'Digital Systems & Engineering',
      detail:
        'Engineering structured, scalable software architecture focused on ethical user experiences.',
    },
    {
      area: 'Physical Science & Computational Modeling',
      detail:
        'Studying fundamental physics principles and applying them to signal processing, computational computer vision, and mathematical modeling.',
    },
    {
      area: 'Youth Advocacy & Public Engagement',
      detail:
        'Building inclusive youth networks to foster active participation in technology, science, and public policy issues.',
    },
  ];

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

      <article className="space-y-12">
        {/* Page Header */}
        <header className="space-y-3">
          <h1 className="font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
            About Me
          </h1>
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
            Background, focus, and multidisciplinary journey.
          </p>
        </header>

        {/* Narrative Section */}
        <section className="space-y-6 text-text-secondary text-sm sm:text-base font-normal leading-relaxed">
          <p>
            My academic journey and technical exploration stand at the intersection of two complementary disciplines: <strong className="text-text-primary font-bold">Information Systems (UNIBI)</strong> and <strong className="text-text-primary font-bold">Physics (UIN Sunan Gunung Djati Bandung)</strong>. This dual perspective enables me to understand the physical dynamics of the real world through fundamental laws of physics while engineering robust solutions through information systems and computational software.
          </p>
          <p>
            I believe the best technology is never built in isolation—it requires precise scientific fundamentals, structured system architecture, and empathetic public advocacy to deliver sustainable positive impact.
          </p>
        </section>

        {/* What I'm Doing Now */}
        <section className="space-y-6 pt-6 border-t border-border">
          <h2 className="font-bold text-xl sm:text-2xl text-text-primary uppercase tracking-tight">
            What I&apos;m Doing Now
          </h2>

          <div className="space-y-6">
            {currentRoles.map((role, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-text-primary text-base sm:text-lg">
                    {role.title} <span className="text-text-secondary font-normal">at {role.organization}</span>
                  </h3>
                  <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    {role.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-normal text-text-secondary leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Explorations & Core Focus */}
        <section className="space-y-6 pt-6 border-t border-border">
          <h2 className="font-bold text-xl sm:text-2xl text-text-primary uppercase tracking-tight">
            Explorations &amp; Core Focus
          </h2>

          <div className="space-y-4">
            {focusAreas.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg border border-border bg-stone-50/50 dark:bg-stone-900/40 space-y-1"
              >
                <h3 className="font-bold text-text-primary text-base sm:text-lg">
                  {item.area}
                </h3>
                <p className="text-sm sm:text-base font-normal text-text-secondary leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Personal Note */}
        <section className="pt-6 border-t border-border">
          <p className="text-sm sm:text-base text-text-secondary italic leading-relaxed font-normal">
            &ldquo;Bridging physical science, digital systems, and youth advocacy to build meaningful technology for society.&rdquo;
          </p>
        </section>
      </article>
    </div>
  );
}
