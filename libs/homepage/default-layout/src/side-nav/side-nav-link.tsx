import React from 'react';
import Link from 'next/link';

import './side-nav-link.module.scss';

export interface SideNavLinkProps {
  name: string;
  href: string;
  onClick: () => void;
}

export function SideNavLink({ name, href, onClick }: SideNavLinkProps) {
  return (
    <Link href={href} passHref>
      <a href={href} onClick={onClick}>
        {name}
      </a>
    </Link>
  );
}

export default SideNavLink;
