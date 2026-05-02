// Mock data for Ravi Tiles - to be replaced by backend API later

export const COMPANY = {
  name: "RAVI TILES",
  tagline: "Built Strong. Built to Last.",
  subTagline: "Strong Foundations. Timeless Spaces.",
  description:
    "Premium paver blocks and precast cement solutions engineered for strength, beauty and generations.",
  yearsInIndustry: 45,
  city: "Gwalior, Madhya Pradesh",
  phone: "+91 98262 42195",
  phoneRaw: "919826242195",
  email: "ravitilesgwl@gmail.com",
  address: "A-14 Maharajpura Industrial Area, Gwalior, Madhya Pradesh, India",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "45+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "11", label: "Product Categories" },
];

export const CLIENTS = [
  "JK Tyre",
  "VRS Foods",
  "Surya Roshni",
  "G R Infraprojects",
  "MES",
  "Air Force Gwalior",
  "PWD Gwalior",
  "Indian Railways",
  "BPCL",
  "HPCL",
  "IOCL",
];

export const PRODUCTS = [
  {
    id: "paver-blocks",
    name: "Paver Blocks",
    category: "Pavers",
    image:
      "https://images.unsplash.com/photo-1652205654728-cfbf878bee95?w=1200&q=80",
    short: "Interlocking concrete pavers for driveways, walkways and plazas.",
    description:
      "Our high-strength interlocking paver blocks are manufactured under hydraulic pressure to deliver exceptional load-bearing capacity. Available in zigzag, unishape, cobble and I-shape patterns with custom colors.",
    specs: [
      { label: "Sizes", value: "60mm / 80mm / 100mm thickness" },
      { label: "Strength", value: "35 – 50 MPa" },
      { label: "Patterns", value: "Zigzag, Unishape, I-Shape, Cobble" },
      { label: "Finish", value: "Matte / Polished / Textured" },
    ],
    tags: ["High Strength", "Anti-Skid", "Custom Colors"],
  },
  {
    id: "chequered-tiles",
    name: "Cement Chequered Tiles",
    category: "Tiles",
    image:
      "https://images.unsplash.com/photo-1605602922835-a08452b4179d?w=1200&q=80",
    short: "Heavy-duty grid pattern tiles for footpaths and parking areas.",
    description:
      "Cement chequered tiles offer a slip-resistant grid surface ideal for sidewalks, parking lots, terraces and industrial floors. Engineered for high traffic and weather resistance.",
    specs: [
      { label: "Standard Size", value: "300 x 300 mm" },
      { label: "Thickness", value: "22 – 28 mm" },
      { label: "Compressive Strength", value: ">25 MPa" },
      { label: "Surface", value: "Chequered / Grooved / Plain" },
    ],
    tags: ["Anti-Skid", "Weather Resistant"],
  },
  {
    id: "kerb-stones",
    name: "Kerb Stones",
    category: "Road",
    image:
      "https://images.unsplash.com/photo-1655755573097-6ceacda9533e?w=1200&q=80",
    short: "Precast kerb stones for road edging and traffic separation.",
    description:
      "Manufactured to IRC standards, our precast kerb stones provide durable road edging, channel definition and traffic separation. Sharp profiles, consistent dimensions, long service life.",
    specs: [
      { label: "Standard Sizes", value: "500 x 300 x 150 mm" },
      { label: "Profiles", value: "Half-batter / Full-batter / Mountable" },
      { label: "Strength", value: "30 – 40 MPa" },
      { label: "Standard", value: "IRC : SP : 84" },
    ],
    tags: ["IRC Standard", "Highway Grade"],
  },
  {
    id: "roof-tiles",
    name: "Roof Tiles (Khaprel)",
    category: "Roofing",
    image:
      "https://images.unsplash.com/photo-1605450099279-533bd3ce379a?w=1200&q=80",
    short: "Traditional and modern khaprel roof tiles in clay & cement.",
    description:
      "Time-tested clay and cement roof tiles (khaprel) offer thermal insulation, weather resistance and a classic aesthetic. Ideal for homes, farmhouses, warehouses and heritage projects.",
    specs: [
      { label: "Material", value: "Clay / Cement" },
      { label: "Coverage", value: "~13 tiles / sqm" },
      { label: "Water Absorption", value: "<10%" },
      { label: "Colors", value: "Terracotta / Grey / Black" },
    ],
    tags: ["Thermal Resistant", "Eco Friendly"],
  },
  {
    id: "fencing-poles",
    name: "Fencing Poles",
    category: "Boundary",
    image:
      "https://images.unsplash.com/photo-1771090410585-c3c095e41906?w=1200&q=80",
    short: "Reinforced precast concrete poles for boundary fencing.",
    description:
      "High-tensile reinforced concrete fence posts engineered for agricultural, industrial and security boundary applications. Pre-drilled options available.",
    specs: [
      { label: "Heights", value: "6 ft / 8 ft / 10 ft / 12 ft" },
      { label: "Section", value: "Square / I-Section" },
      { label: "Reinforcement", value: "4 – 8 mm TMT bars" },
      { label: "Finish", value: "Smooth / Pre-drilled" },
    ],
    tags: ["Reinforced", "Termite-Proof"],
  },
  {
    id: "cable-covers",
    name: "Cable Covers",
    category: "Utility",
    image:
      "https://images.unsplash.com/photo-1657007508392-d68322544f70?w=1200&q=80",
    short: "Concrete cable trench covers for utility protection.",
    description:
      "Heavy-duty precast cable trench covers used by power utilities, telecom and industrial plants to protect underground cables from damage and provide easy access.",
    specs: [
      { label: "Sizes", value: "Custom – up to 1200 x 600 mm" },
      { label: "Load Class", value: "Light / Medium / Heavy" },
      { label: "Reinforcement", value: "Steel mesh / TMT" },
      { label: "Use", value: "Power, Telecom, Industrial" },
    ],
    tags: ["Heavy-Duty", "Utility Grade"],
  },
  {
    id: "breeze-blocks",
    name: "Breeze Blocks (Terracotta Jali)",
    category: "Decorative",
    image:
      "https://images.unsplash.com/photo-1564864829977-701822524526?w=1200&q=80",
    short: "Decorative perforated screen blocks for ventilation & style.",
    description:
      "Architectural breeze blocks combine ventilation, privacy and visual character. Ideal for facades, balconies, partition walls and landscape features.",
    specs: [
      { label: "Standard Size", value: "190 x 190 x 90 mm" },
      { label: "Patterns", value: "Cross / Floral / Diamond / Custom" },
      { label: "Material", value: "Cement / Terracotta" },
      { label: "Use", value: "Facade / Partition / Landscape" },
    ],
    tags: ["Architectural", "Ventilation"],
  },
  {
    id: "boundary-wall",
    name: "Precast Boundary Wall",
    category: "Boundary",
    image:
      "https://images.unsplash.com/photo-1709217930532-dbfb23e0fedd?w=1200&q=80",
    short: "Quick-install precast compound wall systems.",
    description:
      "Engineered precast compound wall panels with pre-cast posts deliver a strong, secure boundary in days, not weeks. Ideal for factories, farms, plots and societies.",
    specs: [
      { label: "Panel Size", value: "2000 x 500 x 50 mm" },
      { label: "Heights", value: "5 ft – 10 ft" },
      { label: "Installation", value: "3 – 5x faster than brick" },
      { label: "Finish", value: "Plain / Textured / Painted" },
    ],
    tags: ["Quick Install", "Cost Effective"],
  },
  {
    id: "cement-jali",
    name: "Cement Jali",
    category: "Decorative",
    image:
      "https://images.unsplash.com/photo-1749976611095-4a58f7e57e4e?w=1200&q=80",
    short: "Modern decorative concrete grilles for facades & gardens.",
    description:
      "Sleek geometric cement jalis bring contemporary character to facades, parapets, garden walls and screens, while allowing light and breeze to flow through.",
    specs: [
      { label: "Sizes", value: "Standard & custom" },
      { label: "Patterns", value: "Geometric / Floral / Custom" },
      { label: "Thickness", value: "40 – 75 mm" },
      { label: "Use", value: "Facade / Parapet / Garden" },
    ],
    tags: ["Modern", "Custom Design"],
  },
  {
    id: "grass-pavers",
    name: "Grass Pavers",
    category: "Eco",
    image:
      "https://images.unsplash.com/photo-1774023507719-28e5c6ecccee?w=1200&q=80",
    short: "Eco-friendly turf pavers for parking and green driveways.",
    description:
      "Open-grid grass pavers allow grass to grow through while supporting vehicle loads — perfect for green parking, fire lanes and sustainable driveways.",
    specs: [
      { label: "Standard Size", value: "400 x 400 x 80 mm" },
      { label: "Open Area", value: "~40%" },
      { label: "Load", value: "Suitable for cars & light trucks" },
      { label: "Use", value: "Green parking, fire lanes" },
    ],
    tags: ["Eco Friendly", "Permeable"],
  },
  {
    id: "saucer-drains",
    name: "Saucer Drains",
    category: "Drainage",
    image:
      "https://images.unsplash.com/photo-1775986351678-c3085a922c6f?w=1200&q=80",
    short: "Precast U-shaped concrete drains for surface water.",
    description:
      "Precast saucer / U-drains handle surface water efficiently along roads, parking areas and industrial yards. Smooth profile, consistent dimensions, easy installation.",
    specs: [
      { label: "Sizes", value: "600 x 450 / 900 x 600 mm" },
      { label: "Profiles", value: "U-Drain / Saucer / Trapezoidal" },
      { label: "Strength", value: "30 – 35 MPa" },
      { label: "Use", value: "Roads, yards, parking" },
    ],
    tags: ["Drainage", "Heavy-Duty"],
  },
];

