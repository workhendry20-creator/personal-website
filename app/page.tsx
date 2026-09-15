import Image from 'next/image';
import Link from 'next/link';
import SidebarNav from '@/components/SidebarNav';
import ThemeToggle from '@/components/ThemeToggle';
import SocialLinks from '@/components/SocialLinks';


export interface ExperienceItem {
  role?: string;
  title?: string;
  company?: string;
  organization?: string;
  institution?: string;
  place?: string;
  period?: string;
  description?: string;
}

const workExperiences: ExperienceItem[] = [
  {
    role: 'International Research Intern',
    company: 'Universiti Sains Malaysia',
    period: 'JUL - AUG 2026',
    description:
      'Researched computational physics modeling and signal analysis, developing interactive simulation tools for scientific research.',
  },
  {
    role: 'Community Leader Intern',
    company: 'Gojek Bandung',
    period: 'APR - JUL 2025',
    description:
      'Led community digital engagement and merchant platform initiatives to drive partner active participation and operational growth.',
  },
  {
    role: 'Data Analyst Intern',
    company: 'Ditjen Pajak Kanwil Jabar II',
    period: 'OCT 2024 - MAR 2025',
    description:
      'Analyzed regional taxpayer compliance datasets and constructed executive data dashboards for strategic analytical reporting.',
  },
  {
    role: 'Laboratory Assistant',
    company: 'UIN SGD Bandung',
    period: 'AUG - DEC 2024',
    description:
      'Instructed undergraduate physics lab courses, mentored student research, and facilitated computational simulation modules.',
  },
];

const organizationExperiences: ExperienceItem[] = [
  {
    role: 'Deputy Chair',
    organization: 'Indonesian Youth Diplomacy (IYD) West Java',
    period: '2024 — Present',
    description:
      'Spearheaded regional chapter operations, executive strategy, and youth policy dialogues for international diplomacy.',
  },
  {
    role: 'Founder',
    organization: 'Webtizen.id',
    period: '2023 — Present',
    description:
      'Established platform vision, product roadmap, and nationwide digital literacy programs for Indonesian youth.',
  },
  {
    role: 'Public Relations',
    organization: 'Jabar Bergerak Zillenial',
    period: '2023 - 2024',
    description:
      'Directed press communications, brand messaging, and strategic media partnerships for regional community outreach.',
  },
];

export interface ExpertiseCategory {
  title: string;
  description?: string;
  items: string[];
}

const expertiseCategories: ExpertiseCategory[] = [
  {
    title: 'Software & Web Engineering',
    description:
      'Engineering responsive, high-performance web applications using modern full-stack technologies.',
    items: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Computational Physics & Vision',
    description:
      'Applying computational modeling, image processing, and computer vision to analyze physical systems.',
    items: ['Python', 'OpenCV', 'Computer Vision', 'Physical Modeling', 'NumPy', 'Signal Processing'],
  },
  {
    title: 'Systems & Architecture',
    description:
      'Designing scalable system architectures with modern automated deployment pipelines and edge networks.',
    items: ['Information Systems Design', 'Git / GitHub', 'Automated CI/CD', 'Global CDN & Serverless Edge Network'],
  },
  {
    title: 'Leadership & Strategic Communication',
    description:
      'Directing public communications, youth advocacy, and strategic diplomacy initiatives.',
    items: ['Youth Diplomacy', 'Public Relations', 'Public Policy', 'Digital Literacy Advocacy'],
  },
];

export interface FeaturedProject {
  id?: string;
  title: string;
  subtitle?: string;
  image: string;
  description: string;
  tech?: string[];
  link?: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'usm-physx-lab',
    title: 'USM PhysX Lab',
    subtitle: 'Computational Physics & Simulation Engine',
    image: '/assets/project_img1.png',
    description:
      'Interactive web physics simulation engine built at Universiti Sains Malaysia, converting physics models into real-time digital experiments.',
    tech: ['JavaScript', 'Python', 'HTML5 Canvas', 'Tailwind CSS'],
    link: '/projects/usm-physx-lab',
  },
  {
    id: 'sitka-frontend',
    title: 'SITKA Frontend',
    subtitle: 'Integrated Multi-Role School Dashboard',
    image: '/assets/project_img2.png',
    description:
      'Multi-role administrative web app streamlining educational progress tracking with role-based dashboards for admins, teachers, and parents.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    link: '/projects/sitka-frontend',
  },
  {
    id: 'kandang-kang-iky',
    title: 'Kandang Kang Iky',
    subtitle: 'Responsive Livestock Business Platform',
    image: '/assets/project_img3.png',
    description:
      'Responsive web platform for a local livestock business, optimized for fast performance, clear visual hierarchy, and user conversion.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '/projects/kandang-kang-iky',
  },
];

