import React from 'react';
import { Product } from '../types';
import { X, ShoppingBag, Check, Ruler, Sparkles, MessageSquare } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOrderClick: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOrderClick }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#ECE3D5] rounded-3xl max-w-2xl w-full border border-[#D5C6B1] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#DFD4C3] text-[#3E342B] hover:bg-[#8B6D4A] hover:text-white transition-colors"
          title="ปิดหน้าต่าง"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#DFD4C3] border border-[#D0C0AA]">
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23DFD4C3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%238B6D4A" font-size="16" font-family="sans-serif">CHINA FURNI</text></svg>';
                }}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#8B6D4A] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {product.category}
              </span>
            </div>

            {/* Product Header & Price */}
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#3E342B] leading-snug mb-3">
                {product.name}
              </h3>
              
              <div className="mb-4 bg-[#E2D6C5] p-3 rounded-2xl border border-[#D0C0AA] inline-block">
                <span className="text-xs text-[#725739] block font-medium">ราคาพิเศษนำเข้า</span>
                <span className="text-2xl font-extrabold text-[#8B6D4A]">
                  {product.price.toLocaleString()} <span className="text-sm font-normal text-[#3E342B]">บาท</span>
                </span>
              </div>

              {product.dimensions && (
                <div className="text-xs text-[#5C4F41] bg-[#DFD4C3]/60 p-2.5 rounded-xl border border-[#D0C0AA] mb-4">
                  <span className="font-bold text-[#8B6D4A]">📐 ขนาดสินค้า:</span> {product.dimensions}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-[#3E342B] mb-1">รายละเอียดสินค้า:</h4>
            <p className="text-xs sm:text-sm text-[#5C4F41] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-[#3E342B] mb-2">จุดเด่นและวัสดุ:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A3E31]">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-[#E2D6C5] p-2 rounded-xl border border-[#D0C0AA]">
                    <Check className="w-4 h-4 text-[#8B6D4A] flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#D5C6B1] flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onOrderClick(product);
                onClose();
              }}
              className="flex-1 py-3.5 rounded-2xl bg-[#8B6D4A] text-white font-extrabold text-sm hover:bg-[#725739] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>สนใจสั่งซื้อเฟอร์นิเจอร์ชิ้นนี้</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3.5 rounded-2xl bg-[#DFD4C3] text-[#3E342B] font-bold text-sm hover:bg-[#D0C0AA] transition-colors"
            >
              ย้อนกลับ
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
