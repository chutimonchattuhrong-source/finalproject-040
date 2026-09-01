export type ProductCategory = 'ALL' | 'CLASSIC' | 'MODERN' | 'JAPAN' | 'EUROPE' | 'OTHER';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
  features?: string[];
  dimensions?: string;
  isPopular?: boolean;
}

export interface ShippingRate {
  id: string;
  categoryName: string;
  normalRate: number;
  specialRate: number;
  unit: string;
  note?: string;
}

export type TrackingStatus = 'CHINA_WAREHOUSE' | 'IN_TRANSIT' | 'THAILAND_WAREHOUSE' | 'DELIVERED';

export interface TrackingStep {
  title: string;
  description: string;
  date: string;
  location: string;
  completed: boolean;
}

export interface TrackingResult {
  containerCode: string;
  customerName: string;
  currentStatus: TrackingStatus;
  statusText: string;
  origin: string;
  destination: string;
  estimatedArrival: string;
  lastUpdated: string;
  steps: TrackingStep[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderCustomerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  transportType: 'SEA' | 'LAND';
  paymentMethod: 'PROMPTPAY' | 'BANK_TRANSFER' | 'COD';
  note?: string;
}

export interface Order {
  orderId: string;
  items: CartItem[];
  customer: OrderCustomerInfo;
  totalPrice: number;
  shippingFee: number;
  grandTotal: number;
  createdAt: string;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED';
  trackingCode: string;
}
