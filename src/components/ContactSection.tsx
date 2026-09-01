import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle, X, Facebook, Instagram } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'กรุณากรอกชื่อของคุณ';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'กรุณากรอกอีเมลของคุณ';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'รูปแบบอีเมลไม่ถูกต้อง (เช่น name@domain.com)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'กรุณากรอกข้อความที่ต้องการสอบถาม';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      // Trigger festive confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header matching Figma Desktop - 6 */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-black text-[#3E342B] tracking-wide flex items-center justify-center gap-3">
          <span>CONTACT ME</span>
          <span className="text-[#8B6D4A] text-3xl">📡</span>
        </h2>
        <p className="text-sm text-[#725739] mt-2 font-medium">
          สอบถามข้อมูลการนำเข้า หรือปรึกษาทีมงาน CHINA FURNI ได้ตลอดเวลา
        </p>
      </div>

      {/* Main Grid: Left Details & Right Form matching Figma Desktop - 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        
        {/* Left Side: Contact Information Cards matching Figma Desktop - 6 */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Phone */}
          <div className="bg-[#8B6D4A]/15 p-4 rounded-2xl border border-[#8B6D4A]/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B6D4A] text-white flex items-center justify-center shadow-md flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#725739] font-semibold">เบอร์โทรศัพท์ติดต่อ:</p>
              <p className="text-base font-extrabold text-[#3E342B]">084-xxx-xxxx / 02-6543-9486</p>
            </div>
          </div>

          {/* Email matching Figma Desktop - 6 email */}
          <div className="bg-[#8B6D4A]/15 p-4 rounded-2xl border border-[#8B6D4A]/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B6D4A] text-white flex items-center justify-center shadow-md flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#725739] font-semibold">อีเมลทางการ:</p>
              <p className="text-sm sm:text-base font-extrabold text-[#3E342B] break-all">
                chutimonchattuhrong@gmail.com
              </p>
            </div>
          </div>

          {/* Line ID */}
          <div className="bg-[#8B6D4A]/15 p-4 rounded-2xl border border-[#8B6D4A]/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B6D4A] text-white flex items-center justify-center shadow-md flex-shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#725739] font-semibold">LINE Official ID:</p>
              <p className="text-base font-extrabold text-[#3E342B]">@chinafurnitureimport</p>
            </div>
          </div>

          {/* Social Icons & Map Button */}
          <div className="pt-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a 
                href="#contact" 
                className="w-11 h-11 rounded-xl bg-[#3E342B] text-white flex items-center justify-center hover:bg-[#8B6D4A] transition-colors"
                title="Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="w-11 h-11 rounded-xl bg-[#3E342B] text-white flex items-center justify-center hover:bg-[#8B6D4A] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={() => setShowMapModal(true)}
              className="px-5 py-3 rounded-2xl bg-[#8B6D4A] text-white text-xs sm:text-sm font-bold hover:bg-[#725739] transition-all shadow-md flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>แผนที่โกดัง</span>
            </button>
          </div>

        </div>

        {/* Right Side: Form Card matching Figma Desktop - 6 */}
        <div className="lg:col-span-7 bg-[#A69B8F] rounded-3xl p-6 sm:p-8 border border-[#94887C] shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Input Name */}
            <div>
              <label className="block text-xs font-bold text-white mb-1">ชื่อของคุณ :</label>
              <input
                type="text"
                placeholder="ชื่อของคุณ..."
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                className="w-full px-4 py-3 rounded-2xl bg-[#EAE0D5] text-[#3E342B] placeholder-[#8A7D70] font-medium border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#8B6D4A]"
              />
              {errors.name && (
                <p className="text-red-200 text-xs font-bold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Input Email */}
            <div>
              <label className="block text-xs font-bold text-white mb-1">ใส่อีเมลของคุณ :</label>
              <input
                type="email"
                placeholder="ใส่อีเมลของคุณ..."
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className="w-full px-4 py-3 rounded-2xl bg-[#EAE0D5] text-[#3E342B] placeholder-[#8A7D70] font-medium border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#8B6D4A]"
              />
              {errors.email && (
                <p className="text-red-200 text-xs font-bold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Textarea Message */}
            <div>
              <label className="block text-xs font-bold text-white mb-1">ข้อความ......</label>
              <textarea
                rows={4}
                placeholder="ข้อความที่ต้องการสอบถาม..."
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                className="w-full px-4 py-3 rounded-2xl bg-[#EAE0D5] text-[#3E342B] placeholder-[#8A7D70] font-medium border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#8B6D4A]"
              />
              {errors.message && (
                <p className="text-red-200 text-xs font-bold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button matching Figma Desktop - 6 */}
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 rounded-2xl bg-[#8B6D4A] text-white font-extrabold text-sm sm:text-base hover:bg-[#725739] transition-all shadow-md flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>ส่งข้อความ</span>
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* Warehouse Map Container matching Figma Desktop - 6 */}
      <div className="bg-[#EADDCB] rounded-3xl p-4 sm:p-6 border border-[#D6C5AE] shadow-lg">
        <h3 className="text-lg font-extrabold text-[#3E342B] mb-3 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#8B6D4A]" />
          <span>แผนที่ตำแหน่งโกดังสินค้าและศูนย์กระจายสินค้า</span>
        </h3>
        <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 border border-[#D0C0AA]">
          <iframe
            title="Thailand Warehouse Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8526543201416!2d100.60945831526462!3d13.666795490402127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a014e7a83d3d%3A0x6b63c7b8c8d8b9!2sBangna%20Complex!5e0!3m2!1sen!2sth!4v1629888888888!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      </div>

      {/* Submission Success Modal Dialog */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#ECE3D5] rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#D5C6B1] shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#3E342B] mb-2">ส่งข้อความเรียบร้อยแล้ว!</h3>
            <p className="text-xs sm:text-sm text-[#725739] mb-6">
              ขอบคุณ <span className="font-bold text-[#8B6D4A]">{formData.name}</span> ทีมงาน CHINA FURNI จะติดต่อกลับที่ <span className="font-bold text-[#8B6D4A]">{formData.email}</span> โดยเร็วที่สุดครับ
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
              className="w-full py-3 rounded-2xl bg-[#8B6D4A] text-white font-bold hover:bg-[#725739] transition-all shadow-md"
            >
              ตกลง
            </button>
          </div>
        </div>
      )}

      {/* Map Preview Modal */}
      {showMapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#ECE3D5] rounded-3xl max-w-3xl w-full p-6 border border-[#D5C6B1] shadow-2xl relative">
            <button
              onClick={() => setShowMapModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#DFD4C3] text-[#3E342B] hover:bg-[#8B6D4A] hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-[#3E342B] mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#8B6D4A]" />
              <span>ที่ตั้งโกดัง CHINA FURNI Thailand Hub</span>
            </h3>
            <div className="rounded-2xl overflow-hidden h-80 border border-[#D0C0AA]">
              <iframe
                title="Thailand Warehouse Map Modal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8526543201416!2d100.60945831526462!3d13.666795490402127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a014e7a83d3d%3A0x6b63c7b8c8d8b9!2sBangna%20Complex!5e0!3m2!1sen!2sth!4v1629888888888!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-xs text-[#725739] flex items-center justify-between">
              <span>📍 โกดังกระจายสินค้าบางนา กม. 12 กรุงเทพมหานคร</span>
              <span>เปิดทำการ: จันทร์ - เสาร์ (08.30 - 17.30 น.)</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
