import React from 'react';
import { AppProps } from 'next/app';
import { render, screen } from '@testing-library/react';

import CustomApp from './custom-app';

describe('CustomApp', () => {
  interface ComponentProps {
    propText: string;
  }

  let componentText: string;
  let propText: string;
  let Component: React.FunctionComponent<ComponentProps>;
  let router: AppProps['router'];

  beforeEach(() => {
    componentText = 'Component Text';
    propText = 'Prop Text';
    Component = (props: ComponentProps) => (
      <div>
        <span>{componentText}</span>
        <span>{props.propText}</span>
      </div>
    );
    router = (jest.fn() as unknown) as AppProps['router'];
    render(
      <CustomApp
        Component={(Component as unknown) as AppProps['Component']}
        pageProps={{ propText }}
        router={router}
      />
    );
  });

  it('should render Component', () => {
    screen.getByText(componentText);
  });

  it('should pass pageProps to Component', () => {
    screen.getByText(propText);
  });
});
