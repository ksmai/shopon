import * as E from 'fp-ts/lib/Either';

import { Name } from './name.vo';

describe('Name', () => {
  it('can be created', () => {
    const params = { name: 'John Doe' };
    const name = E.getOrElseW(fail)(Name.create(params));
    expect(name.getName()).toBe(params.name);
  });

  it('trims leading whitespaces', () => {
    const params = { name: '  John Doe' };
    const name = E.getOrElseW(fail)(Name.create(params));
    expect(name.getName()).toBe(params.name.trimStart());
  });

  it('trims trailing whitespaces', () => {
    const params = { name: 'John Doe  ' };
    const name = E.getOrElseW(fail)(Name.create(params));
    expect(name.getName()).toBe(params.name.trimEnd());
  });

  it('throws if name is empty', () => {
    const params = { name: ' ' };
    const name = Name.create(params);
    expect(E.isLeft(name)).toBe(true);
  });

  it('throws if name is too long', () => {
    const params = { name: 'TooLong'.repeat(100000) };
    const name = Name.create(params);
    expect(E.isLeft(name)).toBe(true);
  });
});
