import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  incrementCorrectAnswers,
  incrementIncorrectAnswers,
  setIsCorrect,
  setState,
  setTimer,
} from "../../../redux/reducer/gameReducer";
import { AppDispatch, RootState } from "../../../redux/store";
import randomIntArray from "../../../utils/randomIntArray";
import StyledButton from "../../StyledButton";
import questionSet from "./questionSet";
import useClock from "./useClock";

export default function Playing() {
  const correctCount = useSelector(
    (state: RootState) => state.game.correctAnswers
  );
  const isCorrect = useSelector((state: RootState) => state.game.isCorrect);
  const MAX_AMOUNT = 10;
  const MAX_AMOUNT_OF_QUESTION_SET = 41;
  const [indexOfQuestionSet, setIndexOfQuestionSet] = useState([] as number[]);
  const {mTime,sTime,msTime} = useClock();
  // console.log(indexOfQuestionSet)
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setIndexOfQuestionSet(randomIntArray(MAX_AMOUNT_OF_QUESTION_SET,MAX_AMOUNT));
  }, []);
  useEffect(() => {
    const handleInputKey = (e: KeyboardEvent) => {
      // console.log(e.key);
      // console.log(questionSet[indexOfQuestionSet[correctCount]]);
      if (e.key === questionSet[indexOfQuestionSet[correctCount]]) {
        dispatch(incrementCorrectAnswers());
        dispatch(setIsCorrect(true));
      } else {
        dispatch(incrementIncorrectAnswers());
        dispatch(setIsCorrect(false))
      }
    };
    window.addEventListener("keypress", handleInputKey);
    if (correctCount === MAX_AMOUNT) {
      dispatch(setTimer([mTime,sTime,msTime]));
      dispatch(setState("gameOver"));
    }
    return () => {
      window.removeEventListener("keypress", handleInputKey);
    };
  }, [correctCount,indexOfQuestionSet]);
  return (
    <FlexContainer>
      <span style={{fontWeight: "bold",color: "#007acc"}}>経過時間：{mTime<10 ? "0"+mTime :mTime}:{sTime<10 ? "0"+sTime:sTime}:{msTime<10? "0"+msTime:msTime}</span>

      <p style={{ fontSize: "20px" }}>
        表示された数字または記号のキーを押してください
      </p>
      {isCorrect ? <p style={{ flex: 1, fontSize: "90px" }} id={"current-question"}>{questionSet[indexOfQuestionSet[correctCount]]}</p>
      : <p style={{ flex: 1, fontSize: "90px" ,color:"red"}} id={"current-question-false"}>{questionSet[indexOfQuestionSet[correctCount]]}</p>}
      
      <Footer>
        <FooterP>問題数: {MAX_AMOUNT}</FooterP>
        <FooterP>正解数: {correctCount}</FooterP>
        <StyledButton onClick={() => dispatch(setState("home"))}>
          タイトルに戻る
        </StyledButton>
      </Footer>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  justify-self: flex-end;
  width: 100%;
`;

const FooterP = styled.p`
  display: inline-block;
  margin: 0.2em;
`;
