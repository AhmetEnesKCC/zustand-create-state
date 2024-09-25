import { create, StoreApi, UseBoundStore } from "zustand";
import _ from "lodash";
import { StateType } from "../index.d";

const createState = <P extends string>(
  defaultValue: any,
  stateName?: P
): {
  [k in P & string as `use${Capitalize<k>}Store`]: UseBoundStore<
    StoreApi<StateType<P>>
  >;
} => {
  // @TODO add typing

  type T = typeof defaultValue;

  const useCreatedState = create<StateType<P>>((set) =>
    // @ts-ignore
    ({
      // @ts-ignore
      [stateName]: defaultValue,
      [`set${_.capitalize(stateName)}`]: (value: T) =>
        // @ts-ignore
        set({ [stateName]: value }),
    })
  );
  // @ts-ignore
  return {
    [`use` + _.capitalize(stateName) + "Store"]: useCreatedState,
  };
};

export default createState;
