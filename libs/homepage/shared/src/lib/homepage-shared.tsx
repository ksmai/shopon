import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HomepageSharedProps {}

const StyledHomepageShared = styled.div`
  color: pink;
`;

export function HomepageShared(props: HomepageSharedProps) {
  return (
    <StyledHomepageShared>
      <h1>Welcome to homepage-shared!</h1>
    </StyledHomepageShared>
  );
}

export default HomepageShared;
