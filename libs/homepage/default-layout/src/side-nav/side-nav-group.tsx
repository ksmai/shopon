import React, { useState } from 'react';

import LinkGroup from './link-group.interface';
import SideNavLink from './side-nav-link';
import './side-nav-group.module.scss';

export interface SideNavGroupProps {
  group: LinkGroup;
  onClick: () => void;
}

export function SideNavGroup({ group, onClick }: SideNavGroupProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span onClick={() => setOpen(!open)}>{group.name}</span>
      {open &&
        group.children.map((child) => {
          if ('children' in child) {
            return (
              <SideNavGroup key={child.name} group={child} onClick={onClick} />
            );
          }
          return (
            <SideNavLink key={child.name} link={child} onClick={onClick} />
          );
        })}
    </div>
  );
}

export default SideNavGroup;
