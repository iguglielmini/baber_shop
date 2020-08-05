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
      margin: 0px auto;
      max-width: 1120px;

      svg {
        color: #999591;
        width: 30px;
        height: 30px;
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
    margin: -180px auto 0px;

    form{
        width: 340px;
        display: flex;
        margin: 80px 0px;
        text-align:center;
        flex-direction: column;

        h1{
            font-size: 20px;
            text-align: left;
            margin-bottom: 24px;
        }
        a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            text- decoration: none;

            &:hover{
                color: ${shade(0.2, "#F4EDE8")};
            }
        }
    }
`;

export const AvatarInput = styled.div`
    width: 186px;
    position: relative;
    align-self: center;
    margin-bottom: 32px;

    .avatar {
        width: 186px;
        height: 186px;
    }

    button {
    right: 0px;
    width: 48px;
    bottom: 0px;
    height: 48px;
    border: none;
    display: flex;
    border-radius: 50%;
    position: absolute;
    align-items: center;
    background: #ff9000;
    justify-content: center;
    transition: background-color 0.2s;

    svg {
        width: 20px;
        heigth: 20px;
    }

    &:hover {
        background: ${shade(0.2, "#ff9000")};
    }
    }
`;
