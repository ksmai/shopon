import { pipe } from 'fp-ts/lib/function';
import { Either } from 'fp-ts/lib/Either';
import * as E from 'fp-ts/lib/Either';

import { DomainObject } from '../domain-object';
import { ValueObject } from '../value-object';
import { EmptyNameError } from './empty-name.error';
import { NameTooLongError } from './name-too-long.error';

interface CreateNameParams {
  name: string;
}

type CreateNameError = EmptyNameError | NameTooLongError;

@DomainObject()
export class Name extends ValueObject {
  private name: string;

  private constructor(params: CreateNameParams) {
    super();
    this.name = params.name;
  }

  public static create(
    params: CreateNameParams
  ): Either<CreateNameError, Name> {
    return pipe(
      E.of<CreateNameError, CreateNameParams>(params),
      E.map(trimName),
      E.chainW(checkEmptyName),
      E.chainW(checkLongName),
      E.map((params) => new Name(params))
    );
  }

  public equals(other: Name): boolean {
    return this.name === other.name;
  }

  public getName(): string {
    return this.name;
  }
}

function trimName(params: CreateNameParams): CreateNameParams {
  return {
    name: params.name.trim(),
  };
}

function checkEmptyName(
  params: CreateNameParams
): Either<EmptyNameError, CreateNameParams> {
  return !params.name ? E.left(EmptyNameError.of()) : E.right(params);
}

function checkLongName(
  params: CreateNameParams
): Either<NameTooLongError, CreateNameParams> {
  return params.name.length > 1024
    ? E.left(NameTooLongError.of(params.name))
    : E.right(params);
}
