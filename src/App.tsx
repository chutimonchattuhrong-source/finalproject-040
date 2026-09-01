import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductSection } from './components/ProductSection';
import { ServicesSection } from './components/ServicesSection';
import { ImportRatesSection } from './components/ImportRatesSection';
import { TrackProductsSection } from './components/TrackProductsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { OrderModal } from './components/OrderModal';

import { MOCK_PRODUCTS, MOCK_SHIPPING_RATES, MOCK_TRACKING_DATA } from './data/mockData';
import { Product, CartItem, Order } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Shopping Cart & Order States
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);

  // Active section scroll detector
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'products', 'services', 'rates', 'tracking', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsOrderModalOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderSuccess = (newOrder: Order) => {
    // Register the newly created tracking code dynamically into MOCK_TRACKING_DATA
    MOCK_TRACKING_DATA[newOrder.trackingCode] = {
      containerCode: newOrder.trackingCode,
      customerName: newOrder.customer.name,
      currentStatus: 'CHINA_WAREHOUSE',
      statusText: `สินค้าตามใบสั่งซื้อ ${newOrder.orderId} รับเข้าโกดังจีนเรียบร้อย`,
      origin: 'โกดังสินค้าเมืองกว่างโจว (Guangzhou Port)',
      destination: newOrder.customer.address,
      estimatedArrival: '07 กันยายน 2026',
      lastUpdated: newOrder.createdAt,
      steps: [
        {
          title: 'อยู่ที่โกดังจีน',
          description: `รับสินค้า ${newOrder.items.length} รายการเข้าโกดังจีน ตรวจสอบความถูกต้องเรียบร้อย`,
          date: 'วันนี้',
          location: 'Guangzhou Hub',
          completed: true
        },
        {
          title: 'อยู่ระหว่างเดินทาง',
          description: `ขนส่งประเภท ${newOrder.customer.transportType === 'SEA' ? 'ทางเรือ (Sea Freight)' : 'ทางรถด่วน (Land Express)'}`,
          date: 'คาดการณ์ 03 ก.ย. 2026',
          location: 'In Transit',
          completed: false
        },
        {
          title: 'ถึงโกดังที่ไทย',
          description: `เตรียมจัดส่งไปยัง ${newOrder.customer.address}`,
          date: 'คาดการณ์ 07 ก.ย. 2026',
          location: 'Thailand Distribution',
          completed: false
        }
      ]
    };
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#E2D9CC] text-[#3E342B] flex flex-col font-sans">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenCart={() => setIsOrderModalOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Section 1: Hero Section */}
        <HeroSection 
          onExploreProducts={() => scrollToSection('products')} 
          onContactClick={() => scrollToSection('contact')} 
        />

        {/* Section 2: Products Catalog */}
        <ProductSection 
          products={MOCK_PRODUCTS} 
          onSelectProduct={(product) => setSelectedProduct(product)} 
          onAddToCart={handleAddToCart}
        />

        {/* Section 3: Our Services */}
        <ServicesSection 
          onGoToTrack={() => scrollToSection('tracking')} 
        />

        {/* Section 4: Import Rates */}
        <ImportRatesSection 
          rates={MOCK_SHIPPING_RATES} 
        />

        {/* Section 5: Track Products */}
        <TrackProductsSection />

        {/* Section 6: Contact & Location Map */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Product Detail Modal Dialog */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOrderClick={(product) => {
          handleAddToCart(product);
          setSelectedProduct(null);
        }}
      />

      {/* Shopping Cart & Purchase Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderSuccess={handleOrderSuccess}
      />

    </div>
  );
}

export default App;
