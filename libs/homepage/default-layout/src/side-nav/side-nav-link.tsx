import React from 'react';
import NextLink from 'next/link';
import { Box, Anchor } from 'grommet';

import Link from './link.interface';
import './side-nav-link.module.scss';

export interface SideNavLinkProps {
  link: Link;
  onClick: () => void;
}

export function SideNavLink({ link, onClick }: SideNavLinkProps) {
  return (
    <Box flex={false} pad={{ vertical: 'medium' }}>
      <NextLink href={link.href} passHref>
        <Anchor
          color="dark-2"
          weight="normal"
          href={link.href}
          onClick={onClick}
        >
          {link.name}
        </Anchor>
      </NextLink>
    </Box>
  );
}

export default SideNavLink;
