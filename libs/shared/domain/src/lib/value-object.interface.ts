export interface ValueObject {
  equals<T extends ValueObject>(this: T, other: T): boolean;
}
