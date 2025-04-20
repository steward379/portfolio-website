import Link from 'next/link'
import { notFound } from 'next/navigation';
import { getProjectById } from '@/data/projects';

// 導入並重新導出這些函數
import { generateMetadata } from './generateMetadata';
import { generateStaticParams } from './generateStaticParams';

// 重新導出這些函數
export { generateMetadata, generateStaticParams };


// 動態作品詳情頁面
//@ts-ignore
export default async function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  // 使用 React.use() 來解析 params
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const getCategoryLabel = (): string => {
    return project.category === 'website' ? '網站開發' : '設計';
  };

  const getIndustryLabel = (): string => {
    const industryLabels: Record<string, string> = {
      healthcare: '醫療',
      finance: '金融',
      food: '餐飲',
      technology: '科技',
      education: '教育',
      retail: '零售',
    };
    return industryLabels[project.industry] || '其他';
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-white hover:underline mb-8"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            返回作品集
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-block px-3 py-1 bg-white text-blue-600 text-sm rounded-full">
              {getCategoryLabel()}
            </span>
            <span className="inline-block px-3 py-1 bg-blue-800 text-white text-sm rounded-full">
              {getIndustryLabel()}
            </span>
          </div>
          <p className="text-xl max-w-3xl">{project.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">專案概述</h2>
              <p className="text-gray-700 mb-8">
                {project.fullDescription || project.description}
              </p>

              <div className="mb-12">
                <div className="bg-gray-300 rounded-lg h-96 mb-4 flex items-center justify-center">
                  <span className="text-gray-600">主要專案圖片</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(project.images || []).map((_, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-200 rounded-lg h-40 flex items-center justify-center"
                    >
                      <span className="text-gray-600">專案圖片 {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.url && (
                <div className="mb-8">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span>訪問網站</span>
                    <svg 
                      className="w-5 h-5 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">專案資訊</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-gray-600">客戶:</span>
                    <span className="font-medium">{project.client}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">類別:</span>
                    <span className="font-medium">{getCategoryLabel()}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">產業:</span>
                    <span className="font-medium">{getIndustryLabel()}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">完成日期:</span>
                    <span className="font-medium">{project.date}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">需要相似的專案？</h3>
                <p className="text-gray-700 mb-6">
                  我們可以根據您的需求，為您打造獨特的品牌體驗和專業網站。
                </p>
                <Link 
                  href="/about" 
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  聯絡我們
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}