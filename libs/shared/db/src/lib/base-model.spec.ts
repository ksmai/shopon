import {
  Column,
  createConnection,
  getConnection,
  Entity,
  getRepository,
  Repository,
} from 'typeorm';

import { BaseModel } from './base-model';

describe('BaseModel', () => {
  let repository: Repository<TestModel>;
  let entity: TestModel;

  beforeEach(async () => {
    await createConnection({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [TestModel],
      synchronize: true,
      logging: false,
    });

    repository = getRepository(TestModel);
    entity = new TestModel();
    entity.id = 'test-id';
    entity.data = 'test-data';
  });

  afterEach(async () => {
    await getConnection().close();
  });

  it('generate createdAt in new entity', async () => {
    const beforeCreate = seconds(new Date());
    await repository.save(entity);
    const afterCreate = seconds(new Date());
    expect(seconds(entity.createdAt)).toBeGreaterThanOrEqual(beforeCreate);
    expect(seconds(entity.createdAt)).toBeLessThanOrEqual(afterCreate);
  });

  it('generate updatedAt in new entity', async () => {
    const beforeCreate = seconds(new Date());
    await repository.save(entity);
    const afterCreate = seconds(new Date());
    expect(seconds(entity.updatedAt)).toBeGreaterThanOrEqual(beforeCreate);
    expect(seconds(entity.updatedAt)).toBeLessThanOrEqual(afterCreate);
  });

  it('generate version in new entity', async () => {
    await repository.save(entity);
    expect(entity.version).toBe(1);
  });

  it('leave deletedAt empty in new entity', async () => {
    await repository.save(entity);
    expect(entity.deletedAt).toBeNull();
  });

  it('update updatedAt during update', async () => {
    await repository.save(entity);
    const beforeUpdate = seconds(new Date());
    entity.data = 'changed-data';
    await repository.save(entity);
    const afterUpdate = seconds(new Date());
    expect(seconds(entity.updatedAt)).toBeGreaterThanOrEqual(beforeUpdate);
    expect(seconds(entity.updatedAt)).toBeLessThanOrEqual(afterUpdate);
  });

  it('update version during update', async () => {
    await repository.save(entity);
    entity.data = 'changed-data';
    await repository.save(entity);
    expect(entity.version).toBe(2);
  });

  it('update deletedAt after soft delete', async () => {
    await repository.save(entity);

    const beforeDelete = seconds(new Date());
    await repository.softRemove(entity);
    const afterDelete = seconds(new Date());

    const deleted = await repository.findOne(entity.id, {
      withDeleted: true,
    });

    expect(seconds(deleted?.deletedAt)).toBeGreaterThanOrEqual(beforeDelete);
    expect(seconds(deleted?.deletedAt)).toBeLessThanOrEqual(afterDelete);
  });
});

function seconds(date?: Date | null) {
  if (!date) {
    throw new Error('date not exists');
  }
  return Math.floor(date.getTime() / 1000);
}

@Entity()
class TestModel extends BaseModel {
  @Column()
  public data!: string;
}
