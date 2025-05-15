
import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/contexts/LocaleContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-lares-700" />
          <h1 className="text-xl font-bold text-lares-900">
            Lares <span className="text-lares-700">Aislaciones</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-lares-900 hover:text-lares-700 font-medium">
            {t('header.home')}
          </a>
          <a href="#servicios" className="text-lares-900 hover:text-lares-700 font-medium">
            {t('header.services')}
          </a>
          <a href="#nosotros" className="text-lares-900 hover:text-lares-700 font-medium">
            {t('header.about')}
          </a>
          <a href="#proyectos" className="text-lares-900 hover:text-lares-700 font-medium">
            {t('header.projects')}
          </a>
          <a href="#contacto" className="text-lares-900 hover:text-lares-700 font-medium">
            {t('header.contact')}
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button className="bg-lares-700 hover:bg-lares-800">
            {t('header.getQuote')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-lares-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#inicio" className="text-lares-900 py-2 font-medium border-b border-gray-100"
               onClick={() => setMenuOpen(false)}>
              {t('header.home')}
            </a>
            <a href="#servicios" className="text-lares-900 py-2 font-medium border-b border-gray-100"
               onClick={() => setMenuOpen(false)}>
              {t('header.services')}
            </a>
            <a href="#nosotros" className="text-lares-900 py-2 font-medium border-b border-gray-100"
               onClick={() => setMenuOpen(false)}>
              {t('header.about')}
            </a>
            <a href="#proyectos" className="text-lares-900 py-2 font-medium border-b border-gray-100"
               onClick={() => setMenuOpen(false)}>
              {t('header.projects')}
            </a>
            <a href="#contacto" className="text-lares-900 py-2 font-medium border-b border-gray-100"
               onClick={() => setMenuOpen(false)}>
              {t('header.contact')}
            </a>
            <Button className="bg-lares-700 hover:bg-lares-800 w-full" onClick={() => setMenuOpen(false)}>
              {t('header.getQuote')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
