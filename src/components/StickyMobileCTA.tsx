import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight, CalendarDays } from 'lucide-react';

interface StickyMobileCTAProps {
  onCTAClick: () => void;
}

export const StickyMobileCTA = ({ onCTAClick }: StickyMobileCTAProps) => {
  
  const [seatsLeft, setSeatsLeft] = useState(12);

  useEffect(() => {
    // Generate random seats between 8 and 14
    setSeatsLeft(Math.floor(Math.random() * (14 - 8 + 1)) + 8);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-black/10 p-3 md:hidden z-50 shadow-[0_-10px_25px_rgba(0,0,0,0.1)]">
      
      <div className="flex flex-col gap-2">

        {/* TOP ROW: SCARCITY & OFFER STATUS */}
        <div className="flex items-center justify-between border-b border-black/5 pb-1 px-1">
          <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-800 tracking-tight">
            Sirf <span className="text-red-600">{seatsLeft}</span> Seats Baaki Hain ₹9 Price Pe
          </div>
          
          <div className="text-[10px] font-black text-red-600 animate-pulse uppercase tracking-tighter">
             7 Din Mein Offer Khatam 
          </div>
        </div>

        {/* MAIN ROW */}
        <div className="flex items-center justify-between gap-2">

          {/* LEFT SIDE: DAYS REMAINING (Replaces Timer) */}
          <div className="flex flex-col justify-center min-w-[80px]">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
              Time Left
            </span>
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 text-red-600" />
              <span className="text-lg font-black text-[#003459] leading-none">
                7 Days
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: UPDATED BUTTON */}
          <div className="flex-grow">
            <a href='#register' className="block w-full">
              <Button
                size="sm"
                onClick={onCTAClick}
                className="w-full bg-[#003459] hover:bg-[#00171f] text-white flex items-center justify-between px-4 h-12 rounded-xl shadow-lg transition-transform active:scale-95"
              >
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] opacity-80 font-bold">Register @ Only ₹9/-</span>
                  <span className="text-[13px] font-black tracking-tight">
                    Pay <span className="line-through opacity-60 decoration-1">Rs 199</span> Rs 9 Abhi Book Kare
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 ml-1" />
              </Button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};