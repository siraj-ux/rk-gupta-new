import {
  BookOpen,
  HelpCircle,
  MessageSquare,
  Brain,
  Eye,
  Hourglass,
  Layers,
  ListOrdered,
  ShieldCheck,
  ArrowRight,
  Search,
  AlertTriangle,
  Cpu,
  Zap,
  AlertCircle
} from 'lucide-react';

export const WhatYoullLearnSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-[#003459] text-white">
      <div className="container max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Is 2 Ghante Mein Yeh 3 Cheezein Clearly Samjh Aayengi
          </h2>

          <p className="text-lg md:text-xl text-white/85 font-medium leading-relaxed">
            Is Masterclass Mein Topics Ko <span className="font-black text-[#facc15]">Step-By-Step</span>{' '}
            Explain Kiya Jaayega, Taaki Flow Samajh Aaye Aur Clarity Build Ho.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 - HOW IT WORKS */}
          <div className="bg-[#00171f] border border-[#007ea7]/40 rounded-2xl p-7 flex flex-col shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="h-8 w-8 text-[#00a8e8]" />
              <h3 className="text-xl font-black leading-tight">Crypto Actually Kaam Kaise Karta Hai</h3>
            </div>
            <ul className="space-y-4 text-sm text-white/85 flex-grow font-medium">
              <li className="flex gap-3"><BookOpen className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> Bitcoin, Blockchain Aur Wallets Ka Basic Structure</li>
              <li className="flex gap-3"><Layers className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> Bina Technical Jargon Ke, Ek Simple Model Ke Saath</li>
              <li className="flex gap-3"><HelpCircle className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> Digital Assets Ki Real-World Working Clarity</li>
            </ul>
          </div>

          {/* CARD 2 - COMMON MISTAKES */}
          <div className="bg-[#007ea7] border border-[#00a8e8]/60 rounded-2xl p-7 flex flex-col shadow-2xl scale-105 z-10">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-white" />
              <h3 className="text-xl font-black leading-tight">Logon Ke Saath Kya Galat Hota Hai</h3>
            </div>
            <ul className="space-y-4 text-sm text-white flex-grow font-bold">
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 text-white flex-shrink-0" /> Common Mistakes Jo Educated Log Bhi Karte Hain</li>
              <li className="flex gap-3"><Brain className="h-5 w-5 text-white flex-shrink-0" /> Galat Decisions Ke Peeche Ka Psychological Reason</li>
              <li className="flex gap-3"><Hourglass className="h-5 w-5 text-white flex-shrink-0" /> Hype Aur FOMO Ko Identify Karna Seekhna</li>
            </ul>
          </div>

          {/* CARD 3 - SELF-DEPENDENCE */}
          <div className="bg-[#00171f] border border-[#007ea7]/40 rounded-2xl p-7 flex flex-col shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Search className="h-8 w-8 text-[#00a8e8]" />
              <h3 className="text-xl font-black leading-tight">Sahi Sawaal Poochna Seekhna</h3>
            </div>
            <ul className="space-y-4 text-sm text-white/85 flex-grow font-medium">
              <li className="flex gap-3"><MessageSquare className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> Bina Kisi Pe Depend Kiye Khud Judge Karna</li>
              <li className="flex gap-3"><Eye className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> News, Claims Ya Opportunities Ko Filter Karna</li>
              <li className="flex gap-3"><ListOrdered className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> Self-Dependent Decision Making Framework</li>
            </ul>
          </div>
        </div>

        {/* CTA AREA */}
        <div className="mt-16 text-center border-t border-white/10 pt-12">
          
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest animate-pulse flex items-center gap-2">
              <Zap className="h-3 w-3 fill-current" /> Special 7-Day Offer
            </div>

            <div className="flex items-center gap-4 text-3xl md:text-5xl font-black">
              {/* UPDATED: Added /- after 199 */}
              <span className="line-through opacity-30 text-xl md:text-3xl font-bold">₹199/-</span>
              <span className="text-[#facc15]">
                Sirf 7 Din Ka Price at <span className="text-white">₹9/-</span>
              </span>
            </div>
            
            <p className="text-white/90 text-xs md:text-base font-bold [word-spacing:0.2rem] whitespace-nowrap flex items-center gap-2">
               <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-[#facc15] flex-shrink-0" /> Sirf 7 Din Baaki — Offer Khatam Hone Mein
            </p>
          </div>

          <p className="text-lg md:text-2xl text-red-500 mb-8 max-w-2xl mx-auto leading-relaxed font-black tracking-tight">
            Offer Sirf 7 Din Tak Valid Hai.
          </p>

          <button
            onClick={scrollToForm}
            className="group inline-flex items-center gap-3 bg-[#00a8e8] hover:bg-white hover:text-[#00171f] text-[#00171f] font-black px-8 md:px-14 py-4 md:py-5 rounded-2xl text-lg md:text-2xl transition-all duration-300 shadow-[0_10px_40px_rgba(0,168,232,0.3)] tracking-tight"
          >
            {/* UPDATED: Added /- after Rs 199 and Rs 9 */}
            Pay <span className="line-through opacity-60">Rs 199/-</span> Rs 9/- Abhi Book Kare
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
          </button>

          <p className="text-xs md:text-sm text-white/60 mt-6 font-black uppercase tracking-widest">
            Join 4,000+ Professionals • Live Conceptual Learning
          </p>
        </div>

      </div>
    </section>
  );
};