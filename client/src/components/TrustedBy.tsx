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
        <div className="mx-8 opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center h-16 w-32 relative group">
            {/* Tooltip for the company name */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                {company.name}
            </div>

            {stats === 'text' ? (
                <span className="text-sm font-bold text-slate-500 font-heading">{company.name}</span>
            ) : (
                <img
                    src={stats === 'clearbit'
                        ? `https://logo.clearbit.com/${company.domain}`
                        : `https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`
                    }
                    alt={company.name}
                    className="max-h-12 w-auto max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    onError={() => {
                        if (stats === 'clearbit') setStatus('google');
                        else setStatus('text');
                    }}
                />
            )}
        </div>
    );
}

// Main Component
export default function TrustedBy() {
    return (
        <section className="py-20 border-y border-slate-100 bg-[#FAFAFA] overflow-hidden">
            <div className="container mb-12 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Trusted By Innovative Teams</p>
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
