type StateType<P> = {
  [k in P & string as `${k}` | `set${Capitalize<k>}`]: any;
};

export declare const createState: <P extends string>(
  defaultValue: any,
  stateName?: P
) => {
  [k in P & string as `use${Capitalize<k>}Store`]: UseBoundStore<
    StoreApi<StateType<P>>
  >;
};
