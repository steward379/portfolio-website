import { Project } from '@/data/projects';

interface ProjectFilterProps {
  selectedCategory: Project['category'] | null;
  selectedIndustry: Project['industry'] | null;
  onCategoryChange: (category: Project['category'] | null) => void;
  onIndustryChange: (industry: Project['industry'] | null) => void;
  onReset: () => void;
}

const ProjectFilter = ({
  selectedCategory,
  selectedIndustry,
  onCategoryChange,
  onIndustryChange,
  onReset,
}: ProjectFilterProps) => {
  // 類別選項
  const categories = [
    { value: 'website', label: '網站開發' },
    { value: 'design', label: '設計' },
  ];

  // 產業選項
  const industries = [
    { value: 'healthcare', label: '醫療' },
    { value: 'finance', label: '金融' },
    { value: 'food', label: '餐飲' },
    { value: 'technology', label: '科技' },
    { value: 'education', label: '教育' },
    { value: 'retail', label: '零售' },
  ];

  return (
    <div className="mb-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">篩選作品</h2>
          {(selectedCategory || selectedIndustry) && (
            <button
              onClick={onReset}
              className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
            >
              <svg 
                className="w-4 h-4 mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                />
              </svg>
              重設篩選條件
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 類別篩選 */}
          <div>
            <h3 className="font-medium mb-3 text-gray-700">依類別篩選</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onCategoryChange(null)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                全部
              </button>
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => onCategoryChange(category.value as Project['category'])}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* 產業篩選 */}
          <div>
            <h3 className="font-medium mb-3 text-gray-700">依產業篩選</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onIndustryChange(null)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedIndustry === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                全部
              </button>
              {industries.map((industry) => (
                <button
                  key={industry.value}
                  onClick={() => onIndustryChange(industry.value as Project['industry'])}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedIndustry === industry.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {industry.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;