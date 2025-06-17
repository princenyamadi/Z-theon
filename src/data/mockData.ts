import type { Product, Category, FeaturedProduct } from "../types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Phones",
    icon: "DevicePhoneMobileIcon",
    slug: "phones",
  },
  {
    id: "2",
    name: "Computers",
    icon: "ComputerDesktopIcon",
    slug: "computers",
  },
  {
    id: "3",
    name: "Accessories",
    icon: "CircleStackIcon",
    slug: "accessories",
  },
  {
    id: "4",
    name: "Laptops",
    icon: "DeviceTabletIcon",
    slug: "laptops",
  },
  {
    id: "5",
    name: "Electronics",
    icon: "BoltIcon",
    slug: "electronics",
  },
  {
    id: "6",
    name: "Networking",
    icon: "GlobeAltIcon",
    slug: "networking",
  },
  {
    id: "7",
    name: "PC Gaming",
    icon: "CommandLineIcon",
    slug: "pc-gaming",
  },
];

export const products: Product[] = [
  {
    id: "roco-wireless",
    name: "Roco Wireless Headphone",
    description:
      "Experience premium sound quality with our latest wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for extended listening sessions.",
    price: 299.0,
    rating: 4.5,
    reviews: 245,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    category: "accessories",
  },
  {
    id: "ultra-gaming-pc",
    name: "Ultra Gaming PC Pro",
    description:
      "Power through the most demanding games with our flagship gaming PC. Equipped with the latest RTX 4090, 32GB RAM, and lightning-fast SSD storage.",
    price: 2499.99,
    rating: 4.8,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=60",
    category: "computers",
  },
  {
    id: "pro-gaming-mouse",
    name: "Pro Gaming Mouse X1",
    description:
      "Precision-engineered gaming mouse with 20,000 DPI optical sensor, programmable buttons, and RGB lighting. Perfect for competitive gaming.",
    price: 79.99,
    rating: 4.6,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=60",
    category: "accessories",
  },
  {
    id: "4k-gaming-monitor",
    name: '4K Gaming Monitor 32"',
    description:
      "Immerse yourself in stunning 4K visuals with our 32-inch gaming monitor. Features 144Hz refresh rate, 1ms response time, and HDR support.",
    price: 599.99,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
    category: "accessories",
  },
  {
    id: "mechanical-keyboard",
    name: "Mechanical Gaming Keyboard",
    description:
      "Premium mechanical keyboard with Cherry MX switches, customizable RGB backlighting, and aluminum frame. Perfect for gaming and typing.",
    price: 149.99,
    rating: 4.4,
    reviews: 278,
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=60",
    category: "accessories",
  },
  {
    id: "gaming-chair",
    name: "Pro Gaming Chair",
    description:
      "Ergonomic gaming chair with adjustable lumbar support, 4D armrests, and premium PU leather. Designed for maximum comfort during long gaming sessions.",
    price: 399.99,
    rating: 4.3,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&auto=format&fit=crop&q=60",
    category: "accessories",
  },
  {
    id: "gaming-headset",
    name: "7.1 Surround Gaming Headset",
    description:
      "Immersive 7.1 surround sound gaming headset with noise-cancelling microphone and memory foam ear cushions. Perfect for competitive gaming.",
    price: 129.99,
    rating: 4.5,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=60",
    category: "accessories",
  },
  {
    id: "gaming-mousepad",
    name: "Extended Gaming Mousepad",
    description:
      "Large gaming mousepad with non-slip rubber base and smooth surface. Perfect for both keyboard and mouse placement.",
    price: 29.99,
    rating: 4.2,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=60",
    category: "accessories",
  },
];

export const featuredProduct: FeaturedProduct = {
  id: "roco-wireless",
  name: "Roco Wireless Headphone",
  price: 299.0,
  rating: 4.5,
  reviews: 245,
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
};
