
// 1. Create singletons via createGlobalState()
// ##################################
import { useState, useEffect } from "react";

export const stateCart = createGlobalState();

function createGlobalState(initState = null) {
  const prototype = {
    data: { state: [], reRenderFns: [] },

    get() {
      return this.data.state;
    },

    set(newState) {
      if (this?.data?.state?.length === 0) {
        this.data.state.push({
          id: newState.id,
          name: newState.name,
          image: newState.image,
          price: newState.price,
          qty: 1,
        });

        this.data.reRenderFns.forEach((reRender) => reRender());
        return this;
      }

      this?.data?.state?.map((item) => {
        if (item?.id === newState.id) {
          item.qty = item.qty + 1;
        }
        return item;
      });

      // Filter
      const isExist = this?.data?.state?.filter((item) => {
        console.log(item);
        return item.id === newState.id;
      });
      console.log("isExist", isExist);
      if (isExist.length > 0) return;

      this.data.state.push({
        id: newState.id,
        name: newState.name,
        image: newState.image,
        price: newState.price,
        qty: 1,
      });
      this.data.reRenderFns.forEach((reRender) => reRender());
      return this;
    },

    delete(itemId) {
      console.log(itemId);
      this.data.state = this.data.state.filter((item) => item.id !== itemId.id);
      this.data.reRenderFns.forEach((reRender) => reRender());
      // Logic untuk menghapus 1 state

      // Filter data ada atau tidak

      // jika ada maka lakukan delete

      // Jika tidak do nothing
    },

    joinReRender(reRender) {
      if (this.data.reRenderFns.includes(reRender)) return;
      this.data.reRenderFns.push(reRender);
    },

    cancelReRender(reRender) {
      this.data.reRenderFns = this.data.reRenderFns.filter((reRenderFn) => reRenderFn !== reRender);
    },
  };

  return Object.freeze(Object.create(prototype));
}

export default function useGlobalState(globalState) {
  const [, set] = useState(globalState.get());
  const state = globalState.get();
  const reRender = () => set([{}]);

  useEffect(() => {
    globalState.joinReRender(reRender);
    return () => {
      globalState.cancelReRender(reRender);
    };
  });

  function setState(newState) {
    globalState.set(newState);
  }

  function delState(state) {
    globalState.delete(state);
  }

  return [state, setState];
}
