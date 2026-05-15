'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Project, projectIndustryLabels } from '@/data/projects';
import frameStyles from './projectMediaFrame.module.css';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const categoryLabel = (c: Project['category']) => (c === 'website' ? 'Web' : 'Design');

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imgErr, setImgErr] = useState(false);
  const [imgOk, setImgOk] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalHeight !== 0) {
      setImgOk(true);
    }
  }, [project.image]);

  return (
    <article className="group relative">
      <Link
        href={`/portfolio/${project.id}`}
        className="block"
        aria-label={project.title}
      >
        <div className={`frame relative aspect-[16/10] w-full ${frameStyles.shell}`}>
          {project.image && !imgErr ? (
            <>
              <img
                ref={imgRef}
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-[var(--ease-out-expo)] ${
                  imgOk ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onError={() => setImgErr(true)}
                onLoad={() => setImgOk(true)}
              />
              {!imgOk && <div className="absolute inset-0 animate-pulse bg-[var(--surface)]" />}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--muted)]">
              {project.title} · 預覽圖
            </div>
          )}

          <div className="absolute left-4 top-4 flex items-center gap-2 text-[var(--bg)] mix-blend-difference">
            {typeof index === 'number' && (
              <span className="font-mono-label opacity-90">№ {String(index + 1).padStart(2, '0')}</span>
            )}
          </div>

          <div className="absolute bottom-4 right-4 flex max-w-[calc(100%-2rem)] translate-y-3 flex-wrap justify-end gap-2 opacity-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100">
            <span className="chip border-[var(--bg)] text-[var(--bg)] mix-blend-difference">
              {categoryLabel(project.category)}
            </span>
            {project.industries.map((ind) => (
              <span
                key={ind}
                className="chip border-[var(--bg)] text-[var(--bg)] mix-blend-difference"
              >
                {projectIndustryLabels[ind]}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-6">
          <div>
            <h3 className="font-display text-[1.6rem] leading-tight tracking-tight md:text-[1.85rem]">
              <span className="link-underline">{project.title}</span>
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              <span>{project.client}</span>
              <span className="mx-2 inline-block h-1 w-1 rounded-full bg-[var(--line-2)] align-middle" />
              <span className="font-mono-label">{project.date}</span>
            </p>
          </div>

          <span
            aria-hidden
            className="hidden items-center gap-2 text-[var(--ink)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:inline-flex"
          >
            <span className="font-mono-label">View</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        <p className="mt-3 max-w-[42ch] text-[15px] text-[var(--ink-2)]">{project.description}</p>
      </Link>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[var(--bg)] bg-transparent px-3 py-1.5 text-[var(--bg)] mix-blend-difference transition-colors hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white hover:mix-blend-normal"
        >
          <span className="font-mono-label !text-[10px] !text-current">Live</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      )}
    </article>
  );
};

export default ProjectCard;
