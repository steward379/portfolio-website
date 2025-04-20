//generateMetadata
import { Metadata } from 'next';
import { getProjectById } from '@/data/projects';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: '作品不存在 | 設計公司',
    };
  }

  return {
    title: `${project.title} | 設計公司`,
    description: project.description,
  };
}
