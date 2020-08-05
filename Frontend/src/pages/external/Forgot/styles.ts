import styled from "styled-components";
import ImageBackground from "../../../assets/sign-in-background.png";

export const Background = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${ImageBackground});
`;
