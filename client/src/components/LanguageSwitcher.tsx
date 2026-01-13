import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
    };

    const currentLang = i18n.language.split('-')[0];

    return (
        <div className="flex p-1 bg-slate-100/50 backdrop-blur-md rounded-full border border-slate-200 shadow-inner">
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider transition-all duration-300 ${currentLang === 'en'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage('hu')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider transition-all duration-300 ${currentLang === 'hu'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                    }`}
            >
                HU
            </button>
        </div>
    );
}
