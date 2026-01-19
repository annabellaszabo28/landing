import { motion } from "framer-motion";

// Placeholder logos - in a real scenario, we would use actual SVGs or images
const companies = [
    { name: "Company 1", logo: "https://via.placeholder.com/150x50?text=Logo+1" },
    { name: "Company 2", logo: "https://via.placeholder.com/150x50?text=Logo+2" },
    { name: "Company 3", logo: "https://via.placeholder.com/150x50?text=Logo+3" },
    { name: "Company 4", logo: "https://via.placeholder.com/150x50?text=Logo+4" },
    { name: "Company 5", logo: "https://via.placeholder.com/150x50?text=Logo+5" },
    { name: "Company 6", logo: "https://via.placeholder.com/150x50?text=Logo+6" },
];

export default function TrustedBy() {
    return (
        <section className="py-12 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
            <div className="container mb-8 text-center">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Trusted By Innovative Teams</p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {/* First set of logos */}
                    {companies.map((company, index) => (
                        <div key={index} className="mx-12 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            {/* Replace this div with actual img tag when logos are available */}
                            <div className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center text-slate-400 font-bold text-xs">
                                {company.name}
                            </div>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {companies.map((company, index) => (
                        <div key={`dup-${index}`} className="mx-12 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <div className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center text-slate-400 font-bold text-xs">
                                {company.name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
                    {/* Second marque layer if needed, or just CSS based infinite scroll */}
                </div>
            </div>

            {/* Add custom keyframes for marquee in index.css if not present, or use standard tailwind animate-spin or custom class */}
            <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}
