export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon:
    | "DevicePhoneMobileIcon"
    | "ComputerDesktopIcon"
    | "CircleStackIcon"
    | "DeviceTabletIcon"
    | "BoltIcon"
    | "GlobeAltIcon"
    | "CommandLineIcon";
  slug: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}
