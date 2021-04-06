import { pipe } from 'fp-ts/lib/function';
import { Either } from 'fp-ts/lib/Either';
import * as E from 'fp-ts/lib/Either';
import normalizeEmail from 'normalize-email';

import { DomainObject } from '../domain-object';
import { ValueObject } from '../value-object';
import { InvalidEmailError } from './invalid-email.error';

export interface CreateEmailParams {
  email: string;
}

interface ConstructEmailParams {
  displayed: string;
  normalized: string;
}

export type CreateEmailError = InvalidEmailError;

@DomainObject()
export class Email extends ValueObject {
  private displayed: string;
  private normalized: string;

  private constructor(params: ConstructEmailParams) {
    super();
    this.displayed = params.displayed;
    this.normalized = params.normalized;
  }

  public static create(
    params: CreateEmailParams
  ): Either<CreateEmailError, Email> {
    return pipe(
      E.of<CreateEmailError, CreateEmailParams>(params),
      E.chain(simpleValidate),
      E.map(normalize),
      E.map((params) => new Email(params))
    );
  }

  public equals(other: Email): boolean {
    return this.normalized === other.normalized;
  }

  public getDisplayed(): string {
    return this.displayed;
  }

  public getNormalized(): string {
    return this.normalized;
  }
}

function simpleValidate(
  params: CreateEmailParams
): Either<InvalidEmailError, CreateEmailParams> {
  params = { email: params.email.trim() };
  return !/^[^@]+@[^@]+\.[^@]+$/.test(params.email)
    ? E.left(InvalidEmailError.of(params.email))
    : E.right(params);
}

function normalize(params: CreateEmailParams): ConstructEmailParams {
  return {
    displayed: params.email,
    normalized: normalizeEmail(params.email),
  };
}
