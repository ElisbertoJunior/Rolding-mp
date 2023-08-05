import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.section`
  width: 100vw;
  padding: 7.5rem 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 1) 16%,
    rgba(155, 155, 155, 1) 62%
  );

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: ${breakpoints.tablet}) {
      
      flex-direction: column;
      width: 80%;
     
   }

    > img {
      border-radius: 8px;
      @media (max-width: ${breakpoints.tablet}) {
        width: 90%;
     }
    }

    div {
      width: 40%;
      height: 31.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: ${colors.white};

      @media (max-width: ${breakpoints.tablet}) {
        width: 90vw;
      }

      text-align: center;
      padding: 0 1rem;
      border-radius: 30px;

      h3 {
        font-size: 2.225rem;
        font-weight: bold;
        line-height: 1.6;
      }

      p {
        font-size: 1.3rem;
        text-align: center;
        padding: 0 4rem;
        font-weight: 100;
      }
    }
  }
`;
