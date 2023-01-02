import React from 'react';

import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const StyledImage = styled.div(() => ({
  width: '100px',
  height: '100px',
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
