export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isOnSale?: boolean;
  discount?: number;
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
