import styled from "styled-components";
import { Cross } from '@styled-icons/entypo';
import { device } from "../../../helper/deviceSize";

export const Container = styled.div<{ data?: any }>`
  width: 1000px;
  height: 700px;
  border: 5px solid white;
  border-radius: 10px;
  -webkit-box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
  box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
  display: flex;
  position: relative;

  ${({ data }) => data ? ({
  'flex-direction': 'column',
  'align-items': 'center'
  }) : ({
  'align-items': 'cente',
  'justify-content': 'center'
  })}

  @media only screen and (${device.laptop}) {
    width: 90%;
    height: 140vh;
  }
`;

export const TextContainer = styled.div`
  width: 80%;
  height: 10%;
  border-bottom: 3px dotted yellow;
  font-family: 'Press Start 2P';
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Text = styled.span`
  font-family: 'Press Start 2P';
  color: yellow;
  width: 70%;
  display: flex;
  justify-content: flex-end;
  font-size: 0.9rem;
  text-align: justify;

  @media only screen and (${device.laptop}) {
    width: 60%;
    font-size: 0.8rem;
  }
`;

export const LineTitle = styled.span`
  font-family: 'Press Start 2P';
  color: yellow;
  width: 30%;
  
  @media only screen and (${device.laptop}) {
    width: 20%;
    font-size: 0.8rem;
  }
`;

export const TextContainer1 = styled.div`
  width: 80%;
  height: 55%;
  border-bottom: 3px dotted yellow;
  position: relative;
  font-family: 'Press Start 2P';
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ExitIcon = styled(Cross)`
  color: red;
  position: absolute;
  width: 60px;
  height: 60px;
  right: 0;
  cursor: pointer;
`;