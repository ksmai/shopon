import React from 'react';
import Img from 'react-optimized-image';

import styles from './site-logo.module.scss';
import LogoSrc from '@shopon/shared/assets/shopon-logo-long.png';

export interface SiteLogoProps {
  className?: string;
}

export function SiteLogo({ className, ...props }: SiteLogoProps) {
  return (
    <Img
      {...props}
      src={LogoSrc}
      alt="Shopon"
      sizes={[128, 256]}
      webp
      className={`${styles['site-logo']} ${className}`}
    />
  );
}

export default SiteLogo;
