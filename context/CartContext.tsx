"use client";

import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode,
} from "react";
import { Product } from "@/lib/types";

export type CartItem = {
  product: Product;
  quantity: number;
};

type State = { items: CartItem[] };

type Action =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (i) => i.product.articleNumber === action.payload.articleNumber
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.articleNumber === action.payload.articleNumber
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { items: [...state.items, { product: action.payload, quantity: 1 }] };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (i) => i.product.articleNumber !== action.payload
        ),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  totalCount: number;
  addItem: (product: Product) => void;
  removeItem: (articleNumber: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      totalCount: state.items.reduce((sum, item) => sum + item.quantity, 0),
      addItem: (product) => dispatch({ type: "ADD_ITEM", payload: product }),
      removeItem: (articleNumber) =>
        dispatch({ type: "REMOVE_ITEM", payload: articleNumber }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [state.items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
