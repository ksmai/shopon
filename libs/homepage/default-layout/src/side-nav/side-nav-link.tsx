import React from 'react';
import NextLink from 'next/link';

import Link from './link.interface';
import './side-nav-link.module.scss';

export interface SideNavLinkProps {
  link: Link;
  onClick: () => void;
}

export function SideNavLink({ link, onClick }: SideNavLinkProps) {
  return (
    <NextLink href={link.href} passHref>
      <a href={link.href} onClick={onClick}>
        {link.name}
      </a>
    </NextLink>
  );
}

export default SideNavLink;
