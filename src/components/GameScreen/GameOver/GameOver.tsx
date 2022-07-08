import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setState } from '../../../redux/reducer/gameReducer';
import { RootState } from '../../../redux/store';
import calAverage from '../../../utils/calAverage';
import calCorectRate from '../../../utils/calCorrectRate';
import StyledButton from '../../StyledButton';

export default function GameOver() {
  const mTimer = useSelector((state: RootState) => state.game.mTimer);
  const sTimer = useSelector((state: RootState) => state.game.sTimer);
  const msTimer = useSelector((state: RootState) => state.game.msTimer);
  const incorrectAnswers = useSelector((state: RootState) => state.game.incorrectAnswers);
  const correctAnswers = useSelector((state: RootState) => state.game.correctAnswers);
  const dispatch = useDispatch();
  return (
    <FlexContainer>
      <p style={{fontSize:"50px"}}>結果</p><br/>
      <ResultList>
      <li>
        経過時間:<span style={{fontWeight: "bold",color: "#007acc"}}>{mTimer<10 ? "0"+mTimer :mTimer}:{sTimer<10 ? "0"+sTimer:sTimer}:{msTimer<10? "0"+msTimer:msTimer}</span>
      </li>
      <li>
        正しく打ったキーの数: <span>{correctAnswers}</span>
      </li>
      <li>
        平均キータイプ数: <span>{calAverage(correctAnswers,mTimer*60+sTimer+msTimer/1000)}</span>回/秒
      </li>
      <li>
        ミスタイプ数: <span>{incorrectAnswers}</span>
      </li>
      <li>
        正確率: <span>{calCorectRate(correctAnswers,correctAnswers+incorrectAnswers)}</span>%
      </li>
    </ResultList>
    <StyledButton onClick={()=>dispatch(setState("home"))}>タイトルに戻る</StyledButton>
    </FlexContainer>
  )
}


const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ResultList = styled.ul`
  flex: 1;
  width: 80%;
  li {
    font-size: 20px;

    span {
      font-weight: bold;
      color: #007acc;
    }
  }
`;
