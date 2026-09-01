import React from 'react';
import { Lamp, Phone, MessageCircle, Facebook, Instagram, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#5C4D3E] text-[#EAE0D5] pt-12 pb-8 border-t border-[#4A3D30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid matching Figma bottom bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#6E5D4B] items-center">
          
          {/* Brand Col */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#8B6D4A] text-white flex items-center justify-center shadow-lg">
              <Lamp className="w-8 h-8" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-white block">
                CHINA FURNI
              </span>
              <span className="text-xs text-[#D6BF8A] tracking-wider uppercase block">
                นำเข้าเฟอร์นิเจอร์จากจีน
              </span>
            </div>
          </div>

          {/* Telephones matching Figma */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6E5D4B] text-[#D6BF8A] flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#C5B49D]">เบอร์โทรศัพท์ติดต่อ:</p>
              <p className="text-sm font-bold text-white">02-6543-9486</p>
              <p className="text-sm font-bold text-white">02-6543-9486</p>
            </div>
          </div>

          {/* Social Icons matching Figma icons */}
          <div className="flex items-center gap-3">
            <a 
              href="#contact" 
              className="w-10 h-10 rounded-xl bg-[#6E5D4B] text-[#D6BF8A] flex items-center justify-center hover:bg-[#8B6D4A] hover:text-white transition-colors"
              title="LINE Official"
            >
              <span className="text-xs font-bold">LINE</span>
            </a>
            <a 
              href="#contact" 
              className="w-10 h-10 rounded-xl bg-[#6E5D4B] text-[#D6BF8A] flex items-center justify-center hover:bg-[#8B6D4A] hover:text-white transition-colors"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="w-10 h-10 rounded-xl bg-[#6E5D4B] text-[#D6BF8A] flex items-center justify-center hover:bg-[#8B6D4A] hover:text-white transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* MAP Button matching Figma */}
          <div>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-3 rounded-2xl bg-[#8B6D4A] text-white font-bold text-sm hover:bg-[#765A3B] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              <span>MAP (แผนที่โกดัง)</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C5B49D] gap-2">
          <p>© 2026 CHINA FURNI (CHINA FURNITURE IMPORT) • All Rights Reserved.</p>
          <p>จัดทำโดย: นางสาวชุติมนทน์ (Chutimon Chattuhrong) • รหัสนักศึกษา -040</p>
        </div>

      </div>
    </footer>
  );
};
