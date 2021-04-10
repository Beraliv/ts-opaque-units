declare const months: unique symbol;

export type Months = number & {
  readonly [months]: never;
};
