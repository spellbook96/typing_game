import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;
  height: 30px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 30px;
  color: #fff;
  background-color: #0e639c;
  border-width: 0;
  outline: 0;

  &:hover {
    background-color: #007acc;
  }
`;

export default StyledButton;