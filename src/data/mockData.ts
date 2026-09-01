import { Product, ShippingRate, TrackingResult } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'โซฟาไม้ดีไซน์อบอุ่น ดึงปรับนอนได้',
    category: 'CLASSIC',
    price: 12900,
    image: './assets/product_sofa_beige_1784014620772.png',
    description: 'โซฟาสไตล์สแกนดิเนเวีย เบาะนุ่มสบาย โครงไม้แท้แข็งแรง เติมความเป็นธรรมชาติให้ห้องนั่งเล่น สามารถปรับเอนนอนพักผ่อนได้อย่างสะดวกสบาย',
    features: ['โครงไม้แท้ 100%', 'เบาะผ้าทอระบายอากาศ', 'ปรับนอนได้ 3 ระดับ', 'ถอดซักได้'],
    dimensions: '180 x 90 x 85 ซม.',
    isPopular: true
  },
  {
    id: 'p2',
    name: 'ชั้นวางหนังสือทรงกลม หมุนได้รอบตัว',
    category: 'MODERN',
    price: 4200,
    image: './assets/product_bookshelf_1784014647801.png',
    description: 'ชั้นวางหนังสือทรงกลม หมุนได้ 360 องศา หยิบของง่าย ความจุเยอะ ไม่เปลืองพื้นที่ ดีไซน์ไม้เรียบหรูเหมาะกับทุกมุมในบ้าน',
    features: ['หมุนได้ 360 องศา', 'จุหนังสือได้มากกว่า 100 เล่ม', 'ฐานแข็งแรงไม่ล้มง่าย', 'ประกอบง่าย'],
    dimensions: '45 x 45 x 120 ซม.',
    isPopular: true
  },
  {
    id: 'p3',
    name: 'เก้าอี้บีนแบ็กนุ่มฟู ดีไซน์ทูโทนน่ารัก',
    category: 'MODERN',
    price: 2490,
    image: './assets/product_beanbag_1784014666824.png',
    description: 'เก้าอี้บีนแบ็กนุ่มฟู ดีไซน์ทูโทนน่าน่ารัก รองรับสรีระได้ดีเยี่ยม นั่งสบายได้ทั้งวัน เม็ดโฟมไมโครบีดส์ปรับตามสรีระร่างกาย',
    features: ['เม็ดโฟมไมโครบีดส์ความหนาแน่นสูง', 'ผ้าคอตตอนผสมนุ่มสบาย', 'มีซิปซ่อนปลอดภัย', 'น้ำหนักเบาย้ายง่าย'],
    dimensions: '85 x 85 x 70 ซม.',
    isPopular: true
  },
  {
    id: 'p4',
    name: 'เก้าอี้หวายเบาะนุ่ม ดีไซน์ทูโทน',
    category: 'JAPAN',
    price: 3800,
    image: './assets/product_chair_rattan_1784014656789.png',
    description: 'เก้าอี้หวายสานธรรมชาติ ดีไซน์ญี่ปุ่นทูโทน เบาะนุ่มรองรับสรีระ นั่งสบาย เติมกลิ่นอายความผ่อนคลายให้มุมโปรด',
    features: ['หวายแท้สานมืออย่างพิถีพิถัน', 'เบาะผ้านุ่มพิเศษ', 'รับน้ำหนักได้ถึง 150 กก.', 'ทนทานไม่เป็นราง่าย'],
    dimensions: '65 x 68 x 78 ซม.',
    isPopular: true
  },
  {
    id: 'p5',
    name: 'โต๊ะทานอาหารไม้แท้ ขาโค้งมน',
    category: 'CLASSIC',
    price: 18500,
    image: './assets/product_dining_table.png',
    description: 'โต๊ะอาหารขนาด 6 ที่นั่ง ไม้แท้สีธรรมชาติ ขาโต๊ะเหลาโค้งมน ให้สัมผัสสบายและปลอดภัย เข้ากับทุกห้องรับประทานอาหาร',
    features: ['ไม้เกรดพรีเมียมส่งออก', 'เคลือบกันคราบน้ำส้มสายชูและกาแฟ', 'รองรับ 6-8 ที่นั่ง'],
    dimensions: '160 x 85 x 75 ซม.',
    isPopular: true
  },
  {
    id: 'p6',
    name: 'เตียงนอนไม้โครงมินิมอลพร้อมหัวเตียงนุ่ม',
    category: 'CLASSIC',
    price: 22000,
    image: './assets/product_bed_minimal.png',
    description: 'เตียงนอนไม้โครงมินิมอลสไตล์สแกนดิเนเวีย หัวเตียงบุผ้านุ่มสบาย เข้าได้กับห้องนอนทุกโทนสี',
    features: ['โครงไม้สักแท้แข็งแรง', 'รองรับน้ำหนักได้ 400 กก.', 'ไม่มีเสียงดังรบกวนเวลาพลิกตัว'],
    dimensions: '6 ฟุต (180 x 200 x 100 ซม.)',
    isPopular: true
  },
  {
    id: 'p7',
    name: 'โต๊ะทำงานไม้ระแนงโครงเหล็กดำมินิมอล',
    category: 'MODERN',
    price: 5800,
    image: './assets/product_desk_modern.png',
    description: 'โต๊ะทำงานดีไซน์เรียบเท่ ท็อปไม้แท้ตัดกับขาเหล็กพ่นสีดำพาวเดอร์โค้ท เหมาะสำหรับ Work from home',
    features: ['ท็อปไม้กันรอยขีดข่วน', 'มีช่องเก็บสายไฟระเบียบ', 'เหล็กหนาทนทานไม่สั่น'],
    dimensions: '120 x 60 x 75 ซม.'
  },
  {
    id: 'p8',
    name: 'ตู้ทีวีลายระแนงไม้สไตล์ญี่ปุ่น',
    category: 'JAPAN',
    price: 8900,
    image: './assets/product_tv_console.png',
    description: 'ตู้ทีวีวางคอนโซลลายระแนงไม้ บานบานบานเลื่อนนุ่มนวล จัดเก็บสายไฟเนียนตา เพิ่มบรรยากาศมูจิในห้องนั่งเล่น',
    features: ['ระบบช่องระบายความร้อนอุปกรณ์', 'บานรางเลื่อนซ่อนสายตา', 'ขาไม้สูงทำความสะอาดง่าย'],
    dimensions: '160 x 40 x 50 ซม.'
  },
  {
    id: 'p9',
    name: 'โคมไฟตั้งพื้นดีไซน์มินิมอลแสงอบอุ่น',
    category: 'EUROPE',
    price: 2900,
    image: './assets/product_floor_lamp.png',
    description: 'โคมไฟตั้งพื้นทรงสูง แสงไฟสีเหลืองนวลอบอุ่น สบายตา เหมาะสำหรับตั้งมุมห้องรับแขก หรือมุมอ่านหนังสือ',
    features: ['ปรับระดับความสว่างได้ 3 ระดับ', 'หลอดไฟ LED ถนอมสายตา', 'ฐานเหล็กถ่วงน้ำหนักไม่ล้ม'],
    dimensions: '30 x 30 x 150 ซม.'
  },
  {
    id: 'p10',
    name: 'เก้าอี้อาร์มแชร์ผ้านุ่มมินิมอลสีครีม',
    category: 'EUROPE',
    price: 6500,
    image: './assets/product_armchair_cream.png',
    description: 'เก้าอี้พักผ่อนสไตล์ยุโรป ผ้าทอนุ่มละมุน โครงสร้างโอบรับสรีระได้พอดี ให้ความรู้สึกหรูหราอบอุ่น',
    features: ['ผ้าเกรดพรีเมียมถอดซักได้', 'โครงไม้เนื้อแข็งทนทาน', 'ขาพ่นสีทองหรูหรา'],
    dimensions: '75 x 80 x 85 ซม.'
  },
  {
    id: 'p11',
    name: 'กระจกแต่งตัวทรงโค้งตั้งพื้นขอบไม้แท้',
    category: 'EUROPE',
    price: 4500,
    image: './assets/product_standing_mirror.png',
    description: 'กระจกแต่งตัวเต็มตัวทรงซุ้มโค้ง ขอบไม้แท้ขัดเนียน มอบความรู้สึกละมุนและช่วยให้ห้องดูสว่างกว้างขึ้น',
    features: ['กระจก HD เงาสะท้อนตรงตามจริง', 'มีขาตั้งในตัวหรือแขวนผนังได้', 'ติดฟิล์มนิรภัยกันแตกกระจาย'],
    dimensions: '50 x 160 ซม.'
  },
  {
    id: 'p12',
    name: 'แจกันเซรามิกมินิมอลทรงนอร์ดิก',
    category: 'OTHER',
    price: 450,
    image: './assets/product_ceramic_vase.png',
    description: 'แจกันดินเผาเซรามิกทรงเรขาคณิต ผิวแมตต์โทนสีมินิมอล ใส่ดอกไม้แห้งหรือดอกไม้สดแต่งโต๊ะอาหาร',
    features: ['งานปั้นเซรามิกทำมือ', 'เคลือบกันน้ำด้านใน', 'ดีไซน์เก๋เป็นพรอพถ่ายรูปได้'],
    dimensions: '12 x 12 x 25 ซม.'
  },
  {
    id: 'p13',
    name: 'ที่ใส่ทิชชู่เซรามิกสไตล์มูจิ',
    category: 'OTHER',
    price: 350,
    image: './assets/product_tissue_box.png',
    description: 'ที่ใส่ทิชชู่เซรามิกทรงโค้งมน ผิวแมตต์ละมุน เพิ่มความเรียบเก๋ให้ห้องนั่งเล่นและห้องน้ำ',
    features: ['เซรามิกเกรดพรีเมียม', 'ฐานกันลื่น', 'ใส่ทิชชู่ม้วนหรือซองได้'],
    dimensions: '18 x 13 x 11 ซม.'
  },
  {
    id: 'p14',
    name: 'หมอนอิงลายปักผ้าฝ้ายธรรมชาติ',
    category: 'OTHER',
    price: 290,
    image: './assets/product_cushion_pillow.png',
    description: 'หมอนอิงโซฟา ลายปักดอกไม้สไตล์โฮมมี่ ผ้าฝ้ายทอมือระบายอากาศดี มาพร้อมไส้หมอนนุ่มเด้ง',
    features: ['ซิปซ่อนถอดซักได้', 'ใยสังเคราะห์เกรด AA นุ่มไม่แบน', 'ลายน่ารักไม่ซ้ำใคร'],
    dimensions: '45 x 45 ซม.'
  }
];

