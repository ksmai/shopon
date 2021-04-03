import * as uuid from 'uuid';
import { getOrElseW } from 'fp-ts/lib/Either';

import { Guid } from './guid.vo';

describe('Guid', () => {
  it('can be created without namespaces', () => {
    const guid = getOrElseW(fail)(Guid.create());
    const isValidUuid = uuid.validate(guid.toString());
    expect(isValidUuid).toBe(true);
  });

  it('can be created with namespaces', () => {
    const namespaces = ['namespace1', 'namespace2'];
    const guid = getOrElseW(fail)(Guid.create(...namespaces));
    for (const namespace of namespaces) {
      expect(guid.toString()).toContain(namespace);
    }
  });

  it('can be created from string', () => {
    const guidString = 'guid string';
    const guid = getOrElseW(fail)(Guid.fromString(guidString));
    expect(guid.toString()).toBe(guidString);
  });

  it('2 guids from the same string are equal', () => {
    const guidString = 'equal guid string';
    const guid1 = getOrElseW(fail)(Guid.fromString(guidString));
    const guid2 = getOrElseW(fail)(Guid.fromString(guidString));
    expect(guid1.equals(guid2)).toBe(true);
  });

  it('2 new guids are not equal', () => {
    const guid1 = getOrElseW(fail)(Guid.create());
    const guid2 = getOrElseW(fail)(Guid.create());
    expect(guid1.equals(guid2)).toBe(false);
  });
});
