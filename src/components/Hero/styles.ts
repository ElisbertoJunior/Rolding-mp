import styled from "styled-components";
import { breakpoints } from "../../styles";
//import { colors } from "../../styles";

export const Section = styled.section`
  height: 90vh;
  width: 100vw;
  padding-top: 6.25rem;
  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 2rem;
   
  }
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 1) 16%,
    rgba(155, 155, 155, 1) 62%
  );
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
   
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: 3.5rem;
      text-align: center;
      font-weight: bold;
    }

    span {
      text-align: center;
      font-size: 1.281rem;
      margin: 7.5rem 0;

      @media (max-width: ${breakpoints.tablet}) {
        margin: 2rem 0;
      }
    }

    @media (max-width: ${breakpoints.tablet}) {
      img {
        height: 2px;
      }
     
   }
  }
`;
