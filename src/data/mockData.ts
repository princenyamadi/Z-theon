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

export const featuredProduct: FeaturedProduct = {
  id: "roco-wireless",
  name: "Roco Wireless Headphone",
  price: 299.0,
  rating: 4.5,
  reviews: 245,
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
};

export const products: Product[] = [
  {
    id: "1",
    name: "Xbox Controller & Games Pack",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 543,
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=60",
    category: "Gaming",
    isOnSale: true,
    discount: 25,
  },
  {
    id: "2",
    name: "Level Up RGB Clarity",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviews: 423,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&auto=format&fit=crop&q=60",
    category: "Accessories",
    isOnSale: true,
    discount: 40,
  },
  {
    id: "3",
    name: "LightTech Webcam",
    price: 29.99,
    rating: 4.2,
    reviews: 321,
    image:
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&auto=format&fit=crop&q=60",
    category: "Accessories",
  },
  {
    id: "4",
    name: "S21 Wireless Headset",
    price: 29.99,
    rating: 4.7,
    reviews: 642,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=60",
    category: "Audio",
  },
  {
    id: "5",
    name: "Black Media Clarity",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.4,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=60",
    category: "Audio",
    isOnSale: true,
  },
  {
    id: "6",
    name: "Mice Logitech",
    price: 29.99,
    rating: 4.6,
    reviews: 532,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=60",
    category: "Accessories",
  },
  {
    id: "7",
    name: "Zone Headphones",
    price: 29.99,
    rating: 4.5,
    reviews: 342,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=60",
    category: "Audio",
  },
  {
    id: "8",
    name: "PS5 Wireless Controller",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 654,
    image:
      "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?w=800&auto=format&fit=crop&q=60",
    category: "Gaming",
    isOnSale: true,
  },
];
