import { services } from '@/data/services';

const Services = () => {
  return (
    <section className="relative bg-[var(--bg)] py-32 md:py-44">
      <div className="shell">
        <div
          className="grid grid-cols-12 items-end gap-y-10 border-b border-[var(--line)] pb-10 md:gap-x-6"
          data-reveal
        >
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">Services · 02</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-tight">
              我們做的，是讓品牌
              <span className="font-display-italic"> 被細讀 </span>
              的數位介面。
            </h2>
          </div>
        </div>

        <ul className="mt-2">
          {services.map((service, i) => (
            <li
              key={service.id}
              className="group relative grid grid-cols-12 items-baseline gap-y-3 border-b border-[var(--line)] py-9 transition-colors duration-300 md:gap-x-6 md:py-12"
              data-reveal
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
            >
              <span className="numeral col-span-2 text-3xl md:col-span-1 md:text-4xl">
                0{i + 1}
              </span>

              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                  <span className="link-underline">{service.title}</span>
                </h3>
              </div>

              <p className="col-span-12 max-w-[60ch] text-[var(--ink-2)] md:col-span-6">
                {service.description}
              </p>

              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-3 text-[var(--accent)] opacity-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0 group-hover:opacity-100 md:block"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
