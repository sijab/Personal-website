import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  font-family: 'Roboto', sans-serif;
  background: #1B1B1B;
  z-index: 2;
`;

export const ImgContainer = styled.div`
  position: fixed;
  right: 0;
  overflow: hidden;
  width: 25vw;
  z-index: -1;
`;

export const Image = styled.img`
  width: 100%;
`;

export const LogoContainer = styled.div`
  width: 20%;
  height: 100px;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: yellow;
  font-family: 'Press Start 2P';
`;

export const RouterButtonContainer = styled.div`
  position: absolute;
  right: 0;
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const RouterButton = styled.div<{btnColor: string}>`
  color: ${({btnColor}) => btnColor};
  font-size: 22px;
  font-family: 'Press Start 2P';
  cursor: pointer;
  border-bottom: 4px solid transparent ;

  &:hover {
      border-bottom: 4px solid white ;
  }
`;