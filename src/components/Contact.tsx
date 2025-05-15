
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const Contact = () => {
  const { t } = useLocale();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);
    alert("¡Gracias por contactarnos! Te responderemos a la brevedad.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contacto" className="section-padding bg-lares-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">{t('contact.title')}</span>
              </h2>
              <p className="text-gray-700 mb-8">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-lares-100 p-3 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-lares-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lares-900">{t('contact.contactInfo.phone')}</h3>
                    <p className="text-gray-700">+34 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lares-100 p-3 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-lares-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lares-900">{t('contact.contactInfo.email')}</h3>
                    <p className="text-gray-700">info@laresaislaciones.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lares-100 p-3 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-lares-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lares-900">{t('contact.contactInfo.address')}</h3>
                    <p className="text-gray-700">Barcelona, España</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">{t('contact.schedule.title')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('contact.schedule.mondayFriday')}</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('contact.schedule.saturday')}</span>
                    <span className="font-medium">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('contact.schedule.sunday')}</span>
                    <span className="font-medium">{t('contact.schedule.closed')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lares-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lares-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lares-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lares-500"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-lares-700 hover:bg-lares-800 mt-4">
                  {t('contact.form.button')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
