import * as uuid from 'uuid';
import * as E from 'fp-ts/lib/Either';

import { Guid } from './guid.vo';

describe('Guid', () => {
  it('can be created without namespaces', () => {
    const guid = E.getOrElseW(fail)(Guid.create());
    const isValidUuid = uuid.validate(guid.toString());
    expect(isValidUuid).toBe(true);
  });

  it('can be created with namespaces', () => {
    const namespaces = ['namespace1', 'namespace2'];
    const guid = E.getOrElseW(fail)(Guid.create(...namespaces));
    for (const namespace of namespaces) {
      expect(guid.toString()).toContain(namespace);
    }
  });

  it('can be created from valid uuid string', () => {
    const guidString = `valid:${uuid.v4()}`;
    const guid = E.getOrElseW(fail)(Guid.fromString(guidString));
    expect(guid.toString()).toBe(guidString);
  });

  it('throws if created from invalid uuid string', () => {
    const guidString = 'invalid guid';
    const guid = Guid.fromString(guidString);
    expect(E.isLeft(guid)).toBe(true);
  });

  it('2 guids from the same string are equal', () => {
    const guidString = uuid.v4();
    const guid1 = E.getOrElseW(fail)(Guid.fromString(guidString));
    const guid2 = E.getOrElseW(fail)(Guid.fromString(guidString));
    expect(guid1.equals(guid2)).toBe(true);
  });

  it('2 new guids are not equal', () => {
    const guid1 = E.getOrElseW(fail)(Guid.create());
    const guid2 = E.getOrElseW(fail)(Guid.create());
    expect(guid1.equals(guid2)).toBe(false);
  });
});
