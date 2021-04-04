import { Either } from 'fp-ts/lib/Either';

import { BaseError } from '@shopon/shared/error';

interface DomainObjectConstructor<T> {
  create(params?: unknown): Either<BaseError, T>;
}

type Instance<T> = T extends { prototype: infer P } ? P : never;

export function DomainObject() {
  return <T extends DomainObjectConstructor<Instance<T>>>(constructor: T) => {
    constructor;
  };
}
