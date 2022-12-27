import React, { useState, memo } from 'react';
import styled from '@emotion/styled';

interface IStyledButton {
  active: boolean;
}

const Container = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  background: 'pink',
  height: '100vh',
}));

const StyledButton = styled.button<IStyledButton>(({ theme, active }) => ({
  padding: '20px',
  background: active ? theme.color.black : theme.color.white,
}));
function Button() {
  const [active, setAcitve] = useState(false);
  return (
    <Container>
      <StyledButton active={active} onClick={() => setAcitve((prev) => !prev)}>
        버튼
      </StyledButton>
    </Container>
  );
}

export default memo(Button);
