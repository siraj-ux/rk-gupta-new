import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer'; 
import { Clock, ArrowRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onCTAClick: () => void;
}

export const StickyMobileCTA = ({ onCTAClick }: StickyMobileCTAProps) => {
  
  const [campaignTime, setCampaignTime] = useState({ days: 6, hours: 23, mins: 59, secs: 59 });
  const [seatsLeft, setSeatsLeft] = useState(12);

  useEffect(() => {
    // Generate random seats between 8 and 14
    setSeatsLeft(Math.floor(Math.random() * (14 - 8 + 1)) + 8);

    const target = new Date();
    target.setDate(target.getDate() + 7); 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;
      setCampaignTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-black/10 p-3 md:hidden z-50 shadow-xl">
      
      <div className="flex flex-col gap-2">

        {/* UPDATED TOP ROW: IMAGE SCARCITY LINE + CAMEL CASE */}
        <div className="flex items-center justify-between border-b border-black/5 pb-1 px-1">
          <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-800 tracking-tight">
            Sirf <span className="text-red-600">{seatsLeft}</span> Seats Baaki Hain ₹9 Price Pe
          </div>
          
          <div className="text-[10px] font-black text-red-600 animate-pulse">
             — 7 Din Mein Offer Khatam ⏳
          </div>
        </div>

        {/* MAIN ROW (Preserving original UI structure) */}
        <div className="flex items-center justify-between gap-3">

          {/* TIMER SIDE */}
          <div className="flex flex-col">
            <span className="text-[11px] font-black text-red-600 animate-pulse flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Register @ Only ₹9/-
            </span>
            <CountdownTimer className="scale-75 origin-left" />
          </div>

          {/* BUTTON SIDE (Counter Removed) */}
          <div className="flex flex-col items-center">
            <a href='#register'>
              <Button
                size="sm"
                onClick={onCTAClick}
                className="bg-[#003459] hover:bg-[#003459]/90 text-white flex items-center gap-2 px-6 h-10 text-xs font-black uppercase tracking-tight shadow-lg"
              >
                Register Now
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};