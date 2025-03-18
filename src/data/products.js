// Sample product data for the eCommerce application
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    price: 59.99,
    discountPrice: 49.99,
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "High-quality wireless earbuds with noise cancellation and long battery life. Perfect for music lovers and professionals on the go.",
    keyFeatures: [
      "Active Noise Cancellation",
      "Bluetooth 5.0",
      "8 Hours Battery Life",
      "Touch Controls",
      "Water Resistant (IPX5)"
    ],
    rating: 4.5,
    reviewCount: 128,
    brand: "SoundTech",
    category: "Electronics",
    stockAvailable: 35,
    isFeatured: true,
    isNew: false
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 129.99,
    discountPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1615486511258-92ac83fe0be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Advanced fitness tracker with heart rate monitor, GPS, and multiple sport modes. Track your workouts, sleep, and daily activities with precision.",
    keyFeatures: [
      "Heart Rate Monitor",
      "GPS Tracking",
      "Sleep Analysis",
      "14 Days Battery Life",
      "Water Resistant (5ATM)"
    ],
    rating: 4.7,
    reviewCount: 256,
    brand: "FitTech",
    category: "Electronics",
    stockAvailable: 42,
    isFeatured: true,
    isNew: true
  },
  {
    id: 3,
    name: "Premium Leather Backpack",
    price: 89.99,
    discountPrice: null,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Handcrafted premium leather backpack with multiple compartments and laptop sleeve. Perfect for work, travel, or school.",
    keyFeatures: [
      "Genuine Full-Grain Leather",
      "15\" Laptop Compartment",
      "Water-Resistant",
      "Adjustable Straps",
      "Multiple Pockets"
    ],
    rating: 4.8,
    reviewCount: 89,
    brand: "Urban Edge",
    category: "Fashion",
    stockAvailable: 15,
    isFeatured: true,
    isNew: false
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    discountPrice: 19.99,
    images: [
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Vacuum insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Perfect for outdoor activities or daily use.",
    keyFeatures: [
      "24 Hours Cold / 12 Hours Hot",
      "BPA-Free",
      "Leak-Proof Design",
      "500ml Capacity",
      "Easy-Carry Handle"
    ],
    rating: 4.6,
    reviewCount: 152,
    brand: "EcoLife",
    category: "Home & Kitchen",
    stockAvailable: 78,
    isFeatured: false,
    isNew: false
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 29.99,
    discountPrice: null,
    images: [
      "https://images.unsplash.com/photo-1618775761147-6e9293978169?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1612210444362-6856e71fc0e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek and minimal design to complement any desk or nightstand.",
    keyFeatures: [
      "10W Fast Charging",
      "Qi-Compatible",
      "LED Indicator",
      "Non-Slip Surface",
      "Overcharge Protection"
    ],
    rating: 4.3,
    reviewCount: 87,
    brand: "TechPower",
    category: "Electronics",
    stockAvailable: 50,
    isFeatured: false,
    isNew: true
  },
  {
    id: 6,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    discountPrice: 24.99,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1529374814685-63e9a35cf5d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Soft and comfortable organic cotton t-shirt with a relaxed fit. Ethically sourced and environmentally friendly.",
    keyFeatures: [
      "100% Organic Cotton",
      "Eco-Friendly",
      "Relaxed Fit",
      "Machine Washable",
      "Available in Multiple Colors"
    ],
    rating: 4.4,
    reviewCount: 63,
    brand: "EcoWear",
    category: "Fashion",
    stockAvailable: 120,
    isFeatured: false,
    isNew: false
  },
  {
    id: 7,
    name: "Bluetooth Portable Speaker",
    price: 79.99,
    discountPrice: 59.99,
    images: [
      "https://images.unsplash.com/photo-1589491106922-a8c03b8bcde1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Powerful Bluetooth speaker with 360° sound and deep bass. Perfect for outdoor gatherings, beach trips, or home use.",
    keyFeatures: [
      "360° Immersive Sound",
      "12 Hours Playtime",
      "Waterproof (IPX7)",
      "Built-in Microphone",
      "Bluetooth 5.0"
    ],
    rating: 4.6,
    reviewCount: 112,
    brand: "SoundTech",
    category: "Electronics",
    stockAvailable: 28,
    isFeatured: true,
    isNew: false
  },
  {
    id: 8,
    name: "Professional Ceramic Hair Dryer",
    price: 119.99,
    discountPrice: 89.99,
    images: [
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1626784215021-2fbed0a17d83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Professional grade ceramic hair dryer with multiple heat and speed settings. Reduces frizz and drying time while protecting hair from damage.",
    keyFeatures: [
      "Ceramic Technology",
      "3 Heat Settings",
      "2 Speed Settings",
      "Cool Shot Button",
      "Concentrator and Diffuser Included"
    ],
    rating: 4.7,
    reviewCount: 78,
    brand: "BeautyPro",
    category: "Beauty & Personal Care",
    stockAvailable: 22,
    isFeatured: false,
    isNew: true
  },
  {
    id: 9,
    name: "Adjustable Dumbbell Set",
    price: 249.99,
    discountPrice: 199.99,
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Space-saving adjustable dumbbell set that replaces 15 sets of weights. Perfect for home gyms and adjustable in 5-pound increments.",
    keyFeatures: [
      "5-50 lbs per Dumbbell",
      "Adjustable in 5lb Increments",
      "Compact Storage",
      "Durable Construction",
      "Easy Weight Selection"
    ],
    rating: 4.9,
    reviewCount: 45,
    brand: "FitTech",
    category: "Sports & Fitness",
    stockAvailable: 8,
    isFeatured: true,
    isNew: false
  },
  {
    id: 10,
    name: "Smart Home Security Camera",
    price: 149.99,
    discountPrice: 129.99,
    images: [
      "https://images.unsplash.com/photo-1558000143-a78f8299c40b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1556255609-5cc66bf5c3b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "HD smart security camera with night vision, motion detection, and two-way audio. Monitor your home from anywhere using the mobile app.",
    keyFeatures: [
      "1080p HD Video",
      "Night Vision",
      "Motion Detection",
      "Two-Way Audio",
      "Cloud Storage"
    ],
    rating: 4.5,
    reviewCount: 93,
    brand: "SmartHome",
    category: "Electronics",
    stockAvailable: 30,
    isFeatured: false,
    isNew: true
  },
  {
    id: 11,
    name: "Bamboo Cutting Board Set",
    price: 39.99,
    discountPrice: null,
    images: [
      "https://images.unsplash.com/photo-1597103856066-5f9109fa4308?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1615278127133-7bfb04c2c94a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Set of 3 sustainable bamboo cutting boards in different sizes. Durable, knife-friendly, and naturally antibacterial.",
    keyFeatures: [
      "Sustainable Bamboo Material",
      "3 Different Sizes",
      "Non-Slip Base",
      "Juice Groove Design",
      "Hanging Hole for Storage"
    ],
    rating: 4.4,
    reviewCount: 57,
    brand: "EcoLife",
    category: "Home & Kitchen",
    stockAvailable: 45,
    isFeatured: false,
    isNew: false
  },
  {
    id: 12,
    name: "Ergonomic Office Chair",
    price: 199.99,
    discountPrice: 169.99,
    images: [
      "https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1625585598750-3d2649a7097f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Adjustable ergonomic office chair with lumbar support and breathable mesh back. Designed for comfort during long work hours.",
    keyFeatures: [
      "Adjustable Height",
      "Lumbar Support",
      "Breathable Mesh Back",
      "360° Swivel",
      "Adjustable Armrests"
    ],
    rating: 4.6,
    reviewCount: 122,
    brand: "WorkComfort",
    category: "Furniture",
    stockAvailable: 18,
    isFeatured: true,
    isNew: false
  }
];

// Categories in the store
const categories = [
  { id: 1, name: "Electronics", icon: "💻", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: 2, name: "Fashion", icon: "👕", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: 3, name: "Home & Kitchen", icon: "🏠", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: 4, name: "Beauty & Personal Care", icon: "💄", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: 5, name: "Sports & Fitness", icon: "🏋️", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: 6, name: "Furniture", icon: "🪑", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" }
];

// Available brands
const brands = [
  { id: 1, name: "SoundTech" },
  { id: 2, name: "FitTech" },
  { id: 3, name: "Urban Edge" },
  { id: 4, name: "EcoLife" },
  { id: 5, name: "TechPower" },
  { id: 6, name: "EcoWear" },
  { id: 7, name: "BeautyPro" },
  { id: 8, name: "SmartHome" },
  { id: 9, name: "WorkComfort" }
];

export { products, categories, brands };
