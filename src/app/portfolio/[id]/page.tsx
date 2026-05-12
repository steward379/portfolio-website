import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPublicProjectById, projects } from '@/data/projects';
import ProjectImages from '@/components/portfolio/ProjectImages';

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return projects
    .filter((p) => !p.hidden)
    .map((project) => ({ id: project.id }));
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const project = getPublicProjectById(params.id);
  if (!project) {
    return { title: '作品不存在 | 縮小檢視工作室 · Setup Studio' };
  }
  return {
    title: `${project.title} | 縮小檢視工作室 · Setup Studio`,
    description: project.description,
  };
}

type PageProps = {
  params: Promise<{ id: string }>;
};

const categoryLabel = (c: 'website' | 'design'): string => (c === 'website' ? '網站開發' : '設計');

const industryLabel = (i: string): string =>
  ({
    healthcare: '醫療',
    finance: '金融',
    food: '餐飲',
    technology: '科技',
    education: '教育',
    retail: '零售',
  }[i] || '其他');

export default function ProjectPage({ params }: PageProps) {
  const { id } = use(params);
  const project = getPublicProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <section className="relative pt-[120px] md:pt-[160px]">
        <div className="shell">
          <Link
            href="/portfolio"
            className="link-underline inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            <span>返回作品集</span>
          </Link>

          <div className="mt-10 grid grid-cols-12 gap-y-8 md:gap-x-6">
            <div className="col-span-12 md:col-span-3" data-reveal>
              <div className="eyebrow">Case · {project.date}</div>
            </div>
            <div
              className="col-span-12 md:col-span-9"
              data-reveal
              style={{ ['--reveal-delay' as string]: '120ms' }}
            >
              <h1 className="font-display text-[clamp(1rem,3vw,2.1rem)] leading-[1.15] tracking-tight">
                {project.title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-[var(--ink-2)] md:text-[1.2rem]">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="chip">{categoryLabel(project.category)}</span>
                <span className="chip">{industryLabel(project.industry)}</span>
              </div>
              {project.url && (
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    訪問網站
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-[var(--muted)] break-all"
                  >
                    {project.url}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-6">
            <div className="col-span-12 md:col-span-8" data-reveal>
              <div className="font-mono-label">Overview</div>
              <h2 className="mt-4 font-display text-xl tracking-tight md:text-2xl">專案概述</h2>
              <div
                className="mt-8 max-w-[68ch] text-[var(--ink-2)] leading-[1.8] [&_small]:mt-6 [&_small]:block [&_small]:text-sm [&_small]:text-[var(--muted)]"
                dangerouslySetInnerHTML={{
                  __html: project.fullDescription || project.description,
                }}
              />

              <div className="mt-16">
                <ProjectImages
                  mainImage={project.image || ''}
                  images={project.images}
                  title={project.title}
                />
              </div>
            </div>

            <aside className="col-span-12 md:col-span-3 md:col-start-10">
              <div className="sticky top-28 space-y-10">
                <div>
                  <div className="font-mono-label">Project info</div>
                  <ul className="mt-5 divide-y divide-[var(--line)] border-y border-[var(--line)] text-sm">
                    <li className="flex justify-between py-3">
                      <span className="text-[var(--muted)]">Client</span>
                      <span className="text-right font-medium text-[var(--ink)]">{project.client}</span>
                    </li>
                    <li className="flex justify-between py-3">
                      <span className="text-[var(--muted)]">Category</span>
                      <span className="font-medium text-[var(--ink)]">{categoryLabel(project.category)}</span>
                    </li>
                    <li className="flex justify-between py-3">
                      <span className="text-[var(--muted)]">Industry</span>
                      <span className="font-medium text-[var(--ink)]">{industryLabel(project.industry)}</span>
                    </li>
                    <li className="flex justify-between py-3">
                      <span className="text-[var(--muted)]">Date</span>
                      <span className="font-medium text-[var(--ink)]">{project.date}</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-[var(--line)] pt-8">
                  <h3 className="font-display text-2xl tracking-tight">需要相似的專案？</h3>
                  <p className="mt-3 text-sm text-[var(--ink-2)]">
                    我們可以根據您的需求，為您打造獨特的品牌體驗和專業網站。
                  </p>
                  <Link href="/about" className="btn mt-5 w-full justify-center">
                    聯絡我們
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
