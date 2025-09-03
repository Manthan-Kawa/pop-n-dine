import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuItem } from '../types';

interface CartItem {
  item: MenuItem;
  quantity: number;
  isHalf: boolean;
}

interface CartStore {
  items: CartItem[];
  refreshTrigger: number;
  addItem: (item: MenuItem, isHalf: boolean) => void;
  removeItem: (itemId: number, isHalf: boolean) => void;
  updateQuantity: (itemId: number, quantity: number, isHalf: boolean) => void;
  updatePortionSize: (itemId: number, currentIsHalf: boolean, newIsHalf: boolean) => void;
  clearCart: () => void;
  triggerRefresh: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      refreshTrigger: 0,
      addItem: (item, isHalf) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.item.id === item.id && i.isHalf === isHalf
          );

          if (existingItem) {
            return {
              ...state,
              items: state.items.map((i) =>
                i.item.id === item.id && i.isHalf === isHalf
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }

          return {
            ...state,
            items: [...state.items, { item, quantity: 1, isHalf }],
          };
        }),
      removeItem: (itemId, isHalf) =>
        set((state) => ({
          ...state,
          items: state.items.filter(
            (item) => !(item.item.id === itemId && item.isHalf === isHalf)
          ),
        })),
      updateQuantity: (itemId, quantity, isHalf) =>
        set((state) => ({
          ...state,
          items: state.items.map((item) =>
            item.item.id === itemId && item.isHalf === isHalf
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ).filter((item) => item.quantity > 0),
        })),
      updatePortionSize: (itemId, currentIsHalf, newIsHalf) =>
        set((state) => {
          const currentItem = state.items.find(
            (item) => item.item.id === itemId && item.isHalf === currentIsHalf
          );
          
          if (!currentItem) return state;

          const existingNewPortionItem = state.items.find(
            (item) => item.item.id === itemId && item.isHalf === newIsHalf
          );

          let newItems = state.items.filter(
            (item) => !(item.item.id === itemId && item.isHalf === currentIsHalf)
          );

          if (existingNewPortionItem) {
            newItems = newItems.map((item) =>
              item.item.id === itemId && item.isHalf === newIsHalf
                ? { ...item, quantity: item.quantity + currentItem.quantity }
                : item
            );
          } else {
            newItems.push({
              ...currentItem,
              isHalf: newIsHalf,
            });
          }

          return { ...state, items: newItems };
        }),
      clearCart: () => set((state) => ({ ...state, items: [] })),
      triggerRefresh: () => set((state) => ({ ...state, refreshTrigger: state.refreshTrigger + 1 })),
    }),
    {
      name: 'cart-storage',
      skipHydration: false,
    }
  )
);