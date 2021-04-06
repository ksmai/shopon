import { TaskEither } from 'fp-ts/lib/TaskEither';
import * as TE from 'fp-ts/lib/TaskEither';
import bcrypt from 'bcrypt';

import { HashPasswordError } from './hash-password.error';

export function hashPassword(
  saltRounds: number
): (password: string) => TaskEither<HashPasswordError, string> {
  return (password) =>
    TE.tryCatchK(bcrypt.hash, HashPasswordError.of)(password, saltRounds);
}
