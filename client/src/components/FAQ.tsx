import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReactMarkdown from "react-markdown";

export interface FAQProps {
  content?: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
}

export default function FAQ({ content }: FAQProps) {
  if (!content) return null;

  return (
    <section id="faq" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-mint font-black tracking-[0.4em] uppercase text-xs mb-6 block">Common Queries</span>
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 leading-none">
            Frequently Asked <span className="text-brand-mint">Questions</span>
          </h2>
          <p className="text-slate-600 text-xl font-bold max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-4 md:p-12 shadow-2xl border border-slate-100 mb-20">
          <Accordion type="single" collapsible className="w-full">
            {content.items.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 last:border-0 px-4">
                <AccordionTrigger className="text-left text-xl md:text-2xl font-black text-slate-900 hover:text-brand-mint transition-all duration-300 hover:no-underline py-8 tracking-tight group">
                  <span className="flex items-center gap-4">
                    <span className="w-8 h-px bg-slate-200 group-hover:w-12 group-hover:bg-brand-mint transition-all duration-500" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-8 pl-12 max-w-3xl font-normal">
                  <div className="prose prose-slate prose-lg max-w-none prose-strong:font-normal prose-b:font-normal">
                    <ReactMarkdown>
                      {faq.answer}
                    </ReactMarkdown>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <p className="text-slate-600 mb-8 font-bold text-lg">Still have questions about scaling your brand?</p>
          <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-10 py-4 rounded-full text-lg font-black hover:bg-brand-mint hover:text-primary transition-all shadow-xl shadow-primary/20 uppercase tracking-widest text-xs">
              Book a Strategy Session
            </button>
          </a>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)', backgroundSize: '60px 60px' }} />
    </section>
  );
}
