import React from 'react';

import NavItem from './nav-item.interface';
import SideNavGroup from './side-nav-group';
import SideNavLink from './side-nav-link';
import './side-nav-list.module.scss';

export interface SideNavListProps {
  navItems: NavItem[];
  onClick: () => void;
}

export function SideNavList({ navItems, onClick }: SideNavListProps) {
  return (
    <>
      {navItems.map((navItem) => {
        if ('children' in navItem) {
          return (
            <SideNavGroup
              key={navItem.name}
              group={navItem}
              onClick={onClick}
            />
          );
        }
        return (
          <SideNavLink key={navItem.name} link={navItem} onClick={onClick} />
        );
      })}
      ;
    </>
  );
}

export default SideNavList;
