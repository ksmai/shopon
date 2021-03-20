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
      // work around a bug where a media="(max-width:128px)" is added for some reasons. make it 10000 so that the constraint is essentially useless
      breakpoints={[10000]}
      className={className}
      css={img}
    />
  );
}

export default Logo;
