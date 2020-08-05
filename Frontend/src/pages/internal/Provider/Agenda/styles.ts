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
      align-items: center;
      justify-content: space-between;
      max-width: 1120px;

      h1{
          color: #ff9000;
      }

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
max-width: 1120px;
display: flex;
align-items: flex-start;
justify-content: space-evenly;
margin: 0 auto;

.cad-agenda{

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
}
.agenda-semana{
  margin: 80px 0px;
  width: 40%;
  h1{
    font-size: 20px;
    text-align: left;
    margin-bottom: 24px;
  }
  .horarios-dia{
    margin: 20px 0;

    .title-agenda{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      border-bottom: 1px solid #3e3b47;
      > strong {
        color: #999591;
        display: block;
        font-size: 20px;
        line-height: 26px;
        margin-bottom: 10px;
      }
      > button{
        background: transparent;
        color: #ff9000;
        border: none;
        margin-bottom: 10px;
      }

    }
   
    > div{
      display: flex;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      .atendimento {
        display: flex;
        align-items: center;
        margin: 10px 15px;
        svg{
          margin-right: 5px;
          color: #ff9000;
        }
      }
    }
}
`;
