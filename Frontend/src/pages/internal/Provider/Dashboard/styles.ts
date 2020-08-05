import { shade } from "polished";
import styled from "styled-components";

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
    background-color: #312E38;
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
      transition: .4s all ease-in;

      &:hover{
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
      transition: .3s all ease;

      &:hover{
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
  display: flex;
  padding: 0px 16px;
  margin: 64px auto;
  position: relative;

  input[type="checkbox"]#open-calendar {
    position: absolute;
    visibility: hidden;

    &:checked ~ .calendar {
      transform: translate(0%, -50%);
      box-shadow: 0px 3px 6px #000000;
    }
  }

  @media only screen and (min-width: ${desktopWidth}px) {
    padding: unset;
    max-width: 1120px;
  }
`;

export const Schedule = styled.div`
  flex: 1;

  h1 {
    font-size: 36px;
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

  @media only screen and (min-width: ${desktopWidth}px) {
    margin-right: 120px;
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }
  div {
    display: flex;
    margin-top: 16px;
    position: relative;
    padding: 16px 24px;
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
      color: #FFFFFF;
      margin-left: 24px;
    }

    span {
      display: flex;
      color: #999591;
      margin-left: auto;
      aling-items: center;
    }

    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    display: block;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #3e3b47;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    display: flex;
    color: #f4ede8;
    margin-left: auto;
    align-items: center;

    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    display: flex;
    margin-left: 24px;
    padding: 16px 24px;
    background: #3e3b47;
    align-items: center;
    border-radius: 10px;

    img {
      width: 56px;
      heigth: 56px;
      border-radius: 50%;
    }

    strong {
      color: #FFFFFF;
      margin-left: 24px;
    }
  }
`;

export const Calendar = styled.aside`
  top: 50%;
  zoom: 73%;
  right: 0px;
  width: 380px;
  padding: 16px;
  position: fixed;
  min-height: 400px;
  background-color: #312E38;
  transition: all 0.5s ease-in-out;
  transform: translate(100%, -50%);

  .open-calendar {
    top: 50%;
    right: 100%;
    width: 55px;
    height: 55px;
    display: flex;
    position: fixed;
    cursor: pointer;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #ff9000;
    border-top-left-radius: 100%;
    transform: translate(0, -50%);
    border-bottom-left-radius: 100%;

    svg {
      font-size: 24px;
    }
  }

  .DayPicker {
    background: #28262e;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    margin: 16px;
    border-spacing: 8px;
    border-collapse: separate;
  }
  .DayPicker-Caption {
    > div {
      color: #FFFFFF;
      font-weight: 500;
      font-size: 1.15em;
    }
  }
  .DayPicker-Day {
    width: 40px;
    height: 40px;
    color: #FFFFFF;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, "#3e3b47")};
  }

  .DayPicker-Day--available {
    color: #FFFFFF !important;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--today {
    cursor: pointer;
    font-weight: normal;
    color: #ff9000 !important;
    border: 1px solid #ff9000 !important;
  }

  .DayPicker-Day--selected {
    border-radius: 10px;
    color: #232129 !important;
    background: #ff9000 !important;
  }

  @media only screen and (min-width: ${desktopWidth}px) {
    zoom: unset;
    position: unset;
    transform: unset;
    box-shadow: unset;

    .open-calendar {
      display: none;
    }

    .DayPicker {
      top: 40px;
      position: sticky;
    }
  }
`;