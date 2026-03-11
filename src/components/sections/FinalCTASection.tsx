import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  BookOpen,
  Zap
} from 'lucide-react';

interface FinalCTASectionProps {
  onCTAClick?: () => void;
}

export const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {

  const scrollToForm = () => {
    if (onCTAClick) {
      onCTAClick();
      return;
    }
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 md:py-36 bg-black text-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl md:text-4xl font-black mb-5 leading-tight tracking-tight">
            Yeh Session Un Logon Ke Liye Hai Jo{' '}
            <span className="text-[#00a8e8]">Clarity Aur Structure</span> Ke Saath Seekhna Chahte Hain
          </h2>

          <p className="text-sm md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-bold">
            Agar Aap Concepts Ko Clear Aur Structured Tareeke Se Samajhna Chahte Ho, Aur Learning Ko Bina Pressure Lena Chahte Ho, Toh Yeh Session Aapke Liye Hai.
          </p>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl text-[#00171f] border-t-4 border-[#00a8e8]">
            
            {/* OFFER BADGE */}
            <div className="flex justify-center mb-6">
               <span className="bg-red-50 text-red-600 text-[10px] font-black px-3 py-1 rounded-full border border-red-200 uppercase tracking-widest flex items-center gap-1 animate-pulse">
                 <Zap className="h-3 w-3 fill-current" /> Sirf 7 Din Baaki
               </span>
            </div>

            {/* SESSION DETAILS */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 mb-8 font-black text-[#003459]">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#00a8e8]" />
                <span className="text-base">Reserve Your Seat Now</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#00a8e8]" />
                <span className="text-base">2 Hours Live Learning</span>
              </div>
            </div>

            {/* OFFER PRICING */}
            <div className="mb-6">
              <p className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="line-through opacity-30 text-xl md:text-2xl font-bold">₹199</span> 
                <span className="ml-3">Sirf 7 Din Ka Price at <span className="text-red-600">₹9/-</span></span>
              </p>
            </div>

            {/* Red Urgency Text */}
            <p className="text-lg md:text-2xl text-red-600 mb-8 max-w-2xl mx-auto leading-relaxed font-black tracking-tight">
              Offer Sirf 7 Din Tak Valid Hai.
            </p>

            {/* FIXED BUTTON: Reduced mobile text size and padding to prevent overflow */}
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="group w-full md:w-auto h-auto bg-[#00a8e8] hover:bg-[#003459] text-white font-bold px-4 py-4 md:px-12 md:py-5 rounded-2xl transition-all shadow-md hover:shadow-xl"
              >
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <span className="text-[15px] sm:text-xl md:text-2xl font-black leading-tight">
                    Pay <span className="line-through opacity-70 decoration-1 md:decoration-2">Rs 199</span> Rs 9 Abhi Book Kare
                  </span>
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-xs md:text-sm font-black text-[#003459] mb-6 tracking-tight">
                Seats Are Limited To Keep The Session Interactive. 
                <span className="block text-red-600 mt-1 uppercase tracking-widest text-[10px]">Registration Closes Once Full</span>
              </p>
              
              <div className="pt-6 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
                <div className="flex items-center justify-center gap-1.5 text-center">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Live Session</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-center">
                  <BookOpen className="h-4 w-4 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Hindi Language</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-center">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Structured</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-center">
                  <BookOpen className="h-4 w-4 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Educational</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};