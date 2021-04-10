declare const decades: unique symbol;

export type Decades = number & {
  readonly [decades]: never;
};
