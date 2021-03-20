import React from 'react';
import Img from 'react-optimized-image';
import { css } from '@emotion/react';

import LogoSrc from '@shopon/shared/assets/shopon-logo-long.png';

/* eslint-disable-next-line */
export interface LogoProps {
  className?: string;
}

const img = css`
  width: 128px;
`;

export function Logo({ className }: LogoProps) {
  return (
    <Img
      src={LogoSrc}
      alt="Shopon"
      webp
      sizes={[128]}
      densities={[1, 2]}
      breakpoints={[10000]}
      className={className}
      css={img}
    />
  );
}

export default Logo;
