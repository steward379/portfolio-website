import type { CSSProperties } from 'react';

/** 首頁與各頁 hero 共用：頁面上看見的柔和光暈 */
export const heroRadialBackground: CSSProperties = {
  backgroundImage:
    'radial-gradient(circle at 20% 0%, color-mix(in oklab, var(--accent) 9%, transparent), transparent 45%), radial-gradient(circle at 90% 30%, color-mix(in oklab, var(--ink) 5%, transparent), transparent 55%)',
};

/** 給 data-magnifier-source 用：與版面光暈一致，無網格紋理 */
export const heroLoupeSourceBackground: CSSProperties = {
  backgroundColor: 'var(--bg)',
  backgroundImage: heroRadialBackground.backgroundImage,
};
