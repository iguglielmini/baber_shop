import { shade } from "polished";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    max-width: 700px;
    align-items: center;
    place-content: center;
    flex-direction: column;

    form {
        width: 340px;
        margin: 80px 0px;
        text-align:center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #cbbdb4;
            margin-top: 24px;
            display: inline-block;
            text-decoration: none;
            text- decoration: none;
            transition: color 0.2s;

            &:hover{
                color: ${shade(0.2, "#8f8b8a")};
            }
        }
   }

   > a {
        display: flex;
        color: #ff9000;
        margin-top: 24px;
        align-items: center;
        text-decoration: none;
        transition: color 0.2s;
        text- decoration: none;

        svg {
            margin-right: 16px;
        }

        &:hover{
            color: ${shade(0.2, "#ff9000")};
        }
   }
`;

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        outline: unset;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100vh;
        position: relative;
    }

    body {
        color: #FFFFFF;
        background: #312E38;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-size: 16px;
        font-family: 'Roboto Slab', serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        color: #FFF
        font-weight: 500;
    }

    button {
        cursor:pointer;
    }

    a {
        text-decoration: none;
    }

    .responsive-img {
        height: auto;
        display: block;
        max-width: 100%
    }
`;
