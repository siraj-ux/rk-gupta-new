import { useEffect, useState } from 'react';
import {
  Calendar,
  Clock,
  Globe,
  Video,
  Zap,
  AlertTriangle,
  X,
} from 'lucide-react';
import { useUTMParams } from '@/hooks/useUTMParams';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';

const REGISTRATION_RAZORPAY_URL = 'https://pages.razorpay.com/pl_SAAxQmR7a5jwEr/view'; 
const EBOOKS_RAZORPAY_URL = 'https://pages.razorpay.com/pl_SAAygaG1atU5Ub/view';       

const MiniTimer = ({ initialSeconds = 900 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <div className="flex items-center gap-2 font-mono text-2xl font-black text-red-600">
      <Clock className="h-6 w-6 animate-pulse" />
      {mm}:{ss}
    </div>
  );
};

export const HeroSection = () => {
  useFacebookPixel();
  const utmParams = useUTMParams(); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addEbook, setAddEbook] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '' });
  const [sheetData, setSheetData] = useState({ date: 'Loading...', time: 'Loading...' });

  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTNbThNq5PaLsO8hgj4EIb5CTjMp8-kOOI9jpi18eTL-p9v5vh-QeOSOeqaozauJOAy2fs5mOQIhk4G/pub?output=csv')
      .then((res) => res.text())
      .then((text) => {
        const rows = text.trim().split('\n');
        const values = rows[1].split(',');
        setSheetData({ date: values[0] || 'TBA', time: values[1] || 'TBA' });
      }).catch((err) => console.error('CSV fetch error:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const finalBaseUrl = addEbook ? EBOOKS_RAZORPAY_URL : REGISTRATION_RAZORPAY_URL;
    window.location.href = `${finalBaseUrl}?${new URLSearchParams(formData).toString()}`;
  };

  return (
    <section className="relative min-h-screen bg-[#00171f] text-white overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@keyframes soft-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } } .animate-soft-blink { animation: soft-blink 1.5s infinite; }`}} />
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/bg.webp')" }} />

      <div className="container relative pt-2 md:pt-6 pb-20 px-4">
        
        {/* BANNER 1: TOP OF HERO SECTION (FIXED FOR NO CROP) */}
        {/* Mobile: Full edge-to-edge width (-mx-4) */}
        {/* Desktop: Centered and width-limited (md:max-w-4xl mx-auto) to effectively reduce height */}
        <div className="-mx-4 md:mx-auto md:max-w-4xl mb-6 overflow-hidden md:rounded-2xl shadow-2xl border-b md:border border-white/10">
            <img 
                src="/banner-for-above-the-Heading.jpeg" 
                alt="Workshop Banner" 
                className="w-full h-auto block" // h-auto ensures NO CROPPING
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* 1. HEADLINES */}
          <div className="order-1 text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Crypto Ko Lekar Jo Confusion Hai, <br />
              <span className="text-[#facc15]">2 Ghante Mein Clarity Milegi</span>
            </h1>

            <div className="bg-white/5 border-l-4 border-yellow-400 p-4 rounded-r-xl inline-block">
              <div className="flex items-center gap-2 mb-1 text-xs font-black uppercase tracking-widest">
                <span className="bg-red-600 px-2 py-0.5 rounded animate-pulse">Flash Sale</span>
                <span className="text-yellow-400">95% Discount Activated</span>
              </div>
              <p className="text-3xl md:text-4xl font-black flex items-baseline gap-3">
                <span className="line-through opacity-40 text-xl font-medium">₹199</span> 
                Aaj Sirf <span className="text-[#facc15] drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] animate-soft-blink">₹9</span>
              </p>
              <p className="text-sm text-white/60 italic mt-2">
                "Yeh ₹9 Price Sirf 7 Din Ke Liye Valid Hai — Uske Baad ₹199 Ho Jaayega"
              </p>
            </div>

            <p className="text-[#00a8e8] text-xl md:text-2xl block font-black tracking-wide">
              Hindi Mein, Step By Step, Bina Hype Ke.
            </p>

            <div className="grid grid-cols-2 gap-3 max-w-md w-full">
                {[
                { icon: Calendar, label: 'Date', value: sheetData.date },
                { icon: Clock, label: 'Time', value: sheetData.time },
                { icon: Globe, label: 'Language', value: 'Hindi' },
                { icon: Video, label: 'Mode', value: 'Online (Live)' },
                ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-3 flex items-center gap-3 text-black border-b-4 border-gray-200">
                    <item.icon className="h-5 w-5 text-[#007ea7] shrink-0" />
                    <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">{item.label}</p>
                    <p className="font-black text-sm">{item.value}</p>
                    </div>
                </div>
                ))}
            </div>
          </div>

          {/* 2. STICKY FORM */}
          <div className="order-2 lg:col-start-2 lg:row-span-3 sticky top-10 w-full max-w-md ml-auto">
            <div className="bg-white rounded-3xl shadow-[0_0_50px_rgba(0,126,167,0.2)] text-[#00171f] border-t-[6px] border-[#007ea7] overflow-hidden">
              
              <div className="w-full border-b border-gray-100">
                  <img 
                      src="/banner-for-above-form.jpeg" 
                      alt="Register Offer" 
                      className="w-full h-auto object-cover" // object-cover is okay here as it's a fixed-width card
                  />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex justify-center mb-2">
                    <span className="bg-red-50 text-red-600 text-[10px] font-black px-3 py-1 rounded-full border border-red-200 uppercase tracking-widest flex items-center gap-1">
                    <Zap className="h-3 w-3 fill-current" /> Sirf 7 Din Baaki
                    </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-center mb-1 leading-tight tracking-tight">
                    <span className="line-through opacity-30 text-lg font-bold">₹199</span> Sirf ₹9 Mein Register Karein
                </h3>
                
                <p className="text-[12px] text-center text-[#007ea7] font-black mb-6 uppercase tracking-tight">
                    "₹199 Ki Clarity, ₹9 Mein — Aur Sirf 7 Din Ke Liye"
                </p>

                <div className="flex flex-col items-center mb-6">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Offer Ends In:</p>
                    <MiniTimer initialSeconds={900} />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input required placeholder="Full Name" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold focus:border-[#007ea7] outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <input required type="email" placeholder="Email Address" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold focus:border-[#007ea7] outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <input required type="tel" placeholder="Phone Number" maxLength={10} className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold focus:border-[#007ea7] outline-none" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })} />
                    <input required placeholder="City" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold focus:border-[#007ea7] outline-none" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                    
                    <label className="flex items-start gap-3 bg-[#f0f9ff] border-2 border-[#00a8e8]/30 rounded-xl p-3 cursor-pointer hover:bg-[#e0f4ff] transition">
                    <input type="checkbox" checked={addEbook} onChange={(e) => setAddEbook(e.target.checked)} className="mt-1 h-5 w-5 accent-[#007ea7]" />
                    <span className="text-sm font-black leading-tight">
                        <span className="line-through opacity-40 font-bold">₹199</span> Yes! Add 3 Learning Ebooks For Just ₹99/- <br/>
                        <span className="text-[10px] text-[#007ea7] uppercase italic font-bold">7 Din Wali Offer Ke Saath</span>
                    </span>
                    </label>

                    <div className="bg-red-50 rounded-lg py-2 px-1">
                    <p className="text-[11px] text-red-700 text-center font-black leading-relaxed italic px-2">
                        🚨 Chai Se Bhi Sasta — ₹199 Sirf ₹9, Lekin Sirf 7 Din Tak!
                    </p>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full font-black py-4 rounded-2xl text-xl transition shadow-xl uppercase bg-[#007ea7] text-white hover:bg-[#00a8e8] active:scale-95">
                    {isSubmitting ? 'Processing...' : addEbook ? 'Pay ₹99 & Claim Seat' : 'Pay ₹9 & Claim Seat'}
                    </button>
                </form>
              </div>
            </div>
          </div>

          {/* 3. NOT FOR EVERYONE SECTION */}
          <div className="order-3 bg-white/5 border-2 border-white/10 rounded-2xl p-6 max-w-lg w-full">
            <h3 className="text-base md:text-lg font-black text-amber-400 uppercase mb-4 tracking-tighter flex items-center gap-2 border-b border-white/10 pb-2">
              <AlertTriangle className="h-5 w-5 fill-current" /> This Masterclass Is Not For Everyone
            </h3>
            <ul className="space-y-3">
              {["Looking For Quick Profit Tips", "Expecting Trading Signals", "Want Overnight Success", "Prefer Shortcuts Over Understanding"].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/80 text-sm font-bold">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" strokeWidth={4} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};