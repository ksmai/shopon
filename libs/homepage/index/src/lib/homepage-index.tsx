import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HomepageIndexProps {}

const StyledHomepageIndex = styled.div`
  color: pink;
`;

export function HomepageIndex(props: HomepageIndexProps) {
  return (
    <StyledHomepageIndex>
      <h1>Welcome to homepage-index!</h1>
    </StyledHomepageIndex>
  );
}

export default HomepageIndex;
