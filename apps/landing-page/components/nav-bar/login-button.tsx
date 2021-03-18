import React from 'react';
import { css } from '@emotion/react';

import Link from 'next/link';

/* eslint-disable-next-line */
export interface LoginButtonProps {
  className?: string;
}

const loginButton = css`
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  color: inherit;
  text-decoration: none;

  &:active,
  &:focus,
  &:hover {
    opacity: .5;
  }
`;

export function LoginButton({ className }: LoginButtonProps) {
  return (
    <Link href="/login" passHref>
      <a
        href="/login"
        css={loginButton}
        className={className}
      >
        Log in
      </a>
    </Link>
  );
}

export default LoginButton;
