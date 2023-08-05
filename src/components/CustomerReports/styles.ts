import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.section`
  width: 100vw;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 1) 16%,
    rgba(155, 155, 155, 1) 62%
  );

  padding-bottom: 2rem;



  h3 {
    font-size: 2.5rem;
    line-height: 1.6;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
  }


  .container {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      width: 80%;
     
   }

    div {
      padding: 2rem;
      border: 1px solid ${colors.white};
      border-radius: 15px;
      text-align: center;

      font-size: 1.5rem;
      line-height: 1.6;

      p {
        margin-bottom: 2rem;
      }

      strong {
        font-weight: bold;
      }
    }
  }
`;
