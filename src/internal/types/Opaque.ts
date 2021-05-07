declare const OPAQUE_TYPE: unique symbol;

export type Opaque<BaseType, Type> = BaseType & {
  readonly [OPAQUE_TYPE]: Type;
};
