import { Either, right } from 'fp-ts/lib/Either';
import * as uuid from 'uuid';

import { ValueObject } from './value-object';
import { AppError } from '@shopon/shared/error';

@ValueObject()
export class Guid {
  private guid: string;

  private constructor(guid: string) {
    this.guid = guid;
  }

  static create(...namespaces: string[]): Either<AppError, Guid> {
    const guid = [...namespaces, uuid.v4()].join(':');
    return right(new Guid(guid));
  }

  static fromString(guid: string): Either<AppError, Guid> {
    return right(new Guid(guid));
  }

  equals(other: Guid): boolean {
    return this.guid === other.guid;
  }

  toString(): string {
    return this.guid;
  }
}
