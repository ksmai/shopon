import { Either } from 'fp-ts/lib/Either';
import * as E from 'fp-ts/lib/Either';

import { BaseError } from '@shopon/shared/error';
import { DomainObject, Entity } from '@shopon/shared/domain';

export interface CreateAccountData {
  name: string;
  email: string;
  password: string;
}

@DomainObject()
export class Account extends Entity {
  private name: string;
  private email: string;
  private password: string;

  private constructor(name: string, email: string, password: string) {
    super();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public static create(data: CreateAccountData): Either<BaseError, Account> {
    return E.right(new Account(data.name, data.email, data.password));
  }

  public getNamespaces(): string[] {
    return ['shopon', 'accounts'];
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }
}
