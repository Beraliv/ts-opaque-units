declare const hours: unique symbol;

export type Hours = number & {
  readonly [hours]: never;
};
