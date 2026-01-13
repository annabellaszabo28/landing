import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'hu' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors rounded-full px-3"
            aria-label="Toggle language"
        >
            <Languages size={18} />
            <span className="text-xs font-bold uppercase">{i18n.language.split('-')[0]}</span>
        </Button>
    );
}
