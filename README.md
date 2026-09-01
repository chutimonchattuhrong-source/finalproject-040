# 🛋️ CHINA FURNI - บริการนำเข้าเฟอร์นิเจอร์จากจีน ครบวงจรสำหรับธุรกิจคุณ

> **เว็บไซต์บริการนำเข้าเฟอร์นิเจอร์และของตกแต่งบ้านจากประเทศจีน พัฒนาจากดีไซน์ Figma สู่เว็บแอปพลิเคชันที่ใช้งานได้จริง (Responsive Web Application)**

---

## 👤 ข้อมูลผู้จัดทำ (Author Information)

- **ชื่อ-นามสกุล:** นางสาวชุติมณฑน์ จัตตุรงค์ (Chutimon Chattuhrong)
- **รหัสนักศึกษา:** 6x-xxxxxx-040 (รหัสท้าย 040)
- **สาขาวิชา:** เทคโนโลยีดิจิทัล / วิทยาการคอมพิวเตอร์
- **โฟลเดอร์โครงการ:** `c:\laragon\www\040chutimon\kk\beybeykrukit-040`

---

## 🔗 ลิงก์สำคัญ (Important Links)

- **Source Code Repository:** `c:\laragon\www\040chutimon\kk\beybeykrukit-040` (Local) / [GitHub Repository](https://github.com/chutimonchattuhrong-source/finalproject-040)
- **Figma Design Reference Path:** `c:\laragon\www\040chutimon\kk\figmam` (`Desktop - 1` ถึง `Desktop - 6`)
- **Live Demo (ออนไลน์):** 👉 [คลิกที่นี่เพื่อดูเว็บไซต์จริง](https://chutimonchattuhrong-source.github.io/finalproject-040/)
- **Live Local URL:** `http://localhost:3000/`

---

## 🎯 1. หลักการและวัตถุประสงค์ (Principles & Objectives)

โครงการนี้มีเป้าหมายเพื่อแปลงแนวคิดและองค์ประกอบศิลป์จากดีไซน์ **Figma (`figmam`)** ให้กลายเป็นเว็บไซต์ที่เปิดใช้งานได้จริงบนระบบเครือข่าย โดยมีวัตถุประสงค์หลัก ดังนี้:
1. **การแปลง UI/UX จาก Figma สู่ Code จริง:** ถอดถอดองค์ประกอบจากภาพร่าง `Desktop - 1` ถึง `Desktop - 6` ทั้งโทนสีอบอุ่น (Warm Earthy Palette), ตัวอักษร, และ Layout ให้อยู่ในรูปแบบ Component ที่มีโครงสร้างสะอาด
2. **การตอบสนองทุกขนาดหน้าจอ (Responsive Design):** ออกแบบระบบให้ปรับเปลี่ยน Layout อัตโนมัติรองรับการใช้งานบน Desktop, Tablet และ Mobile Smart Phone
3. **การสร้างประสบการณ์เชิงโต้ตอบ (Interactive User Experience):** มีฟังก์ชันการทำงานจริง เช่น ระบบกรองหมวดหมู่สินค้า, ระบบป๊อปอัพ Modal แสดงรายละเอียดสินค้า, ระบบค้นหาสถานะตู้สินค้าแบบ Real-time, ระบบคำนวณอัตราค่าส่ง, และแบบฟอร์มติดต่อที่มีระบบ Form Validation
4. **ความโปร่งใสในการรายงานการใช้ AI (AI Usage Transparency):** บันทึกกระบวนการคิด คำสั่ง Prompts และข้อผิดพลาดที่ได้รับการแก้ไขอย่างเป็นระบบ

---

## 🛠️ 2. Technology Stack และเหตุผลในการเลือกใช้

| เทคโนโลยี / ไลบรารี | หน้าที่ในโครงการ | เหตุผลในการเลือกใช้ (Justification) |
| :--- | :--- | :--- |
| **React 18** | UI Framework (Frontend) | โครงสร้างแบบ Component-based ช่วยให้จัดการ State และนำโค้ดกลับมาใช้ซ้ำได้ง่าย ทำงานเร็วและรองรับการขยายระบบ |
| **Vite 6** | Build Tool & Dev Server | ให้ความเร็วในการ Compile โค้ดและแสดงผล Hot Module Replacement (HMR) ไวกว่าระบบเดิมอย่างมาก |
| **TypeScript** | Type Checker | ช่วยป้องกันข้อผิดพลาดรันไทม์ (Runtime Errors) ผ่านระบบ Static Typing เพิ่มความน่าเชื่อถือให้โค้ด |
| **Tailwind CSS 3** | Utility-first CSS | จัดแต่งสไตล์ได้ยืดหยุ่นตรงตามดีไซน์ใน Figma อย่างแม่นยำ ปรับเปลี่ยนโทนสีและทำ Responsive ด้วย Prefix ได้ง่าย |
| **Lucide React** | Icon Suite | ไอคอนสไตล์มินิมอล มีน้ำหนักเส้นคมชัด สอดคล้องกับธีมของ Figma |
| **Canvas Confetti** | Visual FX | เพิ่มแอนิเมชันเฉลิมฉลองเมื่อส่งแบบฟอร์มติดต่อสำเร็จ เพิ่มความประทับใจแก่ผู้ใช้งาน |

---

## 📐 3. โครงสร้างและฟีเจอร์ของเว็บไซต์ (Website Structure & Features)

เว็บไซต์ประกอบด้วย 6 ส่วนงานหลัก (Sections) ในรูปแบบ Single Page Application (SPA) ที่มีระบบ Smooth Navigation:

```
CHINA FURNI Web Application
├── 1. Header & Sticky Navbar (พร้อม Mobile Hamburger Menu)
├── 2. Hero Section (Home Page Showcase Slider & 5 Feature Badges)
├── 3. Select Product Catalog (Interactive Filter Tabs, Grid & Detail Modal)
├── 4. Our Services (3 Feature Pill Cards: รับฝากสั่งซื้อ, บริการนำเข้า, การรับประกัน)
├── 5. Import Rates (ตารางเปรียบเทียบราคา & Interactive Calculator)
├── 6. Track Products (ค้นหาเลขตู้สินค้า & 3-Step Real-time Status Timeline)
├── 7. Contact Me (Form Validation, Google Maps & Submission Success Modal)
└── 8. Footer (ข้อมูลติดต่อ, หมายเลขโทรศัพท์ & Social Links)
```

### 🌟 ฟังก์ชันเด่นที่ใช้งานได้จริง (Interactive Features):
1. **ระบบค้นหาตู้สินค้าเรียลไทม์ (Track Products Tool):**
   - ผู้ใช้กรอกเลขตู้สินค้า (เช่น `CN88992`, `CN77123`, `CN55401`) หรือพิมพ์เลขตู้ใดๆ
   - ระบบแสดง Timeline แอนิเมชัน 3 ขั้นตอน: **1. อยู่ที่โกดังจีน ➔ 2. อยู่ระหว่างเดินทาง ➔ 3. ถึงโกดังที่ไทย** พร้อมกำหนดวันคาดการณ์ถึง
2. **ระบบกรองสินค้าตามหมวดหมู่ (Product Filter Tabs):**
   - กดปุ่มสลับหมวดหมู่ `ALL`, `CLASSIC`, `MODERN`, `JAPAN`, `EUROPE`, `อื่น ๆ` สินค้าจะเปลี่ยนการแสดงผลทันที
3. **ระบบ Modal ดูสเปกสินค้า (Product Quick View):**
   - คลิกที่การ์ดสินค้าเพื่อเปิดป๊อปอัพขยายภาพ แสดงวัสดุ ขนาด และปุ่มกดส่งคำขอสั่งซื้อ
4. **เครื่องมือคำนวณอัตราค่าขนส่ง (Import Rate Calculator):**
   - เลือกประเภทสินค้าในตารางเพื่อไฮไลท์ส่วนต่างราคาและคำนวณผลรวมส่วนลดระหว่างเรทปกติและเรทพิเศษ
5. **ระบบตรวจสอบความถูกต้องของแบบฟอร์ม (Form Validation):**
   - เช็กฟิลด์ว่างและรูปแบบอีเมล แจ้งเตือนข้อผิดพลาดด้วยสีแดง และเด้งป๊อปอัพยืนยันพร้อม Confetti เมื่อส่งสำเร็จ

---

## 🎨 4. กระบวนการพัฒนาและหลักการออกแบบ (Design Implementation)

- **Color Palette:** ใช้โทนสีอบอุ่นสไตล์ความหรูหราอบอุ่นตาม Figma:
  - Primary Brand Color: `#8B6D4A` (Earthy Brown / โทนน้ำตาลอบอุ่น)
  - Secondary Accent: `#D9C3A3` / `#E5DACB` (Soft Sand Beige)
  - Background Base: `#E2D9CC` / `#D6CBBC` (Warm Cream Neutral)
  - Dark Typography: `#3E342B` (Charcoal Muted Earth)
- **Typography:** เลือกใช้ Google Fonts **'Prompt'** ร่วมกับ **'Sarabun'** เพื่อความอ่านง่าย ทันสมัย และสวยงามบนหน้าจอทุกขนาด
- **Glassmorphism & Micro-interactions:** เพิ่มเอฟเฟกต์การลอยตัว (Hover Lift), แสงเงาละมุน (Soft Shadows), และการเปลี่ยนผ่านแบบ Smooth Transition

---

## 📱 5. การรองรับการแสดงผล (Responsive Design Evidence)

ระบบได้รับการทดสอบและปรับแต่งการแสดงผลรองรับ 3 อุปกรณ์หลัก:
1. **Desktop View (1440px +):** แสดงผล 4 คอลัมน์สำหรับสินค้า, ตารางเรทราคาแบบขนาน, และเมนูนำทางแบบแถบยาว
2. **Tablet View (768px - 1024px):** ปรับคอลัมน์สินค้าเป็น 2 คอลัมน์ และย่อระยะห่าง Padding ให้พอดีสายตา
3. **Mobile Smartphone View (375px - 430px):** 
   - แสดงผลสินค้า 1 คอลัมน์
   - เปลี่ยนเมนูหลักเป็น **Drawer Slide-over Menu** ผ่านปุ่ม Hamburger (`☰`)
   - ปุ่มกดขนาดใหญ่ (Touch-friendly minimum 44px) สะดวกต่อการกดด้วยนิ้วมือ

---

## 🤖 6. รายงานการใช้ AI (AI Usage Report)

### 6.1 รายการ AI Prompts ที่ใช้ในการพัฒนา:
1. *Prompt 1 (Planning & Architecture):* `"ช่วยวิเคราะห์ไฟล์รูปภาพ Figma Desktop 1-6 ในโฟลเดอร์ figmam และวางโครงสร้าง React Component สำหรับทำเว็บนำเข้าเฟอร์นิเจอร์จากจีน"`
2. *Prompt 2 (UI Implementation):* `"สร้าง Component ProductSection พร้อมแท็บกรองหมวดหมู่ ALL, CLASSIC, MODERN, JAPAN, EUROPE และระบบ Modal สเปกสินค้าตามดีไซน์ Figma"`
3. *Prompt 3 (Interactive Logic):* `"เขียนระบบค้นหาสถานะตู้สินค้า TrackProductsSection ใน React โดยมี 3 ขั้นตอนสถานะ โกดังจีน -> ระหว่างเดินทาง -> โกดังไทย พร้อมปุ่มทดลองกด"`
4. *Prompt 4 (Form Validation & FX):* `"สร้างแบบฟอร์ม ContactSection ที่ตรวจสอบความถูกต้องของอีเมลและช่องว่าง พร้อมแสดงป๊อปอัพยืนยันและ Confetti"`

### 6.2 ผลลัพธ์จาก AI และการปรับแก้ด้วยตนเอง (Manual Adjustments):
- **สิ่งที่ AI เจนเนอเรต:** โครงสร้างฟังก์ชัน State, HTML Structure และชุด CSS Class ของ Tailwind
- **การปรับแก้ด้วยตนเอง:** 
  - แก้ไขรหัสสีให้ตรงกับค่าสีกริดจริงใน Figma (`#8B6D4A` และ `#E2D9CC`)
  - ปรับแก้ข้อความภาษาไทยให้เรียบลื่น ไม่ใช้คำแปลแข็งๆ จาก AI (ลบ Lorem Ipsum ออกทั้งหมด)
  - แก้ไขปัญหา Icon Import (`Dimensions` ➔ `Ruler`) ใน Lucide React ให้ Build ผ่าน 100%

### 6.3 สิ่งที่ได้เรียนรู้จากการทำงานร่วมกับ AI:
- การใช้ AI ช่วยเขียนโครงสร้าง Boilerplate ช่วยลดเวลาทำโค้ดส่วนซ้ำๆ ลงกว่า 70%
- การตรวจเช็กโค้ดด้วยตัวเอง (Code Review) และการรัน `npm run build` เป็นขั้นตอนสำคัญเพื่อให้มั่นใจว่าแอปพลิเคชันปราศจาก Error

---

## 💻 7. การติดตั้งและเปิดใช้งานในเครื่อง (Local Setup & Run)

```bash
# 1. เข้าสู่โฟลเดอร์โปรเจกต์
cd c:\laragon\www\040chutimon\kk\beybeykrukit-040

# 2. ติดตั้ง Dependencies (หากยังไม่ได้ติดตั้ง)
npm install

# 3. รัน Development Server
npm run dev

# 4. ทดสอบสร้าง Production Build
npm run build

# 5. พรีวิว Production Build
npm run preview
```

---

## 🛠️ 8. ปัญหาที่พบและการแก้ไข (Challenges & Problem Solving)

1. **ปัญหา:** Icon import error ใน Lucide React ระหว่างสั่ง `npm run build`
   - **สาเหตุ:** ชื่อไอคอน `Dimensions` ไม่มีอยู่ในไลบรารีเวอร์ชันล่าสุด
   - **การแก้ไข:** เปลี่ยนใช้ไอคอน `Ruler` ที่มีรูปทรงตรงตามการวัดขนาดสเปกสินค้า ทำให้ Build ผ่านอย่างสมบูรณ์
2. **ปัญหา:** เมนูด้านบนซ้อนทับเนื้อหาเมื่อกด Scroll ไปยังส่วนต่างๆ
   - **สาเหตุ:** Sticky Header มีความสูงทับตำแหน่ง Header ของ Section
   - **การแก้ไข:** เพิ่ม `scroll-margin-top` / `pt-28` และใช้ระบบ Smooth Scroll ปรับ Offset อย่างเหมาะสม

---

© 2026 **CHINA FURNI** • พัฒนาโดย **นางสาวชุติมณฑน์ จัตตุรงค์ (รหัสนักศึกษา -040)**
