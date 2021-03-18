import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

/* eslint-disable-next-line */
export interface LogoProps {
  className?: string;
}

const wrapper = css`
  position: relative;
`

export function Logo({ className }: LogoProps) {
  return (
    <div css={wrapper} className={className}>
      <Image
        src="/shopon-logo-long.png"
        alt="Shopon"
        width={2046}
        height={657}
      />
    </div>
  );
}

export default Logo;
