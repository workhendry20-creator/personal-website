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
      'Participated in cross-border scientific research collaboration, focusing on physical computational modeling and signal analysis.',
  },
  {
    role: 'Community Leader Intern',
    company: 'Gojek Bandung',
    period: 'APR - JUL 2025',
    description:
      'Developing and maintaining community digital operations, assisting merchant platform initiatives, and optimizing system performance.',
  },
  {
    role: 'Data Analyst Intern',
    company: 'Ditjen Pajak Kanwil Jabar II',
    period: 'OCT 2024 - MAR 2025',
    description:
      'Processed regional taxation datasets, performed statistical analytical reporting, and created structured data dashboards.',
  },
  {
    role: 'Laboratory Assistant',
    company: 'UIN SGD Bandung',
    period: 'AUG - DEC 2024',
    description:
      'Guided undergraduate physics laboratory sessions, facilitated computational modeling experiments, and mentored students.',
  },
];

const organizationExperiences: ExperienceItem[] = [
  {
    role: 'Deputy Chair',
    organization: 'Indonesian Youth Diplomacy (IYD) West Java',
    period: '2024 — Present',
    description:
      'Directing regional youth diplomacy initiatives, public policy discussions, and cross-generational exchange programs in West Java.',
  },
  {
    role: 'Founder',
    organization: 'Webtizen.id',
    period: '2023 — Present',
    description:
      'Leading the development of digital literacy advocacy and education platforms for Indonesian youth.',
  },
  {
    role: 'Public Relations',
    organization: 'Jabar Bergerak Zillenial',
    period: '2023 - 2024',
    description:
      'Crafting public narratives, managing communication channels, and building strategic partnerships to support community-focused initiatives across West Java.',
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
      'Engineering structured, responsive, and high-performance digital applications using modern web technologies.',
    items: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Computational Physics & Vision',
    description:
      'Applying computational modeling, image processing, and signal tracking to understand physical systems.',
    items: ['Python', 'OpenCV', 'Computer Vision', 'Physical Modeling', 'NumPy', 'Signal Processing'],
  },
  {
    title: 'Systems & Architecture',
    description:
      'Designing robust information systems with focus on scalability, maintainability, and clean architecture.',
    items: ['Information Systems Design', 'Git / GitHub', 'System Architecture', 'Vercel Deployment'],
  },
  {
    title: 'Leadership & Strategic Communication',
    description:
      'Directing public communications, policy discussions, and strategic youth advocacy initiatives.',
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
      'An interactive web-based physics simulation platform engineered during a research internship at Universiti Sains Malaysia. Developed to transform abstract physics models into dynamic, mathematically accurate digital experiments with real-time parameter tuning.',
    tech: ['JavaScript', 'Python', 'HTML5 Canvas', 'Tailwind CSS'],
    link: '/projects/usm-physx-lab',
  },
  {
    id: 'sitka-frontend',
    title: 'SITKA Frontend',
    subtitle: 'Integrated Multi-Role School Dashboard',
    image: '/assets/project_img2.png',
    description:
      'A multi-role administrative system and frontend web app designed to streamline educational reporting and track student growth. Features specialized dashboards for admins, teachers, and parents with structured data visualizations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    link: '/projects/sitka-frontend',
  },
  {
    id: 'kandang-kang-iky',
    title: 'Kandang Kang Iky',
    subtitle: 'Responsive Livestock Business Platform',
    image: '/assets/project_img3.png',
    description:
      'A responsive digital landing page crafted for a local agricultural business to strengthen its online presence and showcase livestock offerings. Focuses on fast load performance, clean visual hierarchy, and intuitive user conversion flow.',
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
                src="/final.jpg"
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

            <p className="text-xs text-text-secondary font-normal">
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
              As a recent double-major graduate in <strong className="font-bold text-text-primary">Information Systems</strong> and <strong className="font-bold text-text-primary">Physics</strong>, I bring a fresh, analytical perspective to problem-solving. My academic path taught me to bridge raw scientific logic with structured software engineering—giving me a strong foundation to launch my career in <strong className="font-bold text-text-primary">Web Development</strong> and <strong className="font-bold text-text-primary">Data Analytics</strong>. I&apos;m driven by a curiosity to understand complex systems, whether that means engineering intuitive digital interfaces or discovering actionable insights hidden within data.
            </p>

            <p>
              I approach development with a focus on clarity, efficiency, and continuous adaptation. From crafting responsive web components to analyzing image datasets with <strong className="font-bold text-text-primary">Computer Vision</strong>, I value code quality and system performance. I actively integrate modern tools—including <strong className="font-bold text-text-primary">AI-assisted workflows</strong>—into my process to accelerate learning, refine logic, and build well-structured solutions without compromising core engineering principles.
            </p>

            <p>
              My technical growth is complemented by hands-on leadership experience, such as guiding regional youth initiatives as <strong className="font-bold text-text-primary">Deputy Chair</strong> at <strong className="font-bold text-text-primary">Indonesian Youth Diplomacy (IYD) West Java</strong> and founding <strong className="font-bold text-text-primary">Webtizen.id</strong> to empower local digital spaces. These roles honed my communication, project coordination, and strategic adaptability. Now, as I step into the industry, I am eager to join a forward-thinking team as an entry-level to junior <strong className="font-bold text-text-primary">Web Developer</strong> or <strong className="font-bold text-text-primary">Data Analyst</strong>, where I can contribute immediately while sharpening my technical skills.
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
        </main>
      </div>
    </div>
  );
}
