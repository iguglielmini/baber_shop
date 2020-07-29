import styled from 'styled-components';
import SignInBackgroundImg from '../../assets/sign-in-background.png';
import { shade } from 'polished';


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;

    form{
        width: 340px;
        margin: 80px 0;
        text-align:center;

        h1{
            margin-bottom: 24px;
        }
        a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text- decoration: none;
            transition: color 0.2s;
            text-decoration: none;

            &:hover{
                color: ${shade(0.2, '#F4EDE8')};
            }
        }
   }
   > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text- decoration: none;
        transition: color 0.2s;
        text-decoration: none;
        display: flex;
        align-items: center;

        svg{
            margin-right: 16px;
        }

        &:hover{
            color: ${shade(0.2, '#ff9000')};
        }
   }

`;
export const Background = styled.div`
    flex: 1;
    background: url(${SignInBackgroundImg}) no-repeat center;
    background-size: cover;
`;