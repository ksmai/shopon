import { Either } from 'fp-ts/lib/Either';

import { AppError } from '@shopon/shared/error';

interface DomainObjectConstructor<T> {
  create(...args: unknown[]): Either<AppError, T>;
}

type Instance<T> = T extends { prototype: infer P } ? P : never;

export function DomainObject() {
  return <T extends DomainObjectConstructor<Instance<T>>>(constructor: T) => {
    constructor;
  };
}
