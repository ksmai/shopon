import React from 'react';
import { render, screen } from '@testing-library/react';

import CustomApp from './custom-app';

describe('CustomApp', () => {
  interface ComponentProps {
    propText: string;
  }

  let componentText: string;
  let propText: string;
  let Component: React.FunctionComponent<ComponentProps>;

  beforeEach(() => {
    componentText = 'Component Text';
    propText = 'Prop Text';
    Component = (props: ComponentProps) => (
      <div>
        <span>{componentText}</span>
        <span>{props.propText}</span>
      </div>
    );
    render(<CustomApp Component={Component} pageProps={{ propText }} />);
  });

  it('should render Component', () => {
    screen.getByText(componentText);
  });

  it('should pass pageProps to Component', () => {
    screen.getByText(propText);
  });
});
