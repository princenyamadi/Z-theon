import { create } from "zustand";
import { CartStore, Product } from "../types";

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,

  addItem: (product: Product, quantity: number = 1) => {
    console.log("Adding item to cart:", product, "quantity:", quantity);
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        const newTotalItems = updatedItems.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        const newTotalPrice = updatedItems.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );
        console.log("Updated cart state (existing item):", {
          items: updatedItems,
          totalItems: newTotalItems,
          totalPrice: newTotalPrice,
        });
        return {
          items: updatedItems,
          totalItems: newTotalItems,
          totalPrice: newTotalPrice,
        };
      }

      const newItems = [...state.items, { product, quantity }];
      const newTotalItems = newItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const newTotalPrice = newItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      console.log("Updated cart state (new item):", {
        items: newItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      });
      return {
        items: newItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      };
    });
  },

  removeItem: (productId: string) => {
    console.log("Removing item from cart:", productId);
    set((state) => {
      const updatedItems = state.items.filter(
        (item) => item.product.id !== productId
      );
      const newTotalItems = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const newTotalPrice = updatedItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      console.log("Updated cart state (removed item):", {
        items: updatedItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      });
      return {
        items: updatedItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      };
    });
  },

  updateQuantity: (productId: string, quantity: number) => {
    console.log("Updating quantity:", productId, "new quantity:", quantity);
    set((state) => {
      const updatedItems = state.items.map((item) => {
        if (item.product.id !== productId) return item;
        return { ...item, quantity };
      });

      const newTotalItems = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const newTotalPrice = updatedItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      console.log("Updated cart state (quantity):", {
        items: updatedItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      });
      return {
        items: updatedItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      };
    });
  },

  clearCart: () => {
    console.log("Clearing cart");
    set({ items: [], totalItems: 0, totalPrice: 0 });
  },
}));
