
import { Shield, Construction, Layers, MapPin } from "lucide-react";

const serviceItems = [
  {
    icon: <Shield className="w-10 h-10 text-lares-700" />,
    title: "Aislamiento Térmico",
    description: "Aplicamos espuma de poliuretano para un aislamiento térmico óptimo, reduciendo el consumo energético y proporcionando confort.",
  },
  {
    icon: <Construction className="w-10 h-10 text-lares-700" />,
    title: "Impermeabilización",
    description: "Servicios de impermeabilización con poliurea, garantizando protección duradera contra la humedad y filtraciones.",
  },
  {
    icon: <Layers className="w-10 h-10 text-lares-700" />,
    title: "Rehabilitación Energética",
    description: "Reacondicionamos trabajos previos o intervenimos en nuevas obras para optimizar la eficiencia energética de los edificios.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-lares-700" />,
    title: "Proyectos a Medida",
    description: "Diseñamos soluciones personalizadas adaptadas a las necesidades específicas de cada cliente y proyecto.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-gray-600">
            Ofrecemos soluciones integrales de aislamiento térmico e impermeabilización, tanto para rehabilitación de edificios existentes como para nuevas construcciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="mb-4 p-3 bg-lares-50 rounded-lg inline-block group-hover:bg-lares-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-lares-50 rounded-lg p-8 border border-lares-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">¿Por qué elegir el aislamiento con poliuretano?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-lares-700 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Alto poder aislante con mínimo espesor</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-lares-700 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Continuidad del aislamiento sin juntas ni puentes térmicos</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-lares-700 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Gran durabilidad y resistencia a la humedad</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-lares-700 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Ahorro energético de hasta un 70%</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Ventajas de la impermeabilización con poliurea</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-lares-700 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Máxima elasticidad y resistencia al desgarro</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-lares-700 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Secado ultra rápido (5-15 segundos)</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-lares-700 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Excelente adherencia a casi cualquier superficie</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-lares-700 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Alta resistencia química y a la intemperie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
