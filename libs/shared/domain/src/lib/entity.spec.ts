import { right, getOrElseW } from 'fp-ts/lib/Either';

import { DomainObject } from './domain-object';
import { Entity } from './entity';

@DomainObject()
class TestEntity extends Entity {
  static create() {
    return right(new TestEntity());
  }

  getNamespaces() {
    return ['shopon', 'test-entity'];
  }
}

describe('Entity', () => {
  it('can be created with a namespaced id', () => {
    const entity = getOrElseW(fail)(TestEntity.create());
    const id = entity.getId().toString();
    for (const namespace of entity.getNamespaces()) {
      expect(id).toContain(namespace);
    }
  });
});
