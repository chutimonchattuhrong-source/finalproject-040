import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Tag, 
  ClipboardCheck, 
  Ship, 
  Truck, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Award,
  PhoneCall,
  Globe
} from 'lucide-react';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProducts, onContactClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "นำเข้าเฟอร์นิเจอร์จากจีน",
      subtitle: "ครบจบในที่เดียวสำหรับธุรกิจคุณ",
      image: "./assets/hero_background_1784014611675.png",
      tag: "คัดสรรโรงงานคุณภาพ • ราคาตรงจากโรงงาน • ได้มาตรฐาน"
    },
    {
      title: "ขนส่งตรงถึงหน้าร้านคุณ",
      subtitle: "ดูแลครบวงจร ปลอดภัย มั่นใจ 100%",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      tag: "ประกันสินค้าชำรุด • ตรวจสอบก่อนส่ง • อัปเดตตู้เรียลไทม์"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section id="hero" className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Main Banner Slider Container */}
      <div className="relative rounded-3xl overflow-hidden bg-[#ECE3D5] border border-[#D5C6B1] shadow-xl">
        
        {/* Banner Content & Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[520px]">
          
          {/* Left Hero Headline Content */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative z-10 bg-[#ECE3D5]/90 backdrop-blur-sm">
            <div>
              {/* Top Figma Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8B6D4A]/10 text-[#8B6D4A] text-xs sm:text-sm font-semibold mb-4 border border-[#8B6D4A]/20">
                <Globe className="w-4 h-4" />
                <span>CHINA FURNITURE IMPORT</span>
              </div>

              {/* Headlines */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3E342B] leading-tight mb-3">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#8B6D4A] mb-6">
                {heroSlides[currentSlide].subtitle}
              </p>

              {/* 3 Figma Bullet Points */}
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-medium text-[#5C4F41] mb-8">
                <span className="flex items-center gap-1.5 bg-[#DFD4C3] px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#8B6D4A]" />
                  คัดสรรโรงงานคุณภาพ
                </span>
                <span className="flex items-center gap-1.5 bg-[#DFD4C3] px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#8B6D4A]" />
                  ราคาตรงจากโรงงาน
                </span>
                <span className="flex items-center gap-1.5 bg-[#DFD4C3] px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#8B6D4A]" />
                  ได้มาตรฐาน ส่งตรงถึงคุณ
                </span>
              </div>
            </div>

            {/* 5 Feature Icons matching Figma Desktop - 1 */}
            <div>
              <p className="text-xs font-semibold text-[#725739] tracking-wider uppercase mb-3">
                ขั้นตอนและจุดเด่นบริการของเรา
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                <div className="bg-[#E2D6C5] p-2.5 rounded-xl border border-[#D0C0AA] hover:bg-[#D8C7B3] transition-colors">
                  <CheckCircle2 className="w-6 h-6 mx-auto text-[#8B6D4A] mb-1" />
                  <span className="text-[11px] font-semibold text-[#3E342B] block leading-tight">คัดเลือกโรงงานคุณภาพ</span>
                </div>
                <div className="bg-[#E2D6C5] p-2.5 rounded-xl border border-[#D0C0AA] hover:bg-[#D8C7B3] transition-colors">
                  <Tag className="w-6 h-6 mx-auto text-[#8B6D4A] mb-1" />
                  <span className="text-[11px] font-semibold text-[#3E342B] block leading-tight">เปรียบเทียบราคาคุ้มค่า</span>
                </div>
                <div className="bg-[#E2D6C5] p-2.5 rounded-xl border border-[#D0C0AA] hover:bg-[#D8C7B3] transition-colors">
                  <ClipboardCheck className="w-6 h-6 mx-auto text-[#8B6D4A] mb-1" />
                  <span className="text-[11px] font-semibold text-[#3E342B] block leading-tight">ตรวจสอบก่อนส่ง</span>
                </div>
                <div className="bg-[#E2D6C5] p-2.5 rounded-xl border border-[#D0C0AA] hover:bg-[#D8C7B3] transition-colors">
                  <Ship className="w-6 h-6 mx-auto text-[#8B6D4A] mb-1" />
                  <span className="text-[11px] font-semibold text-[#3E342B] block leading-tight">ขนส่งปลอดภัย</span>
                </div>
                <div className="bg-[#E2D6C5] p-2.5 rounded-xl border border-[#D0C0AA] hover:bg-[#D8C7B3] transition-colors col-span-2 sm:col-span-1">
                  <Truck className="w-6 h-6 mx-auto text-[#8B6D4A] mb-1" />
                  <span className="text-[11px] font-semibold text-[#3E342B] block leading-tight">ส่งถึงหน้าร้านคุณ</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Showcase */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={heroSlides[currentSlide].image}
              alt="China Furniture Import Showcase"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E342B]/40 via-transparent to-transparent lg:bg-none" />
            
            {/* Top Right Figma floating badge */}
            <div className="absolute top-4 right-4 bg-[#EAE0D5]/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 max-w-[200px] text-center shadow-lg hidden sm:block">
              <Truck className="w-8 h-8 mx-auto text-[#8B6D4A] mb-1" />
              <p className="text-xs font-bold text-[#3E342B]">บริการครบวงจร</p>
              <p className="text-sm font-extrabold text-[#8B6D4A] leading-tight">นำเข้าเอง ส่งถึงไทย</p>
              <span className="inline-block mt-1 text-[10px] font-semibold bg-[#8B6D4A] text-white px-2 py-0.5 rounded-full">
                ปลอดภัย มั่นใจ 100%
              </span>
            </div>

            {/* Slider Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EAE0D5]/90 hover:bg-white text-[#3E342B] flex items-center justify-center shadow-md transition-all focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EAE0D5]/90 hover:bg-white text-[#3E342B] flex items-center justify-center shadow-md transition-all focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom Contact & Trust Footer Bar matching Figma Desktop - 1 */}
        <div className="bg-[#DFD3C2] p-4 sm:p-6 border-t border-[#D5C6B1] grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-[#3E342B]">
          
          {/* Phone & Website */}
          <div className="flex items-center gap-3 bg-[#EAE0D5] p-3 rounded-2xl border border-[#D5C6B1]">
            <PhoneCall className="w-8 h-8 text-[#8B6D4A] flex-shrink-0" />
            <div>
              <p className="text-xs text-[#725739] font-medium">โทรสอบถามฟรี</p>
              <p className="text-sm font-bold text-[#3E342B]">02-6543-9486</p>
              <p className="text-[11px] text-[#725739]">www.chinafurnitureimport.com</p>
            </div>
          </div>

          {/* Experience */}
          <div className="flex items-center gap-3">
            <Award className="w-7 h-7 text-[#8B6D4A] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#3E342B]">ประสบการณ์นำเข้า</p>
              <p className="text-xs text-[#725739]">มากกว่า 10 ปี การันตีความเชี่ยวชาญ</p>
            </div>
          </div>

          {/* Professional Team */}
          <div className="flex items-center gap-3">
            <Users className="w-7 h-7 text-[#8B6D4A] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#3E342B]">ทีมงานมืออาชีพ</p>
              <p className="text-xs text-[#725739]">ดูแลทุกขั้นตอน ตั้งแต่เลือกถึงส่งมอบ</p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-[#8B6D4A] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#3E342B]">มั่นใจทุกการสั่งซื้อ</p>
              <p className="text-xs text-[#725739]">มีบริการรับประกันหลังการขาย</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
