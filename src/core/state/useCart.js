import { create } from "zustand";

const useCart = create((set) => ({
  items: [],
  isOpen: true,
  data: {},
  add: (data) => {
    set((state) => {
      let itemsUpdate = [];
      const itemsTemp = [...state.items];
      const itemsExist = itemsTemp.find((item) => item.id === data.id);
      if (itemsExist) {
        // menjalanjakan data yg sudah ada
        itemsExist.qty = itemsExist.qty + 1;
        itemsUpdate = itemsTemp;
      } else {
        itemsUpdate = [...state.items, { ...data, qty: 1 }];
      }

      return { items: itemsUpdate };
    });
  },
  remove: (data) => {
    set((state) => {
      const { id } = data;
      const items = state.items.filter((item) => item.id !== id);
      return {
        items,
      };
    });
  },
  update: (data) => {
    set((state) => {
      // Cari id yang cocok
      // Jika ada
      // Return value
    });
  },
}));

export default useCart;
