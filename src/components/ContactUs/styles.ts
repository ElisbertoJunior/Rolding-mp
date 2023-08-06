import { breakpoints, colors } from './../../styles/index';

import styled from "styled-components";

export const Container = styled.section`
  padding: 10rem 0;
  
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
    justify-content: space-between;
    align-items: center;
    padding-left: 8rem;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        padding-left: 0;

        > img {
          padding-top: 2rem;
          width: 250px;
        }
    }

    

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;

      h3 {
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 1.6;
      }
    }

    p {
      display: flex;
      align-items: center;
      gap: 2rem;
      font-size: 1.5rem;
    }

    span {
      color: ${colors.red};
      font-weight: bold;
    }
  }
`