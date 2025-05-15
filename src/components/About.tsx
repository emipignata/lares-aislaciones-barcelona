
import { Button } from "@/components/ui/button";
import { useLocale } from "@/contexts/LocaleContext";

const About = () => {
  const { t } = useLocale();

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
                "{t('about.quote')}"
              </p>
              <p className="text-lares-700 mt-2">- Juan Pérez, Especialista Principal</p>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">{t('about.title')}</span>
              </h2>
              {Array.isArray(t('about.description')) ? 
                (t('about.description') as string[]).map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                )) : 
                <p className="text-gray-700 mb-4">{t('about.description')}</p>
              }
            </div>

            <div className="bg-white p-6 rounded-lg border border-lares-100 mb-6">
              <h3 className="text-xl font-bold mb-3">{t('about.mission.title')}</h3>
              <p className="text-gray-700">
                {t('about.mission.description')}
              </p>
            </div>

            <Button className="bg-lares-700 hover:bg-lares-800">
              {t('about.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
