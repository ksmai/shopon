import { Either } from 'fp-ts/lib/Either';

import { AppError } from '@shopon/shared/error';

interface IValueObject<T> {
  equals(this: T, other: T): boolean;
}

interface ValueObjectConstructor<T> {
  create(...args: unknown[]): Either<AppError, IValueObject<T>>;
}

type Instance<T> = T extends { prototype: unknown } ? T['prototype'] : unknown;

export function ValueObject() {
  return <T extends ValueObjectConstructor<Instance<T>>>(constructor: T) => {
    constructor;
  };
}
