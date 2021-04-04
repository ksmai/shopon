import * as E from 'fp-ts/lib/Either';

import { Guid } from './guid';

export abstract class Entity {
  protected id: Guid;

  protected constructor() {
    const guid = Guid.create(...this.getNamespaces());
    if (E.isLeft(guid)) {
      throw new Error('Cannot generate guid');
    }
    this.id = guid.right;
  }

  protected abstract getNamespaces(): string[];

  getId(): Guid {
    return this.id;
  }

  equals(other: this): boolean {
    return this.getId().equals(other.getId());
  }
}
