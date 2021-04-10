declare const days: unique symbol;

export type Days = number & {
  readonly [days]: never;
};
