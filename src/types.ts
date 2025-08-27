export type Category = 'Phones' | 'Laptops' | 'Gadgets' | 'Accessories'

export type Product = {
  id: string; // Change from number to string
  name: string;
  price: number;
  discount: number;
  category: string;
  image: string;
  rating: number;
  specs: string[];
  description: string;
};
