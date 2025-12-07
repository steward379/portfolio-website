import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getCategoryLabel = (category: Project['category']) => {
    return category === 'website' ? '網站開發' : '設計';
  };

  const getIndustryLabel = (industry: Project['industry']) => {
    const industryLabels: Record<Project['industry'], string> = {
      healthcare: '醫療',
      finance: '金融',
      food: '餐飲',
      technology: '科技',
      education: '教育',
      retail: '零售',
    };
    return industryLabels[industry];
  };

  return (
    <Link 
      href={`/portfolio/${project.id}`} 
      className="group block overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-700">{project.title}的預覽圖</span>
        </div>
        {/* 在實際專案中，這裡會顯示真實的作品圖片 */}
        {/* <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <div className="flex space-x-2 mb-2">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                {getCategoryLabel(project.category)}
              </span>
              <span className="inline-block px-3 py-1 bg-gray-600 text-white text-xs rounded-full">
                {getIndustryLabel(project.industry)}
              </span>
            </div>
            <h3 className="text-lg font-bold">{project.title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <span className="text-sm text-gray-900">{project.date}</span>
        </div>
        <p className="text-gray-900 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900">客戶: {project.client}</span>
          <span className="text-blue-600 text-sm font-medium group-hover:underline">
            查看詳情
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;