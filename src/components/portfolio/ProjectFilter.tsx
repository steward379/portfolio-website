import { Project } from '@/data/projects';

interface ProjectFilterProps {
  selectedCategory: Project['category'] | null;
  selectedIndustry: Project['industry'] | null;
  onCategoryChange: (category: Project['category'] | null) => void;
  onIndustryChange: (industry: Project['industry'] | null) => void;
  onReset: () => void;
  total: number;
}

const categories: { value: Project['category']; label: string }[] = [
  { value: 'website', label: '網站開發' },
  { value: 'design', label: '設計' },
];

const industries: { value: Project['industry']; label: string }[] = [
  { value: 'healthcare', label: '醫療' },
  { value: 'finance', label: '金融' },
  { value: 'food', label: '餐飲' },
  { value: 'technology', label: '科技' },
  { value: 'education', label: '教育' },
  { value: 'retail', label: '零售' },
];

const ProjectFilter = ({
  selectedCategory,
  selectedIndustry,
  onCategoryChange,
  onIndustryChange,
  onReset,
  total,
}: ProjectFilterProps) => {
  const hasFilter = !!(selectedCategory || selectedIndustry);

  return (
    <div className="border-y border-[var(--line)] py-8">
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-6">
        <div className="col-span-12 md:col-span-2">
          <div className="font-mono-label">Filter</div>
          <div className="mt-1 text-sm text-[var(--muted)]">
            {String(total).padStart(2, '0')} <span className="font-mono-label">items</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="font-mono-label mb-3">By category</div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onCategoryChange(null)}
              className={`chip ${selectedCategory === null ? 'is-active' : ''}`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => onCategoryChange(c.value)}
                className={`chip ${selectedCategory === c.value ? 'is-active' : ''}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="font-mono-label mb-3">By industry</div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onIndustryChange(null)}
              className={`chip ${selectedIndustry === null ? 'is-active' : ''}`}
            >
              All
            </button>
            {industries.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => onIndustryChange(c.value)}
                className={`chip ${selectedIndustry === c.value ? 'is-active' : ''}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {hasFilter && (
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onReset}
            className="link-underline text-sm text-[var(--accent-ink)]"
          >
            重設篩選條件
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;
