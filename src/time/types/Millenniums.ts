declare const millenniums: unique symbol;

export type Millenniums = number & {
  readonly [millenniums]: never;
};
