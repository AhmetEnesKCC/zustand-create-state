export type StateType<P> = {
  [k in P & string as `${k}` | `set${Capitalize<k>}`]: any;
};
