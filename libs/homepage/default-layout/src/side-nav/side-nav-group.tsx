import React, { useState } from 'react';
import { Box, Button, Text } from 'grommet';
import { FormUp, FormDown } from 'grommet-icons';

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
    <Box flex={false}>
      <Button onClick={() => setOpen(!open)} plain>
        {() => (
          <Box direction="row" justify="between" pad={{ vertical: 'medium' }}>
            <Text>{group.name}</Text>
            {open ? <FormUp /> : <FormDown />}
          </Box>
        )}
      </Button>
      {open && (
        <Box
          pad={{ left: 'large' }}
          border={{ side: 'left' }}
          margin={{ bottom: 'large' }}
          animation={{ type: 'slideDown', duration: 250 }}
        >
          {group.children.map((child) => {
            if ('children' in child) {
              return (
                <SideNavGroup
                  key={child.name}
                  group={child}
                  onClick={onClick}
                />
              );
            }
            return (
              <SideNavLink key={child.name} link={child} onClick={onClick} />
            );
          })}
        </Box>
      )}
    </Box>
  );
}

export default SideNavGroup;
