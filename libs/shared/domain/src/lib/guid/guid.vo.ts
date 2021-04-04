import { Either } from 'fp-ts/lib/Either';
import * as E from 'fp-ts/lib/Either';
import * as uuid from 'uuid';

import { AppError } from '@shopon/shared/error';
import { DomainObject } from '../domain-object';
import { ValueObject } from '../value-object';
import { InvalidGuidStringError } from './invalid-guid-string.error';

@DomainObject()
export class Guid extends ValueObject {
  private guid: string;

  private constructor(guid: string) {
    super();
    this.guid = guid;
  }

  static create(...namespaces: string[]): Either<AppError, Guid> {
    const guid = [...namespaces, uuid.v4()].join(':');
    return E.right(new Guid(guid));
  }

  static fromString(guid: string): Either<AppError, Guid> {
    const lastPart = guid.split(':').slice(-1)[0];
    if (!uuid.validate(lastPart)) {
      return E.left(InvalidGuidStringError.of(guid));
    }
    return E.right(new Guid(guid));
  }

  equals(other: Guid): boolean {
    return this.guid === other.guid;
  }

  toString(): string {
    return this.guid;
  }
}