export const MOCK_SHIPPING_RATES: ShippingRate[] = [
  {
    id: 'r1',
    categoryName: 'โซฟาผ้าแคนวาส / โซฟาหนัง',
    normalRate: 2500,
    specialRate: 2100,
    unit: 'ลูกบาศก์เมตร (CBM)',
    note: 'สำหรับการสั่งซื้อจำนวนมาก หรือลูกค้ารายย่อยต่อเนื่อง'
  },
  {
    id: 'r2',
    categoryName: 'เตียงนอนไม้โครงมินิมอล',
    normalRate: 3800,
    specialRate: 3200,
    unit: 'ชุด',
    note: 'รวมแพ็กเกจเสริมไม้ตีลังป้องกันแรงกระแทก'
  },
  {
    id: 'r3',
    categoryName: 'ตู้เสื้อผ้าบานเลื่อนญี่ปุ่น',
    normalRate: 2900,
    specialRate: 2450,
    unit: 'ชุด',
    note: 'บริการถอดแยกชิ้นส่วนจัดส่งอย่างปลอดภัย'
  },
  {
    id: 'r4',
    categoryName: 'เก้าอี้บีนแบ็กนุ่มฟู / โซฟาเดี่ยว',
    normalRate: 200,
    specialRate: 160,
    unit: 'ชิ้น',
    note: 'เรทพิเศษสำหรับสมาชิกฝากสั่งซื้อประจำ'
  },
  {
    id: 'r5',
    categoryName: 'เคาน์เตอร์บาร์ / โต๊ะกินข้าว',
    normalRate: 1800,
    specialRate: 1500,
    unit: 'ชุด',
    note: 'สินค้าน้ำหนักมากใช้เรทพิเศษคิดตามน้ำหนักได้'
  },
  {
    id: 'r6',
    categoryName: 'ชั้นวางรองเท้าอเนกประสงค์ / ของแต่งบ้าน',
    normalRate: 280,
    specialRate: 220,
    unit: 'ชิ้น',
    note: 'สินค้านำเข้าชิ้นเล็ก'
  }
];

