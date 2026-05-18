import { Project } from '@/data/projects';
import ProjectCard from './Card';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  if (projects.length === 0) {
    return (
      <div className="border-y border-[var(--line)] py-32 text-center">
        <div className="eyebrow justify-center">No matches</div>
        <h3 className="mt-6 font-display text-3xl tracking-tight md:text-4xl">
          沒有符合篩選條件的作品
        </h3>
        <p className="mt-3 text-[var(--muted)]">請嘗試其他篩選條件，或重設篩選</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-20 pt-20 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <div
          key={p.id}
          data-reveal
          style={{ ['--reveal-delay' as string]: `${(i % 3) * 70}ms` }}
        >
          <ProjectCard project={p} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
