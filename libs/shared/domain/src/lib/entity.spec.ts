import { Entity } from './entity';

class TestEntity extends Entity {
  static create() {
    return new TestEntity();
  }

  getNamespaces() {
    return ['shopon', 'test-entity'];
  }
}

describe('Entity', () => {
  it('can be created with a namespaced id', () => {
    const entity = TestEntity.create();
    const id = entity.getId().toString();
    for (const namespace of entity.getNamespaces()) {
      expect(id).toContain(namespace);
    }
  });
});
