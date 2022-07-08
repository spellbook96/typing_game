import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { initialize, setState } from '../../../redux/reducer/gameReducer';
import { AppDispatch } from '../../../redux/store';
import StyledButton from '../../StyledButton';

export default function Home() {
  const dispatch : AppDispatch = useDispatch();
  dispatch(initialize())
  return (
    <StyledDiv>
      <br/>
      <h1>NS-TYPING</h1>
      <br/>
      <p>数字・記号専用のタイピング練習ゲーム</p>
      <StyledButton onClick={()=>dispatch(setState("playing"))}>プレイする</StyledButton>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  h1 {
    font-family: impact, sans-serif;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
  }

  p {
    font-family: "Hiragino Kaku Gothic ProN", sans-serif;
    font-size: 20px;
  }
`;