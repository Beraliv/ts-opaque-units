declare const years: unique symbol;

export type Years = number & {
  readonly [years]: never;
};
