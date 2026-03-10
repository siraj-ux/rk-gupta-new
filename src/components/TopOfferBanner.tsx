import { useEffect, useState } from 'react';
import { Zap, Clock } from 'lucide-react';

export const TopOfferBanner = () => {
  const [camp, setCamp] = useState({ d: 6, h: 23, m: 59, s: 59 });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 7);
    const interval = setInterval(() => {
      const diff = target.getTime() - new Date().getTime();
      setCamp({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] md:hidden">
      {/* SHIMMER ANIMATION STYLE */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .bg-shimmer {
          background: linear-gradient(90deg, #00171f 0%, #003459 50%, #00171f 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
      `}} />

      <div className="bg-shimmer text-white py-1.5 px-4 flex justify-between items-center shadow-lg border-b border-yellow-400/30">
        
        {/* LEFT SIDE: CREATIVE OFFER BADGE */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 text-[#00171f] px-1.5 py-0.5 rounded-md text-[9px] font-black flex items-center gap-1 shadow-sm uppercase italic">
            <Zap className="h-2.5 w-2.5 fill-current" /> Special Offer
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold">
            <span className="line-through opacity-40">₹199</span>
            <span className="text-white">Pay Only <span className="text-yellow-400">₹9/-</span></span>
          </div>
        </div>

        {/* RIGHT SIDE: DYNAMIC TIMER */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
            <Clock className="h-2.5 w-2.5 text-yellow-400 animate-pulse" />
            <div className="text-[10px] font-black font-mono tracking-tighter flex items-center gap-0.5">
              <span className="text-yellow-400">{camp.d}d</span>
              <span className="opacity-50">:</span>
              <span>{String(camp.h).padStart(2, '0')}h</span>
              <span className="opacity-50">:</span>
              <span>{String(camp.m).padStart(2, '0')}m</span>
            </div>
          </div>
          <span className="text-[9px] font-black text-white/60 uppercase tracking-widest hidden xs:block">Baaki</span>
        </div>

      </div>
    </div>
  );
};