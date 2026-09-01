import React from 'react';
import { Search, ListCheck, ShieldCheck, ArrowRight, Clock, Box } from 'lucide-react';

interface ServicesSectionProps {
  onGoToTrack: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onGoToTrack }) => {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header section matching Figma Desktop - 3 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-black text-[#3E342B] tracking-wide flex items-center justify-center gap-3">
          <span>OUR SERVICES</span>
          <span className="text-[#8B6D4A] text-2xl sm:text-4xl">📡</span>
        </h2>
        <div className="w-24 h-1 bg-[#8B6D4A] mx-auto mt-3 rounded-full" />
      </div>

      {/* 3 Main Rounded Pill Cards matching Figma Desktop - 3 */}
      <div className="space-y-8">
        
        {/* Card 1: รับฝากสั่งซื้อ */}
        <div className="bg-[#EADDCB] rounded-[2.5rem] p-6 sm:p-10 border border-[#D6C5AE] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-xl transition-shadow">
          <div className="lg:col-span-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3E342B] mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-[#8B6D4A] text-white flex items-center justify-center text-lg">1</span>
              <span>รับฝากสั่งซื้อ</span>
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-[#4A3E31] leading-relaxed pl-2 border-l-4 border-[#8B6D4A]/40">
              <p>
                <strong className="text-[#8B6D4A]">แปะลิงก์สินค้า:</strong> คัดลอกลิงก์สินค้าจากเว็บจีน (Taobao, 1688, Tmall)
              </p>
              <p>
                <strong className="text-[#8B6D4A]">รอสรุปยอด:</strong> ทีมงานจะคำนวณราคาและแจ้งยอดเงินที่ต้องชำระกลับไปในระบบ
              </p>
              <p>
                <strong className="text-[#8B6D4A]">จ่ายเงิน & รอรับของ:</strong> ชำระเงินเสร็จแล้วก็รอนั่งรอชิลๆ ติดตามตู้สินค้าในหน้าถัดไปได้เลยค่ะ!
              </p>
            </div>
            <div className="mt-6">
              <button
                onClick={onGoToTrack}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B6D4A] text-white text-xs sm:text-sm font-bold hover:bg-[#725739] transition-all shadow-md"
              >
                <span>ติดตามตู้สินค้าที่นี่</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-[#DFCFBA] rounded-3xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-[#8B6D4A]/40 text-[#3E342B] text-center shadow-inner">
              <Search className="w-20 h-20 text-[#8B6D4A] mb-3" />
              <span className="text-xs font-bold uppercase tracking-wider">Search & Order</span>
            </div>
          </div>
        </div>

        {/* Card 2: บริการนำเข้าของเรา */}
        <div className="bg-[#EADDCB] rounded-[2.5rem] p-6 sm:p-10 border border-[#D6C5AE] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-xl transition-shadow">
          <div className="lg:col-span-4 flex justify-center order-2 lg:order-1">
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-[#DFCFBA] rounded-3xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-[#8B6D4A]/40 text-[#3E342B] text-center shadow-inner">
              <ListCheck className="w-20 h-20 text-[#8B6D4A] mb-3" />
              <span className="text-xs font-bold uppercase tracking-wider">Import Process</span>
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3E342B] mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-[#8B6D4A] text-white flex items-center justify-center text-lg">2</span>
              <span>บริการนำเข้าของเรา</span>
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-[#4A3E31] leading-relaxed">
              <div className="bg-[#DFCFBA]/60 p-3 rounded-xl border border-[#D6C5AE]">
                <p className="font-semibold text-[#3E342B]">🚚 นำเข้าได้ทุกขนาด</p>
                <p className="text-xs sm:text-sm text-[#5C4F41]">จะชิ้นเล็ก ของกุ๊กกิ๊ก หรือเฟอร์นิเจอร์ชิ้นใหญ่ยักษ์ เราก็จัดส่งให้ได้ไม่มีปัญหา</p>
              </div>
              <div className="bg-[#DFCFBA]/60 p-3 rounded-xl border border-[#D6C5AE]">
                <p className="font-semibold text-[#3E342B]">🔒 ปลอดภัย ไม่โยนของ</p>
                <p className="text-xs sm:text-sm text-[#5C4F41]">ดูแลสินค้าอย่างทะนุถนอม พร้อมระบบแพ็กเสริมความแข็งแรงเพื่อป้องกันการชำรุด</p>
              </div>
              <div className="bg-[#DFCFBA]/60 p-3 rounded-xl border border-[#D6C5AE]">
                <p className="font-semibold text-[#3E342B]">📱 เช็กสถานะได้เรียลไทม์</p>
                <p className="text-xs sm:text-sm text-[#5C4F41]">อัปเดตตู้สินค้าแบบนาทีต่อนาที รู้ทันทีเมื่อสินค้าเคลื่อนย้ายผ่านระบบบนหน้าเว็บ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: การรับประกัน */}
        <div className="bg-[#EADDCB] rounded-[2.5rem] p-6 sm:p-10 border border-[#D6C5AE] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-xl transition-shadow">
          <div className="lg:col-span-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3E342B] mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-[#8B6D4A] text-white flex items-center justify-center text-lg">3</span>
              <span>การรับประกัน</span>
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-[#4A3E31] leading-relaxed pl-2 border-l-4 border-[#8B6D4A]/40">
              <p>
                <strong className="text-[#8B6D4A]">📦 ประกันความเสียหายจากการขนส่ง:</strong> หากสินค้า แตก หัก หรือชำรุดเสียหายอย่างรุนแรงระหว่างการเดินทางจากจีนมาไทย ทางเรายินดีรับผิดชอบดูแลชดเชยค่าเสียหายให้ตามจริง
              </p>
              <p>
                <strong className="text-[#8B6D4A]">🔍 ตรวจเช็กสภาพก่อนส่งถึงมือ:</strong> ทีมงานที่โกดังจะช่วยตรวจสอบสภาพกล่องภายนอกเบื้องต้นอย่างใส่ใจ หากพบรอยบุบสลายรุนแรง เราจะรีบแจ้งคุณทันที
              </p>
              <p>
                <strong className="text-[#8B6D4A]">⚡ ดำเนินเรื่องไว ไม่รอนาน:</strong> เมื่อเกิดปัญหาสินค้าชำรุด ทีมงานหลังบ้านพร้อมประสานงานและสรุปยอดเคลมให้คุณอย่างรวดเร็วภายใน 3-5 วันทำการ
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-[#DFCFBA] rounded-3xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-[#8B6D4A]/40 text-[#3E342B] text-center shadow-inner">
              <ShieldCheck className="w-20 h-20 text-[#8B6D4A] mb-3" />
              <span className="text-xs font-bold uppercase tracking-wider">100% Warranty</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
