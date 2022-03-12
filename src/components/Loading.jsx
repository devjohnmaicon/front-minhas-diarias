import React from "react";

import styled from "styled-components";

export const Loading = () => {
  return (
    <Container>
      <Box>Loading...</Box>
    </Container>
  );
};

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
`;

export const Box = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`;
