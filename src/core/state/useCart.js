import { create } from "zustand";

const useCart = create((set) => ({
  items: [],
  add: (data) => {
    set((state) => {
      let itemsUpdate = [];
      const itemsTemp = [...state.items];
      const itemsExist = itemsTemp.find((item) => item.id === data.id);
      if (itemsExist) {
      // menjalanjakan data yg sudah
        itemsExist.qty = itemsExist.qty + 1;
        itemsUpdate = itemsTemp;
      } else {
        itemsUpdate = [...state.items, { ...data, qty: 1 }];
      }

      return { items: itemsUpdate };
    });
  },
  remove: () => {

  },
  update: () => {

  }
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
}));

export default useCart;
