import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from '@/components/portfolio/Card';

const FeaturedWorks = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">精選作品</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索我們最近完成的一些作品，展示我們在不同領域的專業技能和創意
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/portfolio" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            查看所有作品
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;