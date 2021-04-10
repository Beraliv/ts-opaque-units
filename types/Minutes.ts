declare const minutes: unique symbol;

export type Minutes = number & {
  readonly [minutes]: never;
};
