import React, { useState } from 'react';
import { CartItem, OrderCustomerInfo, Order } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle, ArrowRight, Truck, CreditCard, ShieldCheck, Copy, Check } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOrderSuccess: (newOrder: Order) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderSuccess
}) => {
  const [step, setStep] = useState<'CART' | 'CHECKOUT' | 'SUCCESS'>('CART');
  const [copiedCode, setCopiedCode] = useState(false);
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);

  const [customer, setCustomer] = useState<OrderCustomerInfo>({
    name: 'คุณชุติมนทน์',
    phone: '081-234-5678',
    email: 'chutimon@example.com',
    address: '99/40 ถนนสุขุมวิท แขวงพระโขนง เขตคลองเตย กรุงเทพมหานคร 10110',
    transportType: 'SEA',
    paymentMethod: 'PROMPTPAY',
    note: 'ฝากส่งโกดังช่วงบ่าย มีเจ้าหน้าที่รอรับสินค้า'
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingFee = subtotal > 0 ? (customer.transportType === 'SEA' ? 500 : 900) : 0;
  const grandTotal = subtotal + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const trackingCode = `CN-${randomNum}`;
    const newOrder: Order = {
      orderId: `ORD-${Date.now().toString().slice(-6)}`,
      items: [...cartItems],
      customer: { ...customer },
      totalPrice: subtotal,
      shippingFee,
      grandTotal,
      createdAt: new Date().toLocaleString('th-TH'),
      status: 'CONFIRMED',
      trackingCode
    };

    setCreatedOrder(newOrder);
    onOrderSuccess(newOrder);
    setStep('SUCCESS');
    onClearCart();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#ECE3D5] rounded-3xl max-w-2xl w-full border border-[#D5C6B1] shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#DFD4C3] border-b border-[#D0C0AA] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#8B6D4A] text-white">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#3E342B]">
                {step === 'CART' && 'รายการสินค้าในตะกร้าคำสั่งซื้อ'}
                {step === 'CHECKOUT' && 'กรอกข้อมูลจัดส่งและยืนยันการสั่งซื้อ'}
                {step === 'SUCCESS' && 'ออกใบสั่งซื้อสำเร็จเรียบร้อย'}
              </h2>
              <p className="text-xs text-[#725739]">
                {step === 'CART' && `จำนวน ${cartItems.reduce((acc, i) => acc + i.quantity, 0)} ชิ้นในตะกร้า`}
                {step === 'CHECKOUT' && 'ตรวจสอบที่อยู่จัดส่งและวิธีการชำระเงิน'}
                {step === 'SUCCESS' && `หมายเลขสั่งซื้อ: ${createdOrder?.orderId}`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#E5DACB] text-[#3E342B] hover:bg-[#8B6D4A] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          
          {/* STEP 1: CART ITEMS VIEW */}
          {step === 'CART' && (
            <>
              {cartItems.length === 0 ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#DFD4C3] flex items-center justify-center text-[#8B6D4A]">
                    <ShoppingBag className="w-10 h-10 opacity-60" />
                  </div>
                  <h3 className="text-lg font-bold text-[#3E342B]">ไม่มีสินค้าในตะกร้าคำสั่งซื้อ</h3>
                  <p className="text-sm text-[#725739] max-w-sm mx-auto">
                    เลือกดูรายการสินค้าและกดปุ่ม "เพิ่มลงตะกร้า" เพื่อทำรายการสั่งซื้อเฟอร์นิเจอร์นำเข้าได้ทันที
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full bg-[#8B6D4A] text-white font-bold text-sm hover:bg-[#725739] transition-colors shadow-md inline-block mt-2"
                  >
                    เลือกดูสินค้าเลย
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="divide-y divide-[#D5C6B1]">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="py-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 rounded-xl object-cover border border-[#D5C6B1] bg-[#DFD4C3]"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-[#3E342B] line-clamp-1">{item.product.name}</h4>
                            <span className="text-xs text-[#8B6D4A] font-semibold">
                              {item.product.price.toLocaleString()} บาท / ชิ้น
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center bg-[#E5DACB] rounded-xl p-1 border border-[#D5C6B1]">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="w-7 h-7 rounded-lg bg-[#DFD4C3] text-[#3E342B] flex items-center justify-center hover:bg-[#8B6D4A] hover:text-white transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center text-sm font-bold text-[#3E342B]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="w-7 h-7 rounded-lg bg-[#DFD4C3] text-[#3E342B] flex items-center justify-center hover:bg-[#8B6D4A] hover:text-white transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Delete Item */}
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                            title="ลบรายการนี้"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Box */}
                  <div className="bg-[#DFD4C3] rounded-2xl p-5 border border-[#D5C6B1] space-y-2 mt-6">
                    <div className="flex justify-between text-sm text-[#725739]">
                      <span>ราคารวมสินค้า</span>
                      <span className="font-semibold text-[#3E342B]">{subtotal.toLocaleString()} บาท</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#725739]">
                      <span>ค่าขนส่งนำเข้าจีน-ไทย (ประเมิน)</span>
                      <span className="font-semibold text-[#3E342B]">{shippingFee.toLocaleString()} บาท</span>
                    </div>
                    <div className="border-t border-[#D0C0AA] pt-2 mt-2 flex justify-between text-base font-extrabold text-[#3E342B]">
                      <span>ยอดชำระสุทธิ</span>
                      <span className="text-[#8B6D4A]">{grandTotal.toLocaleString()} บาท</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={onClose}
                      className="w-1/2 py-3 rounded-full bg-[#E5DACB] text-[#3E342B] font-bold text-sm hover:bg-[#D5C6B1] transition-colors"
                    >
                      เลือกสินค้าเพิ่ม
                    </button>
                    <button
                      onClick={() => setStep('CHECKOUT')}
                      className="w-1/2 py-3 rounded-full bg-[#8B6D4A] text-white font-bold text-sm hover:bg-[#725739] transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      ดำเนินการสั่งซื้อ
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* STEP 2: CHECKOUT FORM */}
          {step === 'CHECKOUT' && (
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3E342B] mb-1">ชื่อ-นามสกุล ผู้สั่งซื้อ *</label>
                  <input
                    type="text"
                    required
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6] border border-[#D5C6B1] text-sm text-[#3E342B] focus:outline-none focus:ring-2 focus:ring-[#8B6D4A]"
                    placeholder="เช่น คุณชุติมนทน์"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3E342B] mb-1">เบอร์โทรศัพท์ติดต่อ *</label>
                  <input
                    type="tel"
                    required
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6] border border-[#D5C6B1] text-sm text-[#3E342B] focus:outline-none focus:ring-2 focus:ring-[#8B6D4A]"
                    placeholder="081-XXX-XXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3E342B] mb-1">อีเมลสำหรับรับใบเสร็จ</label>
                <input
                  type="email"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6] border border-[#D5C6B1] text-sm text-[#3E342B] focus:outline-none focus:ring-2 focus:ring-[#8B6D4A]"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3E342B] mb-1">ที่อยู่จัดส่งสินค้าในไทย *</label>
                <textarea
                  rows={2}
                  required
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6] border border-[#D5C6B1] text-sm text-[#3E342B] focus:outline-none focus:ring-2 focus:ring-[#8B6D4A]"
                  placeholder="ระบุบ้านเลขที่ ถนน แขวง/ตำบล เขต/อำเภอ จังหวัด รหัสไปรษณีย์"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3E342B] mb-1 flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#8B6D4A]" />
                    รูปแบบการขนส่งจีน-ไทย
                  </label>
                  <select
                    value={customer.transportType}
                    onChange={(e) => setCustomer({ ...customer, transportType: e.target.value as 'SEA' | 'LAND' })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6] border border-[#D5C6B1] text-sm text-[#3E342B] focus:outline-none focus:ring-2 focus:ring-[#8B6D4A]"
                  >
                    <option value="SEA">ทางเรือ (ประหยัดสุด) - คาดการณ์ 5-7 วัน</option>
                    <option value="LAND">ทางรถ (ด่วนพิเศษ) - คาดการณ์ 3-5 วัน</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E342B] mb-1 flex items-center gap-1">
                    <CreditCard className="w-3.5 h-3.5 text-[#8B6D4A]" />
                    ช่องทางการชำระเงิน
                  </label>
                  <select
                    value={customer.paymentMethod}
                    onChange={(e) => setCustomer({ ...customer, paymentMethod: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6] border border-[#D5C6B1] text-sm text-[#3E342B] focus:outline-none focus:ring-2 focus:ring-[#8B6D4A]"
                  >
                    <option value="PROMPTPAY">สแกน QR PromptPay (ไม่มีค่าธรรมเนียม)</option>
                    <option value="BANK_TRANSFER">โอนผ่านบัญชีธนาคาร (Bank Transfer)</option>
                    <option value="COD">เก็บเงินปลายทาง (COD)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3E342B] mb-1">หมายเหตุเพิ่มเติม</label>
                <input
                  type="text"
                  value={customer.note}
                  onChange={(e) => setCustomer({ ...customer, note: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6] border border-[#D5C6B1] text-sm text-[#3E342B] focus:outline-none focus:ring-2 focus:ring-[#8B6D4A]"
                  placeholder="เช่น ฝากวางสินค้าหน้าบ้าน หรือโทรก่อนส่ง"
                />
              </div>

              {/* Order Summary Confirmation Box */}
              <div className="bg-[#DFD4C3] rounded-2xl p-4 border border-[#D5C6B1] space-y-1 text-xs text-[#725739]">
                <div className="flex justify-between font-bold text-[#3E342B]">
                  <span>รวมรายการทั้งหมด ({cartItems.length} รายการ):</span>
                  <span>{subtotal.toLocaleString()} บาท</span>
                </div>
                <div className="flex justify-between">
                  <span>ค่าขนส่งประเภท {customer.transportType === 'SEA' ? 'ทางเรือ' : 'ทางรถด่วน'}:</span>
                  <span>{shippingFee.toLocaleString()} บาท</span>
                </div>
                <div className="flex justify-between font-extrabold text-sm text-[#8B6D4A] pt-1 border-t border-[#D0C0AA]">
                  <span>ยอดสุทธิที่ต้องชำระ:</span>
                  <span>{grandTotal.toLocaleString()} บาท</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('CART')}
                  className="w-1/3 py-3 rounded-full bg-[#E5DACB] text-[#3E342B] font-bold text-sm hover:bg-[#D5C6B1] transition-colors"
                >
                  ย้อนกลับ
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-full bg-[#8B6D4A] text-white font-bold text-sm hover:bg-[#725739] transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <CheckCircle className="w-4 h-4" />
                  ยืนยันออกใบสั่งซื้อ
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS RECEIPT */}
          {step === 'SUCCESS' && createdOrder && (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-[#3E342B]">สั่งซื้อสินค้าสำเร็จ!</h3>
                <p className="text-xs text-[#725739] mt-1">
                  ระบบทำการออกใบสั่งซื้อและสร้างรหัสติดตามสินค้าสำหรับคุณเรียบร้อยแล้ว
                </p>
              </div>

              {/* Order Tracking Code Display */}
              <div className="bg-[#DFD4C3] rounded-2xl p-5 border border-[#D5C6B1] max-w-md mx-auto space-y-3">
                <span className="text-xs font-bold text-[#725739] uppercase tracking-wider block">
                  รหัสติดตามพัสดุ (Tracking Order Code)
                </span>
                
                <div className="flex items-center justify-center gap-2 bg-[#F4EFE6] py-3 px-4 rounded-xl border border-[#D5C6B1]">
                  <span className="text-2xl font-black text-[#8B6D4A] tracking-wider font-mono">
                    {createdOrder.trackingCode}
                  </span>
                  <button
                    onClick={() => copyToClipboard(createdOrder.trackingCode)}
                    className="p-1.5 rounded-lg bg-[#E5DACB] hover:bg-[#8B6D4A] hover:text-white transition-colors text-[#3E342B]"
                    title="คัดลอกรหัส"
                  >
                    {copiedCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="text-left text-xs text-[#3E342B] space-y-1.5 pt-2 border-t border-[#D0C0AA]">
                  <div className="flex justify-between">
                    <span className="text-[#725739]">ผู้สั่งซื้อ:</span>
                    <span className="font-semibold">{createdOrder.customer.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#725739]">เบอร์โทร:</span>
                    <span className="font-semibold">{createdOrder.customer.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#725739]">ยอดรวมสุทธิ:</span>
                    <span className="font-extrabold text-[#8B6D4A]">{createdOrder.grandTotal.toLocaleString()} บาท</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#E5DACB]/60 border border-[#D5C6B1] text-xs text-[#725739] flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8B6D4A]" />
                คุณสามารถนำรหัส <span className="font-bold text-[#3E342B]">{createdOrder.trackingCode}</span> ไปเช็กสถานะที่เมนู "เช็กสถานะตู้สินค้า" ได้ทันที!
              </div>

              <button
                onClick={() => {
                  setStep('CART');
                  onClose();
                }}
                className="w-full py-3 rounded-full bg-[#8B6D4A] text-white font-bold text-sm hover:bg-[#725739] transition-colors shadow-md"
              >
                ปิดหน้าต่างคำสั่งซื้อ
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
