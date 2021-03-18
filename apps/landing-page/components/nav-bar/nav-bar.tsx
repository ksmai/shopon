import React from 'react';
import styled from '@emotion/styled';

import Logo from '../shared/logo';

/* eslint-disable-next-line */
export interface NavBarProps {}

const Nav = styled.nav`
  padding: 20px 20px;
  display: flex;
  align-items: center;
`;

const NavLogo = styled(Logo)`
  width: 128px;
`;

export function NavBar() {
  return (
    <Nav>
      <NavLogo />
    </Nav>
  );
}

export default NavBar;
