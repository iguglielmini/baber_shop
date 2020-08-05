import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  color: #f4ede8;
  color: #666360;
  position: relative;
  border-radius: 10px;
  align-items: center;
  background-color: #232129;
  border: 2px solid transparent;

  &.error {
    border-color: #FF0000;
  }

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: unset;
    color: #FFFFFF;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