export const MOCK_TRACKING_DATA: Record<string, TrackingResult> = {
  'CN88992': {
    containerCode: 'CN88992',
    customerName: 'คุณชุติมนทน์ (Chutimon)',
    currentStatus: 'IN_TRANSIT',
    statusText: 'อยู่ระหว่างขนส่งทางเรือ (อ่าวไทย)',
    origin: 'ท่าเรือเซินเจิ้น (Shenzhen Port, China)',
    destination: 'โกดังสินค้าบางนา (Bangna Warehouse, Thailand)',
    estimatedArrival: '05 กันยายน 2026',
    lastUpdated: '01 ก.ย. 2026 08:30 น.',
    steps: [
      {
        title: 'อยู่ที่โกดังจีน',
        description: 'รับสินค้าเข้าโกดังกว่างโจว ตรวจสอบสภาพกล่องเรียบร้อย',
        date: '28 ส.ค. 2026',
        location: 'Guangzhou Warehouse',
        completed: true
      },
      {
        title: 'อยู่ระหว่างเดินทาง',
        description: 'ตู้สินค้าถูกโหลดขึ้นเรือขนส่งแล้ว กำลังแล่นในเส้นทางทะเลอ่าวไทย',
        date: '31 ส.ค. 2026',
        location: 'South China Sea / Gulf of Thailand',
        completed: true
      },
      {
        title: 'ถึงโกดังที่ไทย',
        description: 'เตรียมการผ่านพิธีการศุลกากรและกระจายสินค้าถึงหน้าบ้านคุณ',
        date: 'คาดการณ์ 05 ก.ย. 2026',
        location: 'Bangna Warehouse, Thailand',
        completed: false
      }
    ]
  },
  'CN77123': {
    containerCode: 'CN77123',
    customerName: 'คุณอารียา',
    currentStatus: 'CHINA_WAREHOUSE',
    statusText: 'พัสดุถึงโกดังกว่างโจว รอจัดตู้ส่งออก',
    origin: 'โกดังกว่างโจว ประเทศจีน',
    destination: 'โกดังสินค้าประเทศไทย',
    estimatedArrival: '10 กันยายน 2026',
    lastUpdated: '01 ก.ย. 2026 07:15 น.',
    steps: [
      {
        title: 'อยู่ที่โกดังจีน',
        description: 'เซ็นรับสินค้าจากโรงงานเรียบร้อย บรรจุพาเลทกันกระแทก',
        date: '01 ก.ย. 2026',
        location: 'Guangzhou Hub',
        completed: true
      },
      {
        title: 'อยู่ระหว่างเดินทาง',
        description: 'รอนำตู้ขึ้นเรือขนส่งประจำสัปดาห์',
        date: 'คาดการณ์ 03 ก.ย. 2026',
        location: 'Guangzhou Port',
        completed: false
      },
      {
        title: 'ถึงโกดังที่ไทย',
        description: 'รอเข้ารับพัสดุที่ไทย',
        date: 'คาดการณ์ 10 ก.ย. 2026',
        location: 'Thailand Distribution Center',
        completed: false
      }
    ]
  },
  'CN55401': {
    containerCode: 'CN55401',
    customerName: 'คุณธนกฤต',
    currentStatus: 'THAILAND_WAREHOUSE',
    statusText: 'สินค้าถึงโกดังไทยเรียบร้อย พร้อมจัดส่งถึงบ้าน',
    origin: 'โกดังกว่างโจว ประเทศจีน',
    destination: 'กรุงเทพมหานคร',
    estimatedArrival: 'วันนี้ (01 ก.ย. 2026)',
    lastUpdated: '01 ก.ย. 2026 06:00 น.',
    steps: [
      {
        title: 'อยู่ที่โกดังจีน',
        description: 'จัดเก็บและเคลียร์เอกสารขาออกจีน',
        date: '20 ส.ค. 2026',
        location: 'Guangzhou',
        completed: true
      },
      {
        title: 'อยู่ระหว่างเดินทาง',
        description: 'ผ่านพิธีการศุลกากรทางเรือเรียบร้อย',
        date: '27 ส.ค. 2026',
        location: 'In Transit',
        completed: true
      },
      {
        title: 'ถึงโกดังที่ไทย',
        description: 'สินค้าถึงโกดังไทย คัดแยกเรียบร้อย รอเจ้าหน้าที่โทรนัดส่ง',
        date: '01 ก.ย. 2026',
        location: 'Bangna Distribution Hub',
        completed: true
      }
    ]
  }
};
