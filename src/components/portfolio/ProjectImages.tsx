'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { assetUrl } from '@/lib/assetUrl';
import frameStyles from './projectMediaFrame.module.css';

interface ProjectImagesProps {
  mainImage: string;
  images?: string[];
  title: string;
}

const ProjectImages = ({ mainImage, images, title }: ProjectImagesProps) => {
  const resolvedMain = assetUrl(mainImage);
  const thumbUrls = useMemo(() => (images ?? []).map(assetUrl), [images]);

  const [current, setCurrent] = useState(resolvedMain);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState<Set<string>>(new Set());
  const refs = useRef<Map<string, HTMLImageElement>>(new Map());

  useEffect(() => {
    const next = assetUrl(mainImage);
    setCurrent(next);
    setErrors(new Set());
    setLoaded(new Set());
    refs.current = new Map();
  }, [mainImage]);

  const setRef = (src: string, el: HTMLImageElement | null) => {
    if (el) refs.current.set(src, el);
  };

  const onErr = (src: string) => setErrors((p) => new Set(p).add(src));
  const onLoad = (src: string) =>
    setLoaded((p) => {
      if (p.has(src)) return p;
      const n = new Set(p);
      n.add(src);
      return n;
    });

  useEffect(() => {
    const id = setTimeout(() => {
      const all = [current, ...thumbUrls];
      all.forEach((src) => {
        const img = refs.current.get(src);
        if (img && img.complete && img.naturalHeight !== 0) onLoad(src);
      });
    }, 0);
    return () => clearTimeout(id);
  }, [current, thumbUrls]);

  return (
    <div>
      <div className={`frame relative w-full ${frameStyles.shell} ${frameStyles.mainViewer}`}>
        {!errors.has(current) ? (
          <div className="relative w-full">
            {!loaded.has(current) && (
              <div
                className="aspect-[16/10] w-full animate-pulse bg-[var(--surface)]"
                aria-hidden
              />
            )}
            <img
              ref={(el) => setRef(current, el)}
              src={current}
              alt={`${title} — 主要專案圖片`}
              className={
                loaded.has(current)
                  ? 'opacity-100'
                  : 'absolute left-0 top-0 w-full opacity-0'
              }
              style={{
                transition: 'opacity 700ms var(--ease-out-expo)',
              }}
              loading="lazy"
              onError={() => onErr(current)}
              onLoad={() => onLoad(current)}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--muted)]">
            圖片載入失敗
          </div>
        )}
      </div>

      {thumbUrls.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-4">
          {thumbUrls.map((resolvedSrc, i) => (
            <button
              key={`${resolvedSrc}-${i}`}
              type="button"
              onClick={() => {
                setCurrent(resolvedSrc);
                setErrors((p) => {
                  const n = new Set(p);
                  n.delete(resolvedSrc);
                  return n;
                });
              }}
              className={`frame relative aspect-square overflow-hidden transition-shadow duration-300 ${frameStyles.shell} ${
                current === resolvedSrc ? 'ring-2 ring-[var(--ink)]' : 'ring-1 ring-transparent hover:ring-[var(--line)]'
              }`}
              aria-label={`縮圖 ${i + 1}`}
            >
              {!errors.has(resolvedSrc) ? (
                <>
                  <img
                    ref={(el) => setRef(resolvedSrc, el)}
                    src={resolvedSrc}
                    alt={`${title} — 專案圖片 ${i + 1}`}
                    className={`absolute inset-0 ${loaded.has(resolvedSrc) ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'opacity 700ms var(--ease-out-expo)',
                    }}
                    loading="lazy"
                    onError={() => onErr(resolvedSrc)}
                    onLoad={() => onLoad(resolvedSrc)}
                  />
                  {!loaded.has(resolvedSrc) && (
                    <div className="absolute inset-0 animate-pulse bg-[var(--surface)]" />
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-xs text-[var(--muted)]">
                  載入失敗
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectImages;
