import React, { useState } from 'react';
import { ShippingRate } from '../types';
import { TrendingUp, Calculator, Check, ArrowRight } from 'lucide-react';

interface ImportRatesSectionProps {
  rates: ShippingRate[];
}

export const ImportRatesSection: React.FC<ImportRatesSectionProps> = ({ rates }) => {
  const [selectedRateId, setSelectedRateId] = useState<string>(rates[0]?.id || '');
  const [itemQuantity, setItemQuantity] = useState<number>(1);

  const selectedRateObj = rates.find(r => r.id === selectedRateId) || rates[0];

  const normalTotal = selectedRateObj ? selectedRateObj.normalRate * itemQuantity : 0;
  const specialTotal = selectedRateObj ? selectedRateObj.specialRate * itemQuantity : 0;
  const savings = normalTotal - specialTotal;

  return (
    <section id="rates" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header matching Figma Desktop - 4 */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8B6D4A]/10 text-[#8B6D4A] text-xs font-bold uppercase tracking-wider mb-2">
          <TrendingUp className="w-4 h-4" />
          <span>Pricing & Shipping Rates</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3E342B] flex items-center justify-center gap-3">
          <span>IMPORT RATES</span>
          <span className="text-[#8B6D4A] text-3xl">📈</span>
        </h2>
        <p className="text-sm text-[#725739] mt-2">
          ตารางอัตราค่าขนส่งนำเข้าตามประเภทสินค้า (เปรียบเทียบเรทปกติ และ เรทพิเศษสำหรับสมาชิก)
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Figma Pricing Table (8 cols on desktop) */}
        <div className="lg:col-span-8 bg-[#EADDCB] rounded-3xl p-4 sm:p-6 border border-[#D6C5AE] shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#D9C4AA] text-[#3E342B] text-sm sm:text-base font-extrabold">
                  <th className="p-4 rounded-tl-2xl border-b border-[#C8B397]">ประเภทสินค้า</th>
                  <th className="p-4 border-b border-[#C8B397] text-center">เรทปกติ</th>
                  <th className="p-4 rounded-tr-2xl border-b border-[#C8B397] text-center text-[#8B6D4A]">เรทพิเศษ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D6C5AE] text-sm sm:text-base">
                {rates.map((rate) => {
                  const isSelected = selectedRateId === rate.id;
                  return (
                    <tr
                      key={rate.id}
                      onClick={() => setSelectedRateId(rate.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#8B6D4A]/15 font-bold text-[#3E342B]'
                          : 'hover:bg-[#DFD1BF] text-[#4A3E31]'
                      }`}
                    >
                      <td className="p-4 font-semibold flex items-center gap-2">
                        {isSelected && <Check className="w-4 h-4 text-[#8B6D4A]" />}
                        <span>{rate.categoryName}</span>
                      </td>
                      <td className="p-4 text-center font-medium text-[#5C4F41]">
                        {rate.normalRate.toLocaleString()} บาท
                      </td>
                      <td className="p-4 text-center font-bold text-[#8B6D4A] bg-[#DFD1BF]/50">
                        {rate.specialRate.toLocaleString()} บาท
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-xs text-[#725739] text-center sm:text-left flex items-center justify-between">
            <span>* คลิกที่รายการสินค้าในตารางเพื่อคำนวณราคา</span>
            <span className="font-semibold text-[#8B6D4A]">อัปเดตเรทขนส่งล่าสุด 2026</span>
          </div>
        </div>

        {/* Interactive Rate Calculator Card (4 cols on desktop) */}
        <div className="lg:col-span-4 bg-[#ECE3D5] rounded-3xl p-6 border border-[#D5C6B1] shadow-lg">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D5C6B1]">
            <div className="w-10 h-10 rounded-2xl bg-[#8B6D4A] text-white flex items-center justify-center">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#3E342B] text-lg">คำนวณค่าส่งเบื้องต้น</h3>
              <p className="text-xs text-[#725739]">Estimate Shipping Cost</p>
            </div>
          </div>

          {/* Selected Item info */}
          <div className="mb-4">
            <label className="block text-xs font-bold text-[#725739] mb-1">หมวดหมู่สินค้าที่เลือก:</label>
            <div className="bg-[#DFD4C3] p-3 rounded-xl font-bold text-sm text-[#3E342B] border border-[#D0C0AA]">
              {selectedRateObj.categoryName}
            </div>
          </div>

          {/* Quantity selector */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-[#725739] mb-1">จำนวน ({selectedRateObj.unit}):</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setItemQuantity(Math.max(1, itemQuantity - 1))}
                className="w-10 h-10 rounded-xl bg-[#D8C7B3] text-[#3E342B] font-bold text-lg hover:bg-[#C8B6A1] transition-colors"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-center py-2 bg-white rounded-xl border border-[#D0C0AA] font-bold text-base text-[#3E342B]"
              />
              <button
                onClick={() => setItemQuantity(itemQuantity + 1)}
                className="w-10 h-10 rounded-xl bg-[#8B6D4A] text-white font-bold text-lg hover:bg-[#725739] transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Result Calculation */}
          <div className="space-y-3 bg-[#E4D9C8] p-4 rounded-2xl border border-[#D0C0AA]">
            <div className="flex justify-between text-xs text-[#5C4F41]">
              <span>ราคาเรทปกติ:</span>
              <span className="line-through">{normalTotal.toLocaleString()} บาท</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-[#3E342B]">
              <span>ราคาเรทพิเศษ:</span>
              <span className="text-lg text-[#8B6D4A] font-extrabold">{specialTotal.toLocaleString()} บาท</span>
            </div>
            {savings > 0 && (
              <div className="pt-2 border-t border-[#D0C0AA] text-center text-xs font-bold text-emerald-700 bg-emerald-100/70 p-2 rounded-xl">
                🎉 ประหยัดเพิ่มได้ถึง {savings.toLocaleString()} บาท!
              </div>
            )}
          </div>

          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full mt-5 py-3 rounded-2xl bg-[#8B6D4A] text-white font-bold text-sm hover:bg-[#725739] transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>จองเรทพิเศษตอนนี้</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
};
