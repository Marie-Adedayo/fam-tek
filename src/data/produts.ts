import type { Product } from "../types";


export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Infinix Note 40',
    price: 245000,
    discount: 15,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop',
    rating: 4.5,
    specs: ['8GB RAM', '256GB', '5000mAh'],
    description: 'Sleek performance with long battery life.'
  },
  {
    id: 'phn-2',
    name: 'iPhone 13',
    price: 585000,
    discount: 10,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1616410011236-7db55f34e05d?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    specs: ['128GB', 'Super Retina XDR'],
    description: 'Reliable performance and great camera.'
  },
  {
    id: 'lap-1',
    name: 'HP Pavilion 15',
    price: 820000,
    discount: 5,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop',
    rating: 4.3,
    specs: ['Core i7', '16GB RAM', '512GB SSD'],
    description: 'Balanced work and play notebook.'
  },
  {
    id: 'lap-2',
    name: 'MacBook Air M2',
    price: 1200000,
    discount: 8,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    specs: ['8‑core', '8GB RAM', '256GB SSD'],
    description: 'Ultra‑light, ultra‑fast everyday Mac.'
  },
  {
    id: 'gad-1',
    name: 'Sony WH-1000XM4',
    price: 320000,
    discount: 20,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1518443752609-1f407f6b0f36?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    specs: ['Noise Cancelling', '30h Battery'],
    description: 'Immersive sound, best-in-class ANC.'
  },
  {
    id: 'gad-2',
    name: 'Anker PowerCore 20k',
    price: 63000,
    discount: 12,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=600&auto=format&fit=crop',
    rating: 4.6,
    specs: ['20,000mAh', 'PD 20W'],
    description: 'Fast charging on the go.'
  },
  {
    id: 'phn-3',
    name: 'Samsung Galaxy S23',
    price: 650000,
    discount: 7,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    specs: ['8GB RAM', '256GB', '5000mAh'],
    description: 'Flagship performance and camera.'
  },
  {
    id: 'phn-4',
    name: 'Tecno Camon 20',
    price: 185000,
    discount: 18,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=600&auto=format&fit=crop',
    rating: 4.2,
    specs: ['6GB RAM', '128GB', '4500mAh'],
    description: 'Affordable and stylish.'
  },
  {
    id: 'phn-5',
    name: 'Google Pixel 7',
    price: 480000,
    discount: 9,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3c1b1b2b?q=80&w=600&auto=format&fit=crop',
    rating: 4.6,
    specs: ['8GB RAM', '128GB', 'Android 13'],
    description: 'Pure Android experience.'
  },
  {
    id: 'lap-3',
    name: 'Dell XPS 13',
    price: 950000,
    discount: 6,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    specs: ['Core i7', '16GB RAM', '1TB SSD'],
    description: 'Premium ultrabook for professionals.'
  },
  {
    id: 'lap-4',
    name: 'Lenovo ThinkPad X1',
    price: 1050000,
    discount: 10,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    specs: ['Core i7', '16GB RAM', '512GB SSD'],
    description: 'Business-class reliability.'
  },
  {
    id: 'lap-5',
    name: 'Acer Aspire 5',
    price: 420000,
    discount: 12,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop',
    rating: 4.1,
    specs: ['Core i5', '8GB RAM', '256GB SSD'],
    description: 'Budget-friendly productivity.'
  },
  {
    id: 'gad-3',
    name: 'Apple Watch Series 8',
    price: 350000,
    discount: 10,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    specs: ['GPS', 'Heart Rate', 'Water Resistant'],
    description: 'Smart health and fitness tracking.'
  },
  {
    id: 'gad-4',
    name: 'JBL Flip 6',
    price: 95000,
    discount: 15,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a2b3a8a5c6?q=80&w=600&auto=format&fit=crop',
    rating: 4.5,
    specs: ['Bluetooth', 'Waterproof'],
    description: 'Portable powerful sound.'
  },
  {
    id: 'gad-5',
    name: 'Mi Band 7',
    price: 35000,
    discount: 20,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=600&auto=format&fit=crop',
    rating: 4.4,
    specs: ['Fitness Tracker', 'Sleep Monitor'],
    description: 'Affordable smart band.'
  },
  {
    id: 'gad-6',
    name: 'Amazon Echo Dot',
    price: 45000,
    discount: 13,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop',
    rating: 4.6,
    specs: ['Alexa', 'Smart Speaker'],
    description: 'Voice assistant for your home.'
  },
  {
    id: 'gad-7',
    name: 'Logitech MX Master 3',
    price: 38000,
    discount: 8,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1518443752609-1f407f6b0f36?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    specs: ['Wireless', 'Ergonomic'],
    description: 'Ultimate productivity mouse.'
  },
  {
    id: 'gad-8',
    name: 'Samsung T7 SSD 1TB',
    price: 95000,
    discount: 11,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    specs: ['USB-C', 'Portable'],
    description: 'Fast portable storage.'
  },
  {
    id: 'gad-9',
    name: 'Canon EOS M50',
    price: 420000,
    discount: 14,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a2b3a8a5c6?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    specs: ['24MP', '4K Video'],
    description: 'Compact mirrorless camera.'
  },
  {
    id: 'gad-10',
    name: 'Kindle Paperwhite',
    price: 85000,
    discount: 17,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    specs: ['Waterproof', '8GB'],
    description: 'Read anywhere, anytime.'
  },
  {
    id: 'phn-6',
    name: 'OnePlus 11',
    price: 520000,
    discount: 10,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3c1b1b2b?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    specs: ['12GB RAM', '256GB', 'Snapdragon 8 Gen 2'],
    description: 'Flagship killer with fast charging.'
  },
  {
    id: 'phn-7',
    name: 'Xiaomi Redmi Note 12',
    price: 160000,
    discount: 16,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=600&auto=format&fit=crop',
    rating: 4.3,
    specs: ['6GB RAM', '128GB', '5000mAh'],
    description: 'Value for money.'
  },
  {
    id: 'lap-6',
    name: 'Asus ZenBook 14',
    price: 670000,
    discount: 9,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
    rating: 4.5,
    specs: ['Core i5', '8GB RAM', '512GB SSD'],
    description: 'Slim and lightweight.'
  },
  {
    id: 'lap-7',
    name: 'Microsoft Surface Laptop 5',
    price: 1100000,
    discount: 7,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    specs: ['Core i7', '16GB RAM', '512GB SSD'],
    description: 'Premium build and performance.'
  },
  {
    id: 'lap-8',
    name: 'Apple MacBook Pro 16',
    price: 1800000,
    discount: 6,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    specs: ['M2 Pro', '16GB RAM', '1TB SSD'],
    description: 'Ultimate power for creators.'
  },
  {
    id: 'gad-11',
    name: 'GoPro HERO11',
    price: 210000,
    discount: 12,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1518443752609-1f407f6b0f36?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    specs: ['5.3K Video', 'Waterproof'],
    description: 'Action camera for adventures.'
  },
  {
    id: 'gad-12',
    name: 'Bose QuietComfort Earbuds II',
    price: 150000,
    discount: 15,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    specs: ['ANC', 'Bluetooth'],
    description: 'Premium noise cancelling earbuds.'
  }
]