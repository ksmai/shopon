import { pipe } from 'fp-ts/lib/function';
import { Either } from 'fp-ts/lib/Either';
import * as E from 'fp-ts/lib/Either';
import { sequenceS } from 'fp-ts/lib/Apply';

import {
  DomainObject,
  Entity,
  Name,
  Email,
  Password,
  CreateNameError,
  CreateEmailError,
  CreatePasswordError,
} from '@shopon/shared/domain';

export interface CreateAccountParams {
  name: string;
  email: string;
  password: string;
  hashed: string;
}

interface ConstructAccountParams {
  name: Name;
  email: Email;
  password: Password;
}

export type CreateAccountError =
  | CreateNameError
  | CreateEmailError
  | CreatePasswordError;

@DomainObject()
export class Account extends Entity {
  private name: Name;
  private email: Email;
  private password: Password;

  private constructor(params: ConstructAccountParams) {
    super();
    this.name = params.name;
    this.email = params.email;
    this.password = params.password;
  }

  public static create(
    params: CreateAccountParams
  ): Either<CreateAccountError, Account> {
    const properties = {
      name: Name.create(params),
      email: Email.create(params),
      password: Password.create(params),
    };
    return pipe(
      sequenceS(E.either)<CreateAccountError, typeof properties>(properties),
      E.map((params) => new Account(params))
    );
  }

  public getNamespaces(): string[] {
    return ['shopon', 'accounts'];
  }

  public getName(): Name {
    return this.name;
  }

  public getEmail(): Email {
    return this.email;
  }

  public getPassword(): Password {
    return this.password;
  }
}
