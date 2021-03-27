import React from 'react';
import Img from 'react-optimized-image';

import './site-logo.module.scss';
import LogoSrc from '@shopon/shared/assets/shopon-logo-long.png';

export interface SiteLogoProps {
  className?: string;
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Img
      src={LogoSrc}
      alt="Shopon"
      sizes={[128, 256]}
      webp
      className={className}
    />
  );
}

export default SiteLogo;
