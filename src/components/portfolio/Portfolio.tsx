'use client';

import { useState } from 'react';
import { filterProjects, Project } from '@/data/projects';
import ProjectFilter from './ProjectFilter';
import ProjectGrid from './ProjectGrid';
import NonDisclosedWorksNote from './NonDisclosedWorksNote';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<Project['industry'] | null>(null);

  const projects = filterProjects(selectedCategory, selectedIndustry);

  return (
    <section className="bg-[var(--bg)] py-24 md:py-32">
      <div className="shell">
        <ProjectFilter
          selectedCategory={selectedCategory}
          selectedIndustry={selectedIndustry}
          onCategoryChange={setSelectedCategory}
          onIndustryChange={setSelectedIndustry}
          onReset={() => {
            setSelectedCategory(null);
            setSelectedIndustry(null);
          }}
          total={projects.length}
        />
        <ProjectGrid projects={projects} />
        <NonDisclosedWorksNote />
      </div>
    </section>
  );
};

export default Portfolio;
