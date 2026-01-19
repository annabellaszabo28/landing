import { motion } from "framer-motion";

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

export default function TrustedBy() {
    return (
        <section className="py-12 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
            <div className="container mb-8 text-center">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Trusted By Innovative Teams</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {/* First set of logos */}
                    {companies.map((company, index) => (
                        <div key={index} className="mx-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <img
                                src={`https://logo.clearbit.com/${company.domain}`}
                                alt={company.name}
                                className="h-12 w-auto max-w-[150px] object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerText = company.name;
                                    e.currentTarget.parentElement!.className = "mx-8 text-sm font-bold text-slate-400 h-12 flex items-center";
                                }}
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {companies.map((company, index) => (
                        <div key={`dup-${index}`} className="mx-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <img
                                src={`https://logo.clearbit.com/${company.domain}`}
                                alt={company.name}
                                className="h-12 w-auto max-w-[150px] object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerText = company.name;
                                    e.currentTarget.parentElement!.className = "mx-8 text-sm font-bold text-slate-400 h-12 flex items-center";
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}
