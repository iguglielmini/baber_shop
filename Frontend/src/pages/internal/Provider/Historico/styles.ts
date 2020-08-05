import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      display flex;
      
      margin: 0px auto;
      max-width: 1120px;
      align-items: center;
      justify-content: space-between;

      h1{
        color: #ff9000;
      }

      svg {
        width: 30px;
        height: 30px;
        color: #999591;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;
  margin: -28px auto 0px;

  form {
    margin: 0px;
    display: flex;
    max-width: 450px;
    text-align: center;
    flex-direction: row;

    button {
      color: #f4ede8;
      border: none;
      display: block;
      margin-left: 5px;
      padding: 0px 20px;
      border-radius: 4px;
      background: #ff9000;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, "#ff9000")};
      }
    }
  }
`;

export const HistoryContent = styled.div`
  margin: 32px 60px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  .hist-atendimento {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    > div {
      display: flex;
      margin-top: 15px;
      margin-right: 15px;
      position: relative;
      padding: 16px 24px;
      margin-bottom: 15px;
      border-radius: 10px;
      background: #3e3b47;
      align-items: center;

      &::before {
        top: 10%;
        left: 0px;
        width: 1px;
        height: 80%;
        content: "";
        position: absolute;
        background: #ff9000;
      }

      img {
        width: 80px;
        heigth: 80px;
        border-radius: 50%;
      }

      strong {
        color: #ffffff;
        margin-left: 14px;
        margin-right: 24px;
      }

      > div {
        display: flex;
        align-items: center;
        margin-left: auto;
        text-align: right;
        color: #999591;

        svg {
          color: #ff9000;
          margin-right: 5px;
        }

        .date-time-client{
          display: flex;
          align-items: flex-end;
          flex-direction: column;
          text-align: right;

          .hour{
            font-size: 25px;
          }

          .date{
            font-size: 12px;
          }
        }
        
      }

    }
  }
`;
