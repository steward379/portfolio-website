'use client';

import { useEffect, useRef, useState } from 'react';
import frameStyles from './projectMediaFrame.module.css';

interface ProjectImagesProps {
  mainImage: string;
  images?: string[];
  title: string;
}

const ProjectImages = ({ mainImage, images, title }: ProjectImagesProps) => {
  const [current, setCurrent] = useState(mainImage);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState<Set<string>>(new Set());
  const refs = useRef<Map<string, HTMLImageElement>>(new Map());

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
      const all = [current, ...(images || [])];
      all.forEach((src) => {
        const img = refs.current.get(src);
        if (img && img.complete && img.naturalHeight !== 0) onLoad(src);
      });
    }, 0);
    return () => clearTimeout(id);
  }, [current, images]);

  return (
    <div>
      <div className={`frame relative aspect-[16/10] w-full ${frameStyles.shell}`}>
        {!errors.has(current) ? (
          <>
            <img
              ref={(el) => setRef(current, el)}
              src={current}
              alt={`${title} — 主要專案圖片`}
              className={`absolute inset-0 ${loaded.has(current) ? 'opacity-100' : 'opacity-0'}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 700ms var(--ease-out-expo)',
              }}
              loading="lazy"
              onError={() => onErr(current)}
              onLoad={() => onLoad(current)}
            />
            {!loaded.has(current) && (
              <div className="absolute inset-0 animate-pulse bg-[var(--surface)]" />
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--muted)]">
            圖片載入失敗
          </div>
        )}
      </div>

      {images && images.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-4">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => {
                setCurrent(src);
                setErrors((p) => {
                  const n = new Set(p);
                  n.delete(src);
                  return n;
                });
              }}
              className={`frame relative aspect-square overflow-hidden transition-shadow duration-300 ${frameStyles.shell} ${
                current === src ? 'ring-2 ring-[var(--ink)]' : 'ring-1 ring-transparent hover:ring-[var(--line)]'
              }`}
              aria-label={`縮圖 ${i + 1}`}
            >
              {!errors.has(src) ? (
                <>
                  <img
                    ref={(el) => setRef(src, el)}
                    src={src}
                    alt={`${title} — 專案圖片 ${i + 1}`}
                    className={`absolute inset-0 ${loaded.has(src) ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'opacity 700ms var(--ease-out-expo)',
                    }}
                    loading="lazy"
                    onError={() => onErr(src)}
                    onLoad={() => onLoad(src)}
                  />
                  {!loaded.has(src) && (
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
