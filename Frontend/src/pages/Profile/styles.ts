import styled from "styled-components";
import RegisterBackgroundImg from "../../assets/register-background.png";
import { shade } from "polished";

export const Container = styled.div`
  > header{
      height: 144px;
      background: #28262e;

      display: flex;
      align-items: center;

      div{
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;

          svg{
              color: #999591;
                width: 30px;
                height: 30px;
          }
      }
  }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    margin: -180px auto 0;

    form{
        width: 340px;
        margin: 80px 0;
        text-align:center;
        display: flex;
        flex-direction: column;

        h1{
            margin-bottom: 24px;
            font-size: 20px;
            text-align: left;
        }
        a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text- decoration: none;
            transition: color 0.2s;
            text-decoration: none;

            &:hover{
                color: ${shade(0.2, "#F4EDE8")};
            }
        }
        input[name=old_password]
   }

`;
export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 186px;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  button {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: none;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        width: 20px;
        heigth: 20px;
    }
    &:hover{
        background: ${shade(0.2, '#ff9000')};
    }
  }
`;
