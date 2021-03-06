import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100px;
  font-family: 'Roboto', sans-serif;
  background: ${({ theme }) => theme.lightBlack};
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  position: relative;
  left: 5%;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${({ theme }) => theme.yellow};
  font-family: 'Press Start 2P';
  cursor: pointer;
`;

export const RouterButtonContainer = styled.div`
  position: relative;
  right: 5%;
  width: 15%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RouterButton = styled.div<{ btnColor: string }>`
  color: ${({ btnColor }) => btnColor};
  font-size: 22px;
  font-family: 'Press Start 2P';
  cursor: pointer;
  border-bottom: 4px solid transparent ;

  &:hover {
      border-bottom: 4px solid ${({ theme }) => theme.white};
  }
`;

export const HamburgerContainer = styled.div`
  width: 50px;
  height: 50px;
`;

export const HamburgerLine = styled(motion.div)`
  position: relative;
  top: 20%;
  width: 100%;
  height: 5px;
  background: ${({ theme }) => theme.yellow};
  margin: 5px 0;
`;

export const HamburgerMenuContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: calc(100vh - 100px);
  width: 100vw;
  background: ${({ theme }) => theme.black};
  z-index: 10;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;