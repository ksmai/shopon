import * as E from 'fp-ts/lib/Either';

import { DomainObject } from './domain-object';
import { Entity } from './entity';

@DomainObject()
class TestEntity extends Entity {
  public static create() {
    return E.right(new TestEntity());
  }

  public getNamespaces() {
    return ['shopon', 'test-entity'];
  }
}

describe('Entity', () => {
  it('can be created with a namespaced id', () => {
    const entity = E.getOrElseW(fail)(TestEntity.create());
    const id = entity.getId().toString();
    for (const namespace of entity.getNamespaces()) {
      expect(id).toContain(namespace);
    }
  });

  it('different entities are not equal', () => {
    const entity = E.getOrElseW(fail)(TestEntity.create());
    const entity2 = E.getOrElseW(fail)(TestEntity.create());
    expect(entity.equals(entity2)).toBe(false);
  });

  it('entities with same ids are equal', () => {
    const entity = E.getOrElseW(fail)(TestEntity.create());
    const entity2 = E.getOrElseW(fail)(TestEntity.create());
    entity2['id'] = entity.getId();
    expect(entity.equals(entity2)).toBe(true);
  });
});
