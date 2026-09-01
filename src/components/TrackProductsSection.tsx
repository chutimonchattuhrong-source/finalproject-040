import React, { useState } from 'react';
import { MOCK_TRACKING_DATA } from '../data/mockData';
import { TrackingResult } from '../types';
import { Package, Search, Ship, Building2, Warehouse, CheckCircle2, Clock, AlertCircle, ArrowRight } from 'lucide-react';

export const TrackProductsSection: React.FC = () => {
  const [searchCode, setSearchCode] = useState<string>('CN88992');
  const [activeTracking, setActiveTracking] = useState<TrackingResult | null>(MOCK_TRACKING_DATA['CN88992']);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSearch = (codeToSearch?: string) => {
    const query = (codeToSearch || searchCode).trim().toUpperCase();
    if (!query) {
      setErrorMsg('กรุณากรอกเลขตู้สินค้า');
      return;
    }

    if (MOCK_TRACKING_DATA[query]) {
      setActiveTracking(MOCK_TRACKING_DATA[query]);
      setErrorMsg('');
    } else {
      // Dynamic fallback for any custom code entered by user
      setActiveTracking({
        containerCode: query,
        customerName: 'คุณลูกค้า (General Order)',
        currentStatus: 'IN_TRANSIT',
        statusText: `ตู้สินค้าเลขที่ ${query} กำลังอยู่ระหว่างขนส่ง`,
        origin: 'โกดังสินค้าเมืองกว่างโจว (Guangzhou)',
        destination: 'โกดังสินค้าบางนา กรุงเทพฯ',
        estimatedArrival: '06 กันยายน 2026',
        lastUpdated: '01 ก.ย. 2026 09:00 น.',
        steps: [
          {
            title: 'อยู่ที่โกดังจีน',
            description: 'ตรวจสอบสินค้าเรียบร้อย ตีแพ็กกันกระแทกสำเร็จ',
            date: '29 ส.ค. 2026',
            location: 'Guangzhou Port',
            completed: true
          },
          {
            title: 'อยู่ระหว่างเดินทาง',
            description: 'อยู่บนเรือขนส่งระหว่างประเทศ กำลังเดินทางสู่อ่าวไทย',
            date: '01 ก.ย. 2026',
            location: 'Maritime Transport',
            completed: true
          },
          {
            title: 'ถึงโกดังที่ไทย',
            description: 'เตรียมการผ่านพิธีการศุลกากรและคัดแยกส่งตรงถึงบ้าน',
            date: 'คาดการณ์ 06 ก.ย. 2026',
            location: 'Thailand Customs & Warehouse',
            completed: false
          }
        ]
      });
      setErrorMsg('');
    }
  };

  return (
    <section id="tracking" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Container Card with Warm Sand Background matching Figma Desktop - 5 */}
      <div className="bg-[#EADDCB] rounded-[2.5rem] p-6 sm:p-10 border border-[#D6C5AE] shadow-xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-black text-[#3E342B] tracking-wide flex items-center justify-center gap-3">
            <span>TRACK PRODUCTS</span>
            <div className="w-12 h-12 rounded-2xl bg-[#8B6D4A] text-white flex items-center justify-center shadow-md">
              <Package className="w-7 h-7" />
            </div>
          </h2>
          <p className="text-sm text-[#725739] mt-2 font-medium">
            เช็กสถานะการเดินทางของตู้สินค้าแบบเรียลไทม์ ตลอด 24 ชั่วโมง
          </p>
        </div>

        {/* Search Bar Input matching Figma Desktop - 5 */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center bg-[#8B6D4A] p-2 rounded-full shadow-lg">
            <input
              type="text"
              placeholder="ใส่เลขตู้สินค้า..."
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full bg-transparent px-6 py-3 text-[#FFFFFF] placeholder-[#E5DACB] text-base font-bold focus:outline-none"
            />
            <button
              onClick={() => handleSearch()}
              className="px-8 py-3.5 rounded-full bg-white text-[#3E342B] font-extrabold text-sm sm:text-base hover:bg-[#F5EFE6] transition-all shadow-md flex items-center gap-2 flex-shrink-0"
            >
              <Search className="w-5 h-5 text-[#8B6D4A]" />
              <span>ค้นหา</span>
            </button>
          </div>

          {errorMsg && (
            <p className="text-red-700 text-xs font-bold text-center mt-2 flex items-center justify-center gap-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMsg}</span>
            </p>
          )}

          {/* Demo Tracking Code Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-semibold text-[#5C4F41]">
            <span className="text-[#725739]">ตัวอย่างเลขตู้สินค้าทดลองคลิก:</span>
            <button
              onClick={() => {
                setSearchCode('CN88992');
                handleSearch('CN88992');
              }}
              className="px-3 py-1 rounded-full bg-[#DFCFBA] hover:bg-[#8B6D4A] hover:text-white transition-colors border border-[#D6C5AE]"
            >
              CN88992 (อยู่ระหว่างเดินทาง)
            </button>
            <button
              onClick={() => {
                setSearchCode('CN77123');
                handleSearch('CN77123');
              }}
              className="px-3 py-1 rounded-full bg-[#DFCFBA] hover:bg-[#8B6D4A] hover:text-white transition-colors border border-[#D6C5AE]"
            >
              CN77123 (อยู่ที่โกดังจีน)
            </button>
            <button
              onClick={() => {
                setSearchCode('CN55401');
                handleSearch('CN55401');
              }}
              className="px-3 py-1 rounded-full bg-[#DFCFBA] hover:bg-[#8B6D4A] hover:text-white transition-colors border border-[#D6C5AE]"
            >
              CN55401 (ถึงโกดังไทย)
            </button>
          </div>
        </div>

        {/* 3 Step Visual Status Cards matching Figma Desktop - 5 */}
        {activeTracking && (
          <div className="bg-[#ECE3D5] rounded-3xl p-6 sm:p-8 border border-[#D5C6B1] shadow-md animate-fadeIn">
            
            {/* Tracking Summary Info */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#D5C6B1]">
              <div>
                <span className="text-xs font-bold text-[#8B6D4A] block uppercase">ตู้สินค้าหมายเลข</span>
                <h3 className="text-2xl font-black text-[#3E342B]">{activeTracking.containerCode}</h3>
                <p className="text-xs text-[#725739] mt-0.5">ผู้สั่งซื้อ: {activeTracking.customerName}</p>
              </div>
              <div className="bg-[#DFD4C3] px-4 py-2 rounded-2xl border border-[#D0C0AA] text-right">
                <span className="text-xs text-[#725739] block font-medium">คาดการณ์สินค้าถึงไทย</span>
                <span className="text-base font-extrabold text-[#8B6D4A]">{activeTracking.estimatedArrival}</span>
              </div>
            </div>

            {/* 3 Step Timeline Cards matching Figma Desktop - 5 Image Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Step 1: อยู่ที่โกดังจีน */}
              <div className={`rounded-3xl p-5 border transition-all ${
                activeTracking.steps[0].completed 
                  ? 'bg-[#DFCFBA] border-[#8B6D4A] shadow-md' 
                  : 'bg-[#E5DACB] border-[#D0C0AA] opacity-60'
              }`}>
                <div className="relative h-36 rounded-2xl overflow-hidden mb-4 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                    alt="อยู่ที่โกดังจีน"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-[#8B6D4A] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    1
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B6D4A] text-white text-sm font-bold shadow-sm mb-2">
                    อยู่ที่โกดังจีน
                  </span>
                  <p className="text-xs text-[#5C4F41] font-medium mt-1">
                    {activeTracking.steps[0].description}
                  </p>
                  <span className="text-[11px] text-[#8B6D4A] font-semibold block mt-2">
                    {activeTracking.steps[0].date}
                  </span>
                </div>
              </div>

              {/* Step 2: อยู่ระหว่างเดินทาง */}
              <div className={`rounded-3xl p-5 border transition-all ${
                activeTracking.steps[1].completed 
                  ? 'bg-[#DFCFBA] border-[#8B6D4A] shadow-md' 
                  : 'bg-[#E5DACB] border-[#D0C0AA] opacity-60'
              }`}>
                <div className="relative h-36 rounded-2xl overflow-hidden mb-4 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80"
                    alt="อยู่ระหว่างเดินทาง"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-[#8B6D4A] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    2
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B6D4A] text-white text-sm font-bold shadow-sm mb-2">
                    อยู่ระหว่างเดินทาง
                  </span>
                  <p className="text-xs text-[#5C4F41] font-medium mt-1">
                    {activeTracking.steps[1].description}
                  </p>
                  <span className="text-[11px] text-[#8B6D4A] font-semibold block mt-2">
                    {activeTracking.steps[1].date}
                  </span>
                </div>
              </div>

              {/* Step 3: ถึงโกดังที่ไทย */}
              <div className={`rounded-3xl p-5 border transition-all ${
                activeTracking.steps[2].completed 
                  ? 'bg-[#DFCFBA] border-[#8B6D4A] shadow-md' 
                  : 'bg-[#E5DACB] border-[#D0C0AA] opacity-60'
              }`}>
                <div className="relative h-36 rounded-2xl overflow-hidden mb-4 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                    alt="ถึงโกดังที่ไทย"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-[#8B6D4A] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    3
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B6D4A] text-white text-sm font-bold shadow-sm mb-2">
                    ถึงโกดังที่ไทย
                  </span>
                  <p className="text-xs text-[#5C4F41] font-medium mt-1">
                    {activeTracking.steps[2].description}
                  </p>
                  <span className="text-[11px] text-[#8B6D4A] font-semibold block mt-2">
                    {activeTracking.steps[2].date}
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

    </section>
  );
};
