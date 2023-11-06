// Based on https://dev.to/yezyilomo/global-state-management-in-react-with-global-variables-and-hooks-state-management-doesn-t-have-to-be-so-hard-2n2c
// Credit also goes to my mate Fülöp.

// 1. Create singletons via createGlobalState()
// ##################################
import { useState, useEffect } from "react";

export const stateX = createGlobalState();
export const stateY = createGlobalState();
export const counterA = createGlobalState(100);
export const counterB = createGlobalState(200);

// ##################################

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

      console.log("test mapping", this?.data?.state);

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

  return [state, setState];
}
