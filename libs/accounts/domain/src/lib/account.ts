import { Either, right } from 'fp-ts/lib/Either';

import { AppError } from '@shopon/shared/error';
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

  static create(data: CreateAccountData): Either<AppError, Account> {
    return right(new Account(data.name, data.email, data.password));
  }

  getNamespaces(): string[] {
    return ['shopon', 'accounts'];
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }
}
