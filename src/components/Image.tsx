import React from 'react';

import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const StyledImage = styled.image(() => ({
  width: '100',
  height: '100',
}));

function Image() {
  const theme = useTheme();

  return (
    <StyledImage>
      <img src={theme.image.image01} alt="수아는 귀여워" />
    </StyledImage>
  );
}

export default Image;
