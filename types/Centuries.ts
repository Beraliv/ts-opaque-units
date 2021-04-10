declare const centuries: unique symbol;

export type Centuries = number & {
  readonly [centuries]: never;
};
