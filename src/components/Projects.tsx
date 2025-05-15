
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projectCategories = ["Todos", "Residencial", "Comercial", "Industrial"];

const projectsData = [
  {
    id: 1,
    title: "Aislamiento de Fachada",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=1200",
    description: "Aislamiento térmico de fachada con espuma de poliuretano para mejorar la eficiencia energética del edificio."
  },
  {
    id: 2,
    title: "Impermeabilización de Terraza",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200",
    description: "Impermeabilización de terraza con poliurea para prevenir filtraciones y humedades."
  },
  {
    id: 3,
    title: "Aislamiento de Nave Industrial",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200",
    description: "Aislamiento térmico de nave industrial para mantener temperatura constante y reducir costes energéticos."
  },
  {
    id: 4,
    title: "Impermeabilización de Cubierta",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=1200",
    description: "Impermeabilización de cubierta de edificio comercial con poliurea para garantizar estanqueidad."
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-gray-600">
            Descubre algunos de nuestros trabajos más recientes en Barcelona y alrededores. 
            Cada proyecto refleja nuestra dedicación a la excelencia y la satisfacción del cliente.
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
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <span className="text-sm font-medium text-lares-300 bg-lares-900/60 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                    <p className="text-gray-200 mt-2">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="md:hidden mt-3">
                <span className="text-sm font-medium text-lares-700">{project.category}</span>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-lares-700 hover:bg-lares-800">
            Ver Más Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
