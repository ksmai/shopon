import React from 'react';
import { Grommet } from 'grommet';
import { ThemeType } from 'grommet/themes';

export interface GrommetThemeProps {
  children: React.ReactNode;
}

const Colors = {
  LightCoral: '#f38181',
  CameoPink: '#e8b4bc',
  MiddlePurple: '#d282a6',
  Eggplant: '#6e4555',
  BlackCoffee: '#3a3238',
};

const theme: ThemeType = {
  global: {
    colors: {
      brand: Colors.LightCoral,
    },
  },
};

export function GrommetTheme({ children }: GrommetThemeProps) {
  return (
    <Grommet plain theme={theme}>
      {children}
    </Grommet>
  );
}

export default GrommetTheme;
