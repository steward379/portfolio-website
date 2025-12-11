import { use } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectById, projects } from '@/data/projects';

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ id: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const project = getProjectById(params.id);
  if (!project) {
    return { title: '作品不存在 | 設計公司' };
  }
  return {
    title: `${project.title} | 設計公司`,
    description: project.description,
  };
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function ProjectPage({ params }: PageProps) {
  const { id } = use(params);
  // const project = getProjectById(params.id);
  const project = getProjectById(id);

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
    <div className="min-h-screen bg-white">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">專案概述</h2>
              <p className="text-gray-900 mb-8 leading-relaxed">
                {project.fullDescription || project.description}
              </p>

              <div className="mb-12">
                {project.image ? (
                  <div className="relative rounded-lg h-96 mb-4 overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={`${project.title} - 主要專案圖片`}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  </div>
                ) : (
                  <div className="bg-gray-800 rounded-lg h-96 mb-4 flex items-center justify-center">
                    <span className="text-white">主要專案圖片</span>
                  </div>
                )}

                {project.images && project.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.images.map((image, index) => (
                      <div 
                        key={index} 
                        className="relative rounded-lg h-40 overflow-hidden"
                      >
                        <Image 
                          src={image} 
                          alt={`${project.title} - 專案圖片 ${index + 1}`}
                          fill
                          className="object-cover"
                          loading="lazy"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
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
                <h3 className="text-xl font-bold mb-4 text-gray-900">專案資訊</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-gray-900">客戶:</span>
                    <span className="font-medium text-gray-900">{project.client}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-900">類別:</span>
                    <span className="font-medium text-gray-900">{getCategoryLabel()}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-900">產業:</span>
                    <span className="font-medium text-gray-900">{getIndustryLabel()}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-900">完成日期:</span>
                    <span className="font-medium text-gray-900">{project.date}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">需要相似的專案？</h3>
                <p className="text-gray-900 mb-6">
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