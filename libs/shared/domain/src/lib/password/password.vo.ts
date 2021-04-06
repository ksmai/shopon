import { pipe } from 'fp-ts/lib/function';
import { Either } from 'fp-ts/lib/Either';
import * as E from 'fp-ts/lib/Either';
import { TaskEither } from 'fp-ts/lib/TaskEither';
import * as TE from 'fp-ts/lib/TaskEither';
import owaspPasswordStrengthTest from 'owasp-password-strength-test';
import bcrypt from 'bcrypt';

import { DomainObject } from '../domain-object';
import { ValueObject } from '../value-object';
import { WeakPasswordError } from './weak-password.error';
import { HashPasswordError } from './hash-password.error';

export interface CreatePasswordParams {
  password: string;
  hashed: string;
}

export type CreatePasswordError = WeakPasswordError;

@DomainObject()
export class Password extends ValueObject {
  private hashed: string;

  private constructor(params: CreatePasswordParams) {
    super();
    this.hashed = params.hashed;
  }

  public static create(
    params: CreatePasswordParams
  ): Either<CreatePasswordError, Password> {
    return pipe(
      checkPasswordStrength(params),
      E.map((params) => new Password(params))
    );
  }

  public getHashed(): string {
    return this.hashed;
  }

  public equals(other: Password): boolean {
    // to compare password, use comparePassword method instead
    return this.hashed === other.hashed;
  }

  public comparePassword(
    password: string
  ): TaskEither<HashPasswordError, boolean> {
    return TE.tryCatchK(bcrypt.compare, HashPasswordError.of)(
      password,
      this.hashed
    );
  }
}

function checkPasswordStrength(
  params: CreatePasswordParams
): Either<WeakPasswordError, CreatePasswordParams> {
  const result = owaspPasswordStrengthTest.test(params.password);
  return !result.strong
    ? E.left(WeakPasswordError.of(result.failedTests, result.errors))
    : E.right(params);
}
