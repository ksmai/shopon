import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LogoProps {
  className?: string;
}

const LogoWrapper = styled.div`
  position: relative;
`

export function Logo({ className }: LogoProps) {
  return (
    <LogoWrapper className={className}>
      <Image
        src="/shopon-logo-long.png"
        alt="Shopon"
        width={2046}
        height={657}
      />
    </LogoWrapper>
  );
}

export default Logo;
