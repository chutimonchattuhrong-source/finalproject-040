import React, { useState, useEffect } from 'react';
import { Menu, X, Lamp, Truck, Phone, PackageSearch, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCart?: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenCart, cartCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home page' },
    { id: 'products', label: 'Select product' },
    { id: 'services', label: 'serve' },
    { id: 'rates', label: 'Import rates' },
    { id: 'tracking', label: 'Track products' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#D6CBBC]/95 backdrop-blur-md shadow-md py-3 border-b border-[#C5B7A4]'
          : 'bg-[#D6CBBC]/80 backdrop-blur-sm py-4 border-b border-[#C5B7A4]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo matching Figma design */}
          <button 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-12 h-12 rounded-xl bg-[#8B6D4A] flex items-center justify-center text-white shadow-sm group-hover:bg-[#725739] transition-colors">
              <Lamp className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#3E342B] block leading-none">
                CHINA FURNI
              </span>
              <span className="text-[11px] font-medium text-[#725739] tracking-widest block uppercase mt-0.5">
                Furniture Import
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#8B6D4A] font-bold border-b-2 border-[#8B6D4A] bg-[#CBBBA6]/30'
                      : 'text-[#5C4F41] hover:text-[#8B6D4A] hover:bg-[#CBBBA6]/20'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenCart && (
              <button
                onClick={onOpenCart}
                className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#E5DACB] text-[#3E342B] hover:bg-[#8B6D4A] hover:text-white transition-all shadow-sm font-bold text-xs sm:text-sm border border-[#C5B7A4]"
                title="เปิดตะกร้าสั่งซื้อ"
              >
                <ShoppingBag className="w-4 h-4 text-[#8B6D4A] group-hover:text-white" />
                <span>ตะกร้าคำสั่งซื้อ</span>
                {cartCount > 0 && (
                  <span className="ml-1 bg-red-500 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={() => handleNavClick('tracking')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B6D4A] text-white text-xs lg:text-sm font-medium hover:bg-[#725739] transition-all shadow-sm"
            >
              <PackageSearch className="w-4 h-4" />
              <span>เช็กสถานะตู้สินค้า</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#3E342B] hover:bg-[#CBBBA6]/50 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#D6CBBC] border-b border-[#C5B7A4] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#8B6D4A] text-white font-bold'
                      : 'text-[#3E342B] hover:bg-[#CBBBA6]/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('tracking')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#8B6D4A] text-white font-medium shadow-sm"
              >
                <PackageSearch className="w-5 h-5" />
                <span>เช็กสถานะตู้สินค้า</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
