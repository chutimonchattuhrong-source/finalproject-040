import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { ShoppingCart, Eye, Sparkles, Filter, ChevronRight, ChevronLeft } from 'lucide-react';

interface ProductSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ products, onSelectProduct, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('ALL');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const ITEMS_PER_PAGE = 8;

  const categories: { key: ProductCategory; label: string }[] = [
    { key: 'ALL', label: 'ALL' },
    { key: 'CLASSIC', label: 'CLASSIC' },
    { key: 'MODERN', label: 'MODERN' },
    { key: 'JAPAN', label: 'JAPAN' },
    { key: 'EUROPE', label: 'EUROPE' },
    { key: 'OTHER', label: 'อื่น ๆ' },
  ];

  // Filter products based on selected tab
  const filteredProducts = selectedCategory === 'ALL'
    ? products
    : products.filter(p => p.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);
  
  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to catalog header
    const catalogHeader = document.getElementById('products-header');
    if (catalogHeader) {
      catalogHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header section matching Figma Desktop - 2 */}
      <div id="products-header" className="text-center mb-10 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B6D4A]/10 text-[#8B6D4A] text-xs font-bold uppercase tracking-wider mb-2">
          <ShoppingCart className="w-4 h-4" />
          <span>Catalog & Showcase ({filteredProducts.length} รายการ)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3E342B] flex items-center justify-center gap-3">
          <span>PRODUCT</span>
          <div className="w-10 h-10 rounded-xl bg-[#8B6D4A] text-white flex items-center justify-center shadow-md">
            <ShoppingCart className="w-6 h-6" />
          </div>
        </h2>
        <p className="text-sm text-[#725739] mt-2 max-w-xl mx-auto">
          คัดสรรเฟอร์นิเจอร์นำเข้าเกรดพรีเมียม ดีไซน์ตอบโจทย์ทุกสไตล์บ้านและร้านค้าของคุณ
        </p>
      </div>

      {/* Category Tabs Filter matching Figma Desktop - 2 */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setCurrentPage(1);
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm ${
                isActive
                  ? 'bg-[#8B6D4A] text-white ring-2 ring-[#8B6D4A]/30 scale-105'
                  : 'bg-[#E5DACB] text-[#5C4F41] hover:bg-[#D8C7B3] hover:text-[#3E342B]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[500px]">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className="group cursor-pointer bg-[#ECE3D5] rounded-3xl p-4 border border-[#D5C6B1] hover:border-[#8B6D4A] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-[#DFD4C3]">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23DFD4C3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%238B6D4A" font-size="16" font-family="sans-serif">CHINA FURNI</text></svg>';
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Popular Tag */}
                {product.isPopular && (
                  <span className="absolute top-3 left-3 bg-[#8B6D4A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    สินค้ายอดฮิต
                  </span>
                )}

                {/* Quick View Hover Overlay */}
                <div className="absolute inset-0 bg-[#3E342B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-[#3E342B] text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4 text-[#8B6D4A]" />
                    ดูรายละเอียด
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <h3 className="text-sm font-bold text-[#3E342B] line-clamp-2 mb-2 group-hover:text-[#8B6D4A] transition-colors leading-snug">
                {product.name}
              </h3>
              <p className="text-xs text-[#725739] line-clamp-2 mb-4">
                {product.description}
              </p>
            </div>

            {/* Price Footer */}
            <div className="pt-3 border-t border-[#D5C6B1]/70 flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] text-[#725739] block font-medium">ราคาพิเศษ</span>
                <span className="text-base font-extrabold text-[#8B6D4A]">
                  {product.price.toLocaleString()} <span className="text-xs font-normal text-[#3E342B]">บาท</span>
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                {onAddToCart && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="px-3 py-2 rounded-xl bg-[#8B6D4A] text-white text-xs font-bold hover:bg-[#725739] transition-colors shadow-sm flex items-center gap-1"
                    title="สั่งซื้อรายการนี้"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    สั่งซื้อ
                  </button>
                )}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(product);
                  }}
                  className="w-8 h-8 rounded-xl bg-[#E5DACB] text-[#3E342B] flex items-center justify-center hover:bg-[#8B6D4A] hover:text-white transition-colors shadow-sm"
                  title="ดูรายละเอียดสินค้า"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Functional Dynamic Pagination Controls matching Figma Desktop - 2 */}
      <div className="mt-12 flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-2">
          {/* Previous Page Button */}
          <button
            onClick={() => handlePageChange(Math.max(1, activePage - 1))}
            disabled={activePage === 1}
            className={`w-10 h-10 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${
              activePage === 1
                ? 'opacity-40 cursor-not-allowed bg-[#E5DACB] text-[#725739]'
                : 'bg-[#E5DACB] text-[#3E342B] hover:bg-[#8B6D4A] hover:text-white'
            }`}
            title="หน้าก่อนหน้า"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dynamic Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`w-10 h-10 rounded-xl font-bold text-sm transition-all shadow-sm ${
                activePage === pageNumber
                  ? 'bg-[#3E342B] text-white scale-110'
                  : 'bg-[#E5DACB] text-[#3E342B] hover:bg-[#D8C7B3]'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          {/* Next Page Button */}
          <button
            onClick={() => handlePageChange(Math.min(totalPages, activePage + 1))}
            disabled={activePage === totalPages}
            className={`w-10 h-10 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${
              activePage === totalPages
                ? 'opacity-40 cursor-not-allowed bg-[#E5DACB] text-[#725739]'
                : 'bg-[#E5DACB] text-[#3E342B] hover:bg-[#8B6D4A] hover:text-white'
            }`}
            title="หน้าถัดไป"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Page status text */}
        <span className="text-xs font-semibold text-[#725739]">
          แสดงหน้า {activePage} จากทั้งหมด {totalPages} หน้า ({filteredProducts.length} สินค้า)
        </span>
      </div>

    </section>
  );
};
