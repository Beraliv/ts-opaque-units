declare const seconds: unique symbol;

export type Seconds = number & {
  readonly [seconds]: never;
};