export default function Home() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-20 2xl:gap-28 min-h-screen">
        {/* Header Block on Mobile / Left Sticky Sidebar Column on Desktop */}
        <aside className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:flex lg:flex-col lg:justify-between lg:py-14 pt-6 pb-6 border-b lg:border-b-0 border-border/80">
          <div className="space-y-5 sm:space-y-6 flex flex-col items-start text-left">
            <div className="flex flex-col items-start text-left w-full space-y-3">
              <Image
                src="/avatar.jpeg"
                alt="Hendry Bambang Siswanto"
                width={112}
                height={112}
                className="rounded-full object-cover w-20 h-20 sm:w-28 sm:h-28 ring-4 ring-border/60 shadow-md mb-1 sm:mb-2"
                priority
              />
              <div>
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-3xl text-text-primary tracking-tight leading-tight">
                  Hendry Bambang Siswanto
                </h1>
                <p className="text-xs font-semibold text-text-secondary mt-1.5 tracking-wider uppercase">
                  Information Systems &amp; Physics
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-normal text-text-secondary leading-relaxed max-w-full lg:max-w-sm text-left">
              Exploring the intersection of Information Systems, Physics, and Youth Diplomacy to build meaningful technology for society.
            </p>

            {/* In-page Anchor Navigation - visible on desktop */}
            <div className="w-full hidden lg:flex justify-start py-2">
              <SidebarNav />
            </div>
          </div>

          {/* Sidebar Footer: Socials, ThemeToggle, Credit */}
          <div className="pt-4 lg:pt-0 space-y-3 w-full">
            <div className="flex items-center justify-between">
              <SocialLinks />
              <ThemeToggle />
            </div>

            <p className="text-xs text-text-secondary font-normal hidden lg:block">
              Developed by{' '}
              <strong className="font-bold text-text-primary">
                Hendry Bambang
              </strong>
            </p>
          </div>
        </aside>

        {/* Scrollable Content Area - flows continuously top-to-bottom on mobile */}
        <main className="lg:col-span-7 xl:col-span-8 lg:py-14 py-6 space-y-10 sm:space-y-14">
          {/* Flowing Narrative Story */}
          <section id="about" className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-text-secondary leading-relaxed font-normal scroll-mt-6 lg:scroll-mt-14">
            <p>
              Double-major graduate in <strong className="font-bold text-text-primary">Information Systems</strong> and <strong className="font-bold text-text-primary">Physics</strong>, combining scientific logic with software engineering. I build intuitive web applications and analyze complex datasets to deliver meaningful digital solutions.
            </p>

            <p>
              Focused on clarity, system performance, and continuous adaptation. From developing responsive web components to analyzing visual datasets with <strong className="font-bold text-text-primary">Computer Vision</strong>, I integrate modern engineering practices and <strong className="font-bold text-text-primary">AI-assisted workflows</strong> to build robust software.
            </p>

            <p>
              My technical background is complemented by leadership as <strong className="font-bold text-text-primary">Deputy Chair</strong> at <strong className="font-bold text-text-primary">IYD West Java</strong> and founder of <strong className="font-bold text-text-primary">Webtizen.id</strong>. I am eager to contribute as an entry-level to junior <strong className="font-bold text-text-primary">Web Developer</strong> or <strong className="font-bold text-text-primary">Data Analyst</strong> in a forward-thinking team.
            </p>
          </section>

          {/* Key Roles List (Work Experience & Organization) */}
          <section id="experience" className="pt-6 sm:pt-8 border-t border-border space-y-6 sm:space-y-8 scroll-mt-6 lg:scroll-mt-14">
            {/* Work Experience Sub-section */}
            {workExperiences && workExperiences.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xs font-bold text-text-primary uppercase tracking-wider">
                  Work Experience
                </h2>
                <div className="space-y-4">
                  {workExperiences.map((exp, idx) => {
                    const roleTitle = exp.role || exp.title || '';
                    const orgOrCompany = exp.company || exp.organization || exp.institution || exp.place || '';
                    return (
                      <div key={`${roleTitle}-${idx}`} className="space-y-0.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-0.5 sm:gap-1">
                          <span className="font-bold text-text-primary leading-snug">
                            {roleTitle}
                            {orgOrCompany && (
                              <span className="font-normal text-text-secondary"> • {orgOrCompany}</span>
                            )}
                          </span>
                          {exp.period && (
                            <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider shrink-0 mt-0.5 sm:mt-0">
                              {exp.period}
                            </span>
                          )}
                        </div>
                        {exp.description && (
                          <p className="text-xs text-text-secondary leading-relaxed">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Organization Sub-section */}
            {organizationExperiences && organizationExperiences.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xs font-bold text-text-primary uppercase tracking-wider">
                  Organization
                </h2>
                <div className="space-y-4">
                  {organizationExperiences.map((exp, idx) => {
                    const roleTitle = exp.role || exp.title || '';
                    const orgOrCompany = exp.organization || exp.company || exp.institution || exp.place || '';
                    return (
                      <div key={`${roleTitle}-${idx}`} className="space-y-0.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-0.5 sm:gap-1">
                          <span className="font-bold text-text-primary leading-snug">
                            {roleTitle}
                            {orgOrCompany && (
                              <span className="font-normal text-text-secondary"> • {orgOrCompany}</span>
                            )}
                          </span>
                          {exp.period && (
                            <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider shrink-0 mt-0.5 sm:mt-0">
                              {exp.period}
                            </span>
                          )}
                        </div>
                        {exp.description && (
                          <p className="text-xs text-text-secondary leading-relaxed">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* Selected Projects */}
          <section id="projects" className="pt-6 sm:pt-8 border-t border-border space-y-4 sm:space-y-6 scroll-mt-6 lg:scroll-mt-14">
            <div className="flex items-center justify-between text-xs font-semibold text-text-secondary uppercase tracking-wider">
              <span className="font-bold text-text-primary">Selected Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
              {featuredProjects.map((project, idx) => (
                <article
                  key={project.id || idx}
                  className="p-4 sm:p-5 rounded-xl border border-border bg-stone-50/50 dark:bg-stone-900/20 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Title / Subtitle */}
                    <div>
                      <h3 className="font-bold text-base text-text-primary tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider mt-0.5">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Project Image Banner */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border/80 shadow-sm bg-stone-900/5 dark:bg-stone-900/40">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pill Badges */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-1">
                      {project.tech.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="px-2.5 py-0.5 text-[11px] rounded-full border border-teal-500/30 text-teal-600 dark:text-teal-400 bg-teal-500/5 dark:bg-teal-500/10 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Technology & Expertise Section */}
          <section id="expertise" className="pt-6 sm:pt-8 border-t border-border space-y-4 sm:space-y-6 scroll-mt-6 lg:scroll-mt-14">
            <div className="flex items-center justify-between text-xs font-semibold text-text-secondary uppercase tracking-wider">
              <span className="font-bold text-text-primary">Technology &amp; Expertise</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {expertiseCategories.map((cat, idx) => (
                <div key={`${cat.title}-${idx}`} className="p-4 sm:p-5 rounded-2xl border border-border bg-stone-50/50 dark:bg-stone-900/20 space-y-3">
                  <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">
                    {cat.title}
                  </h3>
                  {cat.description && (
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {cat.description}
                    </p>
                  )}
                  {cat.items && cat.items.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-border/40 text-text-primary border border-border/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Mobile Footer Credit - visible at the very bottom on mobile */}
          <footer className="pt-8 pb-4 border-t border-border block lg:hidden">
            <p className="text-xs text-text-secondary font-normal">
              Developed by{' '}
              <strong className="font-bold text-text-primary">
                Hendry Bambang
              </strong>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
