import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  width: 100%;
  height: 56px;
  color: #312e38;
  padding: 0 16px;
  font-weight: 500;
  margin-top: 16px;
  background-color: #ff9000;
  border-radius: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, "#ff9000")};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
    background-color: #ff9000;
  }
`;
