import { motion } from "framer-motion";
import React from 'react';

const companies = [
    { name: "Biotech USA", domain: "biotechusa.com" },
    { name: "Scitec Nutrition", domain: "scitecnutrition.com" },
    { name: "Bitcoin.com", domain: "bitcoin.com" },
    { name: "Tangem", domain: "tangem.com" },
    { name: "Chiliz", domain: "chiliz.com" },
    { name: "Houdini Swap", domain: "houdiniswap.com" },
    { name: "Polygon", domain: "polygon.technology" },
    { name: "Near", domain: "near.org" },
    { name: "Tokendon", domain: "tokendon.com" },
    { name: "Galaxis", domain: "galaxis.xyz" },
    { name: "Celo", domain: "celo.org" },
    { name: "Concordium", domain: "concordium.com" },
    { name: "Polkamarkets", domain: "polkamarkets.com" },
    { name: "Sweatcoin", domain: "sweatco.in" },
    { name: "Coinzilla", domain: "coinzilla.com" },
    { name: "Waves", domain: "waves.tech" },
    { name: "OG Crystals", domain: "ogcrystals.com" },
    { name: "Hermitage Museum", domain: "hermitagemuseum.org" },
    { name: "FUNToken", domain: "funtoken.io" },
    { name: "Sharkroll", domain: "sharkroll.io" },
    { name: "CoinDesk", domain: "coindesk.com" },
    { name: "CoinTelegraph", domain: "cointelegraph.com" },
    { name: "The Block", domain: "theblock.co" },
    { name: "Decrypt", domain: "decrypt.co" },
    { name: "Messari", domain: "messari.io" },
    { name: "Centrifuge", domain: "centrifuge.io" },
    { name: "Aave", domain: "aave.com" },
    { name: "SupraOracles", domain: "supraoracles.com" },
    { name: "MakerDAO", domain: "makerdao.com" },
    { name: "Atari", domain: "atari.com" },
    { name: "Ideaology", domain: "ideaology.io" },
];

// Sub-component to handle logo fallback logic
function CompanyLogo({ company }: { company: { name: string, domain: string } }) {
    const [stats, setStatus] = React.useState<'clearbit' | 'google' | 'text'>('clearbit');

    return (
        <a
            href={`https://${company.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-24 transition-transform hover:scale-105 flex items-center justify-center h-20 w-52 relative group"
        >
            {/* Tooltip for the company name */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-sm font-bold py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                {company.name}
            </div>

            {stats === 'text' ? (
                <span className="text-lg font-bold text-white/90 font-heading">{company.name}</span>
            ) : (
                <img
                    src={company.domain === 'near.org'
                        ? '/logos/near.png'
                        : (stats === 'clearbit'
                            ? `https://logo.clearbit.com/${company.domain}`
                            : `https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`)
                    }
                    alt={company.name}
                    className={`max-h-10 w-auto max-w-[180px] object-contain transition-all duration-500
                        ${company.domain === 'near.org'
                            ? 'opacity-70 group-hover:opacity-100 filter brightness-200'
                            : 'opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0'
                        }`}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (company.domain === 'near.org') {
                            // Fallback if local image fails, though it shouldn't
                            target.src = `https://logo.clearbit.com/${company.domain}`;
                            setStatus('clearbit');
                            return;
                        }

                        if (stats === 'clearbit') setStatus('google');
                        else setStatus('text');
                    }}
                />
            )}
        </a>
    );
}

// Main Component
export default function TrustedBy() {
    return (
        <section className="py-16 border-y border-white/5 bg-[#020420] overflow-hidden relative">
            {/* Retired Glow Effects */}
            <div className="container mb-16 text-center">
                <p className="text-sm font-bold text-white/20 uppercase tracking-[0.2em]">Trusted By Innovative Teams</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {/* First set of logos */}
                    {companies.map((company, index) => (
                        <CompanyLogo key={index} company={company} />
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {companies.map((company, index) => (
                        <CompanyLogo key={`dup-${index}`} company={company} />
                    ))}
                </div>
            </div>

            <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}
