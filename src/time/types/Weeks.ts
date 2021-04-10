declare const weeks: unique symbol;

export type Weeks = number & {
  readonly [weeks]: never;
};
