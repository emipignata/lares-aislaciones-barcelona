
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-20 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lares-50 to-blue-50 -z-10"></div>
      
      {/* Design elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lares-100 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lares-200 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-lares-700 mr-2" />
              <h2 className="text-lares-700 font-semibold">LARES AISLACIONES</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Expertos en <span className="text-gradient">aislamiento térmico</span> e impermeabilización
            </h1>
            
            <p className="text-gray-700 mb-8 text-lg">
              Somos especialistas en aislamiento térmico con espuma de poliuretano e impermeabilizaciones con poliurea en Barcelona. Rehabilitamos energéticamente tus espacios con las mejores soluciones del mercado.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-lares-700 hover:bg-lares-800 text-white px-6 py-6" size="lg">
                Solicitar Presupuesto
              </Button>
              <Button className="bg-white border border-lares-300 text-lares-700 hover:bg-lares-50 px-6 py-6" size="lg">
                Nuestros Servicios
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-lares-700">20+</h3>
                <p className="text-gray-600 text-sm">Años de experiencia</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-lares-700">150+</h3>
                <p className="text-gray-600 text-sm">Proyectos completados</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-lares-700">100%</h3>
                <p className="text-gray-600 text-sm">Clientes satisfechos</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200" 
                alt="Lares Aislaciones - Trabajos de aislamiento térmico" 
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white text-lg font-medium">Aislamiento térmico para edificios comerciales y residenciales</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-lares-100 rounded-full border-8 border-white shadow-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
