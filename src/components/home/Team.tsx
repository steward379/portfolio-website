'use client';

import { useEffect, useRef, useState } from 'react';
import { teamMembers, type TeamMember } from '@/data/team';
import MagnifierSection from '@/components/ui/MagnifierSection';
import { heroLoupeSourceBackground } from '@/lib/heroGradient';

const isLogo = (id: string) => id === 'Futual' || id === 'Xyloc';

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const [imgErr, setImgErr] = useState(false);
  const [imgOk, setImgOk] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const logo = isLogo(member.id);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalHeight !== 0) {
      setImgOk(true);
    }
  }, [member.image]);

  return (
    <article
      className="group relative grid grid-cols-12 items-start gap-y-6 border-b border-[var(--line)] py-10 md:gap-x-6 md:py-14"
      data-reveal
      style={{ ['--reveal-delay' as string]: `${index * 70}ms` }}
    >
      <span className="numeral col-span-2 text-2xl md:col-span-1 md:text-3xl">
        0{index + 1}
      </span>

      <div className="col-span-10 md:col-span-3">
        {logo ? (
          <div className="frame relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden p-6 md:p-8">
            {!imgErr ? (
              <>
                <img
                  ref={imgRef}
                  src={member.image}
                  alt={member.name}
                  className={`max-h-full max-w-full object-contain transition-opacity duration-700 ease-[var(--ease-out-expo)] ${
                    imgOk ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onError={() => setImgErr(true)}
                  onLoad={() => setImgOk(true)}
                />
                {!imgOk && <div className="absolute inset-0 animate-pulse bg-[var(--surface)]" />}
              </>
            ) : (
              <span className="font-mono-label">{member.name}</span>
            )}
          </div>
        ) : (
          <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-full bg-[var(--surface)] ring-1 ring-[var(--line-2)] md:mx-0">
            {!imgErr ? (
              <>
                <img
                  ref={imgRef}
                  src={member.image}
                  alt={member.name}
                  className={`absolute inset-0 h-full w-full object-cover transition-[opacity,filter,transform] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04] ${
                    imgOk ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ filter: 'saturate(0.75) contrast(1.02)' }}
                  loading="lazy"
                  onError={() => setImgErr(true)}
                  onLoad={() => setImgOk(true)}
                />
                {!imgOk && <div className="absolute inset-0 animate-pulse bg-[var(--surface)]" />}
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--muted)]">
                {member.name}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="col-span-12 md:col-span-8 md:pl-6">
        <h3 className="font-display text-[1.9rem] leading-tight tracking-tight md:text-[2.4rem]">
          {member.name}
        </h3>
        <p
          className="mt-2 text-[13px] leading-relaxed text-[var(--accent-ink)] [&_br]:block"
          dangerouslySetInnerHTML={{ __html: member.role }}
        />
        <p className="mt-5 max-w-[58ch] text-[var(--ink-2)]">{member.bio}</p>

        <div className="mt-6 flex items-center gap-4 text-[var(--muted)]">
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}的LinkedIn`}
              className="link-underline text-[var(--ink)]"
            >
              <span className="font-mono-label !text-[var(--ink)]">LinkedIn</span>
            </a>
          )}
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}的Twitter`}
              className="link-underline text-[var(--ink)]"
            >
              <span className="font-mono-label !text-[var(--ink)]">Twitter</span>
            </a>
          )}
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}的GitHub`}
              className="link-underline text-[var(--ink)]"
            >
              <span className="font-mono-label !text-[var(--ink)]">GitHub</span>
            </a>
          )}
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
      />
    </article>
  );
};

const Team = () => {
  return (
    <MagnifierSection className="relative bg-[var(--bg)] py-32 md:py-44" data-spotlight>
      <div data-magnifier-stack className="relative">
        <div
          aria-hidden
          data-magnifier-source
          className="pointer-events-none absolute inset-0 -z-10"
          style={heroLoupeSourceBackground}
        />
        <div className="shell">
          <div
            className="grid grid-cols-12 items-end gap-y-10 border-b border-[var(--line)] pb-10 md:gap-x-6"
            data-reveal
          >
            <div className="col-span-12 md:col-span-4">
              <div className="eyebrow">Team · 04</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-[clamp(2rem,6vw,4rem)] leading-[0.95]">
                A group of professionals <br />
                from different <span className="font-display-italic">spectrums</span>
                <br />
                brought together by <br />a shared sense of{' '}
                <span className="font-display-italic">good taste</span>
              </h2>
              <div data-magnifier-exclude>
                <p className="mt-2 max-w-[52ch] text-[1.5rem] leading-relaxed text-[var(--ink-2)] md:text-[1.5rem]">
                  我們是一家專注於網站開發和設計的工作室，提供從概念到實現的全方位服務。
                  以編輯設計的細節，工程師的嚴謹，幫品牌建立經得起時間的數位形象。
                </p>
              </div>
            </div>
          </div>

          <div data-magnifier-exclude className="mt-2">
            {teamMembers.map((m, i) => (
              <TeamCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </MagnifierSection>
  );
};

export default Team;
