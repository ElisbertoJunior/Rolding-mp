
import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.section`
  
  background: ${colors.white};

  .container {
    padding: 3rem;
    text-align: center;
    flex-direction: column;

    display: flex;
    align-items: center;
    gap:2.5rem;

    h3 {
      font-size: 2.8rem;
      font-weight: bold;
      
    }

    p {
      width: 50rem;
      font-size: 1.8rem;
      line-height: 1.6;

      @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
      }
    }
  }
`