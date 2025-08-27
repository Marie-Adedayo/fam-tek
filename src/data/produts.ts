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
  }
]