export const FEATURES = [
  {
    icon: "ShieldCheck",
    title: "Built to Last",
    desc: "Hydraulically pressed and steam cured for industrial-grade durability.",
  },
  {
    icon: "Crosshair",
    title: "Precision Engineering",
    desc: "Tight dimensional tolerances ensure perfect interlock and finish.",
  },
  {
    icon: "Mountain",
    title: "Uncompromising Strength",
    desc: "35–50 MPa compressive strength across our paver and precast range.",
  },
  {
    icon: "CloudRain",
    title: "Weather Resistant",
    desc: "Engineered to withstand monsoon, heat, frost and chemical exposure.",
  },
  {
    icon: "Wrench",
    title: "Low Maintenance",
    desc: "Decades of service life with virtually no upkeep required.",
  },
  {
    icon: "Leaf",
    title: "Eco Friendly",
    desc: "Permeable options, recycled aggregates and low-emission curing.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "Share your project — we understand site conditions, load needs and aesthetics.",
  },
  {
    step: "02",
    title: "Design & Quote",
    desc: "Our team specifies the right product, pattern and quantity with a transparent quote.",
  },
  {
    step: "03",
    title: "Manufacturing",
    desc: "Each batch is hydraulically pressed, steam cured and quality tested in-house.",
  },
  {
    step: "04",
    title: "Delivery & Support",
    desc: "Timely dispatch across India with installation guidance from our experts.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Residential Driveway",
    location: "Gwalior, MP",
    category: "Paver Blocks",
    image:
      "https://images.unsplash.com/photo-1761637823407-ef47925c2714?w=1200&q=80",
  },
  {
    id: 2,
    title: "Commercial Plaza Walkway",
    location: "Indore, MP",
    category: "Interlocking Pavers",
    image:
      "https://images.unsplash.com/photo-1775806383830-39512c641bd6?w=1200&q=80",
  },
  {
    id: 3,
    title: "Garden Pathway",
    location: "Bhopal, MP",
    category: "Designer Pavers",
    image:
      "https://images.unsplash.com/photo-1761193141487-b37734c89bb7?w=1200&q=80",
  },
  {
    id: 4,
    title: "Industrial Yard Pavement",
    location: "Gwalior, MP",
    category: "Heavy-Duty Pavers",
    image:
      "https://images.unsplash.com/photo-1744299622377-0bb10e8507c7?w=1200&q=80",
  },
  {
    id: 5,
    title: "Factory Boundary Wall",
    location: "Malanpur, MP",
    category: "Precast Wall",
    image:
      "https://images.unsplash.com/photo-1709217930532-dbfb23e0fedd?w=1200&q=80",
  },
  {
    id: 6,
    title: "Eco Parking Lot",
    location: "Gwalior, MP",
    category: "Grass Pavers",
    image:
      "https://images.unsplash.com/photo-1774023507719-28e5c6ecccee?w=1200&q=80",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rakesh Sharma",
    role: "Project Engineer, G R Infraprojects",
    quote:
      "Ravi Tiles delivered our kerb stones and pavers on schedule for a critical highway project. Quality and consistency were exceptional throughout.",
  },
  {
    name: "Anjali Verma",
    role: "Architect, Gwalior",
    quote:
      "Their range of jalis and designer pavers gave my project a distinctive character. Reliable team, sharp finish and on-time supply every time.",
  },
  {
    name: "Vikram Singh",
    role: "Procurement Head, JK Tyre",
    quote:
      "For 12+ years, Ravi Tiles has been a trusted partner for our plant expansion needs — boundary walls, paver yards, drains. Always dependable.",
  },
];

export const FAQS = [
  {
    q: "Do you supply outside Gwalior?",
    a: "Yes. We deliver across Madhya Pradesh and pan-India for bulk orders. Logistics are arranged based on order size.",
  },
  {
    q: "Can you customize colors and patterns?",
    a: "Absolutely. We offer custom colors, sizes and patterns for paver blocks, jalis and tiles based on project requirements.",
  },
  {
    q: "What is the typical lead time?",
    a: "Stock items dispatch within 2–4 days. Custom orders typically take 7–15 days depending on quantity and finish.",
  },
  {
    q: "Do you provide installation support?",
    a: "We provide on-site installation guidance and recommend qualified contractors for paver and boundary wall installations.",
  },
];
