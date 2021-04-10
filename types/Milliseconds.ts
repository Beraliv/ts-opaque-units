declare const milliseconds: unique symbol;

export type Milliseconds = number & {
  readonly [milliseconds]: never;
};
