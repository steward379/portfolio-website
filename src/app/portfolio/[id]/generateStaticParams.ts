// src/app/portfolio/[id]/generateStaticParams.ts
import { projects } from '@/data/projects';

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  return projects.map((project) => ({ id: project.id }));
}
