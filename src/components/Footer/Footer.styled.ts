import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.lightBlack};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.yellow};
`;