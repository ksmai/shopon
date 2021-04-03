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

  it('different entities are not equal', () => {
    const entity = getOrElseW(fail)(TestEntity.create());
    const entity2 = getOrElseW(fail)(TestEntity.create());
    expect(entity.equals(entity2)).toBe(false);
  });

  it('entities with same ids are equal', () => {
    const entity = getOrElseW(fail)(TestEntity.create());
    const entity2 = getOrElseW(fail)(TestEntity.create());
    entity2['id'] = entity.getId();
    expect(entity.equals(entity2)).toBe(true);
  });
});
