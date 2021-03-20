import React from 'react';
import styled from '@emotion/styled';

import { DefaultLayout } from '@shopon/homepage/shared';

const StyledPage = styled.div`
  .page {
  }
`;

function Index() {
  return (
    <DefaultLayout>
      <StyledPage></StyledPage>
    </DefaultLayout>
  );
}

export default Index;
