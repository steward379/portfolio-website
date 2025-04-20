import { Project } from '@/data/projects';
import ProjectCard from './Card';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div>
      {projects.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-medium text-gray-600">沒有符合篩選條件的作品</h3>
          <p className="mt-4 text-gray-500">請嘗試其他篩選條件或重設篩選</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;