import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from '@/components/portfolio/Card';
import NonDisclosedWorksNote from '@/components/portfolio/NonDisclosedWorksNote';

const FeaturedWorks = () => {
  const projects = getFeaturedProjects();

  return (
    <section className="relative bg-[var(--bg-2)] py-32 md:py-44">
      <div className="shell">
        <div
          className="grid grid-cols-12 items-end gap-y-10 border-b border-[var(--line)] pb-10 md:gap-x-6"
          data-reveal
        >
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow">
              Selected Works · {String(projects.length).padStart(2, '0')}
            </div>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.95] tracking-tight">
              Selected
              <br />
              <span className="font-display-italic">Works.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="max-w-[48ch] text-[var(--ink-2)] md:text-[1.5rem]">
              一份持續更新的精選清單。從互動行銷網頁、品牌系統到醫療官網，
              每一件作品都是一次深度合作。
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.id}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms` }}
            >
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-start gap-6 border-t border-[var(--line)] pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-[var(--muted)]">
            還有更多正在更新中。Browse the full archive →
          </p>
          <Link href="/portfolio" className="btn btn-ghost">
            查看所有作品
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <NonDisclosedWorksNote />
      </div>
    </section>
  );
};

export default FeaturedWorks;
