
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/contexts/LocaleContext";

const Projects = () => {
  const { t } = useLocale();
  
  const projectCategories = [
    t('projects.categories.all') as string, 
    t('projects.categories.residential') as string, 
    t('projects.categories.commercial') as string, 
    t('projects.categories.industrial') as string
  ];

  // Project data with translation keys
  const projectsData = [
    {
      id: 1,
      titleKey: "projects.projects.facadeInsulation.title",
      category: t('projects.categories.residential') as string,
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=1200",
      descriptionKey: "projects.projects.facadeInsulation.description"
    },
    {
      id: 2,
      titleKey: "projects.projects.terraceWaterproofing.title",
      category: t('projects.categories.residential') as string,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200",
      descriptionKey: "projects.projects.terraceWaterproofing.description"
    },
    {
      id: 3,
      titleKey: "projects.projects.industrialInsulation.title",
      category: t('projects.categories.industrial') as string,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200",
      descriptionKey: "projects.projects.industrialInsulation.description"
    },
    {
      id: 4,
      titleKey: "projects.projects.roofWaterproofing.title",
      category: t('projects.categories.commercial') as string,
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=1200",
      descriptionKey: "projects.projects.roofWaterproofing.description"
    },
  ];

  const [activeCategory, setActiveCategory] = useState(projectCategories[0]);

  const filteredProjects = activeCategory === projectCategories[0] 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <p className="text-gray-600">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-lares-700 text-white"
                  : "bg-lares-50 text-lares-700 hover:bg-lares-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={project.image}
                  alt={t(project.titleKey) as string}
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <span className="text-sm font-medium text-lares-300 bg-lares-900/60 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{t(project.titleKey)}</h3>
                    <p className="text-gray-200 mt-2">{t(project.descriptionKey)}</p>
                  </div>
                </div>
              </div>
              <div className="md:hidden mt-3">
                <span className="text-sm font-medium text-lares-700">{project.category}</span>
                <h3 className="text-xl font-bold">{t(project.titleKey)}</h3>
                <p className="text-gray-600 mt-1">{t(project.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-lares-700 hover:bg-lares-800">
            {t('projects.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
