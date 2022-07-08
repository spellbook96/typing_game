import { FC } from "react";
import styled from "styled-components";


export const ScreenFrame = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: #fff;

  box-sizing: border-box;
  width: 700px;
  height: 500px;
  padding: 30px;
  margin: 0 auto;
  background-color: #1e1e1e;
  border: 8px solid #16825d;
  box-shadow: 5px 5px 3px #000;
`;

export default ScreenFrame;
