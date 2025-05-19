
import React from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useLocale, AvailableLocale, localeNames } from '@/contexts/LocaleContext';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" >
          {/* <Globe className="h-4 w-4" /> */}
          <span>{localeNames[locale]}</span>
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(Object.keys(localeNames) as AvailableLocale[]).map((lang) => (
          <DropdownMenuItem 
            key={lang}
            onClick={() => setLocale(lang)}
            className={locale === lang ? "font-bold bg-accent" : ""}
          >
            {localeNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
