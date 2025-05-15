
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-lares-50">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=1200"
                alt="Juan Pérez, especialista en aislamiento térmico"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-lares-900 font-bold">
                "Cada proyecto es único y requiere soluciones personalizadas para lograr resultados óptimos."
              </p>
              <p className="text-lares-700 mt-2">- Juan Pérez, Especialista Principal</p>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Conoce a <span className="text-gradient">Nuestro Equipo</span>
              </h2>
              <p className="text-gray-700 mb-4">
                En Lares Aislaciones, nos enorgullece contar con un equipo de profesionales altamente calificados, 
                liderados por Juan Pérez, un experto con más de 20 años de experiencia en la industria de la construcción.
              </p>
              <p className="text-gray-700 mb-4">
                Juan es un especialista reconocido en aislamiento térmico con espuma de poliuretano e 
                impermeabilizaciones con poliurea. Su profundo conocimiento abarca diversas marcas internacionales 
                de maquinaria y productos utilizados en este campo.
              </p>
              <p className="text-gray-700">
                Además de su experiencia técnica, Juan ha liderado numerosos proyectos de construcción y 
                posee habilidades sólidas en la conducción de obras, garantizando que cada proyecto se 
                complete con los más altos estándares de calidad.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-lares-100 mb-6">
              <h3 className="text-xl font-bold mb-3">Nuestra Misión</h3>
              <p className="text-gray-700">
                Proporcionar soluciones de aislamiento térmico e impermeabilización de la más alta calidad, 
                contribuyendo a la eficiencia energética y sostenibilidad de los edificios en Barcelona y alrededores.
              </p>
            </div>

            <Button className="bg-lares-700 hover:bg-lares-800">
              Conócenos Mejor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
