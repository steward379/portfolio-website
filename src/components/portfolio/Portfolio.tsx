'use client';

import { useState } from 'react';
import { filterProjects, Project } from '@/data/projects';
import ProjectFilter from './ProjectFilter';
import ProjectGrid from './ProjectGrid';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<Project['industry'] | null>(null);

  const projects = filterProjects(selectedCategory, selectedIndustry);

  const handleCategoryChange = (category: Project['category'] | null) => {
    setSelectedCategory(category);
  };

  const handleIndustryChange = (industry: Project['industry'] | null) => {
    setSelectedIndustry(industry);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedIndustry(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <ProjectFilter 
          selectedCategory={selectedCategory}
          selectedIndustry={selectedIndustry}
          onCategoryChange={handleCategoryChange}
          onIndustryChange={handleIndustryChange}
          onReset={resetFilters}
        />
        
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;