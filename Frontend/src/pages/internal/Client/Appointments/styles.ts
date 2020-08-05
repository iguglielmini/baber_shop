import styled from "styled-components";

const minDevice = 414;
const desktopWidth = 768;

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;
  padding: 32px 0px;
  position: relative;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  display: flex;
  margin: 0px auto;
  max-width: 1120px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;

  input[type="checkbox"] {
    visibility: hidden;
    position: absolute;

    &:checked ~ .nav-btns {
      transform: translateX(0vw);
    }
  }

  .btn-open-menu {
    font-size: 27px;
    cursor: pointer;
  }

  .content-logo-profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    > img {
      height: 80px;
      display: none;
    }
  }

  .nav-btns {
    top: 0px;
    left: 0px;
    width: 250px;
    height: 100vh;
    display: flex;
    padding: 16px;
    z-index: 99999;
    position: fixed;
    margin-left: auto;
    align-items: flex-end;
    flex-direction: column;
    background-color: #312e38;
    justify-content: flex-start;
    transform: translateX(-100vw);
    box-shadow: 0px 3px 6px #000000;
    transition: all 0.5s ease-in-out;

    .logo {
      margin: 30px 0px;
      padding: 0px 30px;
      margin-bottom: 60px;
    }

    a {
      width: 100%;
      color: white;
      margin: 10px 0px;
      padding: 0px 10px;
      text-decoration: none;
      transition: 0.4s all ease-in;

      &:hover {
        color: #ff9000;
      }
    }
  }

  .btn-logout {
    border: unset;
    font-size: 27px;
    margin-left: 30px;
    background: transparent;

    svg {
      color: #999591;
    }
  }

  @media only screen and (min-width: ${desktopWidth}px) {
    .btn-open-menu {
      display: none;
    }

    .content-logo-profile {
      align-items: center;

      img {
        display: block;
      }
    }

    .nav-btns {
      width: unset;
      height: unset;
      position: unset;
      transform: unset;
      box-shadow: unset;
      flex-direction: row;
      background-color: transparent;

      .logo {
        display: none;
      }
    }
  }
`;

export const Profiler = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;

  .avatar {
    width: 56px;
    height: 56px;
  }

  div {
    display: flex;
    margin-left: 16px;
    line-height: 24px;
    flex-direction: column;

    span {
      color: #f4ede8;
    }

    a {
      transition: 0.3s all ease;

      &:hover {
        opacity: 0.8;
      }
    }

    strong {
      color: #ff9000 !important;
    }
  }

  @media only screen and (min-width: ${desktopWidth}px) {
    margin-left: 80px;
  }
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px 16px;
  margin: 45px auto;
  position: relative;

  h1 {
    padding-bottom: 5px;
  }
  p {
    display: flex;
    color: #ff9000;
    margin-top: 8px;
    font-weight: 500;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      width: 1px;
      content: "";
      height: 12px;
      margin: 0 8px;
      background: #ff9000;
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 25px;
  }
`;

export const CardProvider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #3f3c47;
  border-radius: 10px;
  padding: 16px 24px;
  margin: 10px 25px 10px 0;

  .avatar {
    width: 56px;
    height: 56px;
    margin-right: 10px;
  }
  h2 {
    font-size: 14px;
    margin-right: 20px;
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
      margin: 5px 0 0 15px;
      font-size: 12px;

      svg {
        margin-right: 5px;
        color: #ff9000;
      }
    }
  }
`;
export const HistoryAppointment = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px 16px;
  margin: 45px auto;
  position: relative;

  .title-appointment {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      padding-bottom: 5px;
    }
    form {
      display: flex;
      align-items: center;
      > button {
        border: none;
        padding: 15px;
        border-radius: 10px;
        margin-left: 10px;
        background: #ff9000;
        cursor: pointer;
      }
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 25px;
  }
`;
