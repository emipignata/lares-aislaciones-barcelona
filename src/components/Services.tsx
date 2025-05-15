
import { Shield, Construction, Layers, MapPin } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const Services = () => {
  const { t } = useLocale();

  const serviceItems = [
    {
      icon: <Shield className="w-10 h-10 text-lares-700" />,
      titleKey: "services.thermalInsulation.title",
      descriptionKey: "services.thermalInsulation.description",
    },
    {
      icon: <Construction className="w-10 h-10 text-lares-700" />,
      titleKey: "services.waterproofing.title",
      descriptionKey: "services.waterproofing.description",
    },
    {
      icon: <Layers className="w-10 h-10 text-lares-700" />,
      titleKey: "services.energyRehabilitation.title",
      descriptionKey: "services.energyRehabilitation.description",
    },
    {
      icon: <MapPin className="w-10 h-10 text-lares-700" />,
      titleKey: "services.customProjects.title",
      descriptionKey: "services.customProjects.description",
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{t('services.title')}</span>
          </h2>
          <p className="text-gray-600">
            {t('services.subtitle')}
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
              <h3 className="text-xl font-bold mb-3">{t(service.titleKey)}</h3>
              <p className="text-gray-600">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-lares-50 rounded-lg p-8 border border-lares-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('services.polyurethaneTitle')}</h3>
              <ul className="space-y-3">
                {(t('services.polyurethaneAdvantages') as string[]).map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 bg-lares-700 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('services.polyureaTitle')}</h3>
              <ul className="space-y-3">
                {(t('services.polyureaAdvantages') as string[]).map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 bg-lares-700 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
