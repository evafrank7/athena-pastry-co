import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { MenuItem } from "../data/menuItems";

export type CartItem = MenuItem & {
  quantity: number;
  selectedFlavor?: string;
};

type CartContextValue = {
  cart: CartItem[];
  cartCount: number;
  subtotalInCents: number;
  addToCart: (item: MenuItem, quantity: number, selectedFlavor?: string) => void;
  updateQuantity: (id: string, selectedFlavor: string | undefined, quantity: number) => void;
  removeFromCart: (id: string, selectedFlavor?: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function matches(item: CartItem, id: string, selectedFlavor?: string) {
  return item.id === id && item.selectedFlavor === selectedFlavor;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("athena-cart");
    if (!savedCart) return [];

    try {
      return JSON.parse(savedCart) as CartItem[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("athena-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: MenuItem, quantity: number, selectedFlavor?: string) {
    setCart((current) => {
      const existing = current.find((cartItem) => matches(cartItem, item.id, selectedFlavor));
      if (existing) {
        return current.map((cartItem) =>
          matches(cartItem, item.id, selectedFlavor)
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        );
      }
      return [...current, { ...item, quantity, selectedFlavor }];
    });
  }

  function updateQuantity(id: string, selectedFlavor: string | undefined, quantity: number) {
    if (quantity < 1) {
      removeFromCart(id, selectedFlavor);
      return;
    }
    setCart((current) =>
      current.map((item) =>
        matches(item, id, selectedFlavor) ? { ...item, quantity } : item,
      ),
    );
  }

  function removeFromCart(id: string, selectedFlavor?: string) {
    setCart((current) => current.filter((item) => !matches(item, id, selectedFlavor)));
  }

  const value = useMemo(
    () => ({
      cart,
      cartCount: cart.reduce((total, item) => total + item.quantity, 0),
      subtotalInCents: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart: () => setCart([]),
    }),
    [cart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
