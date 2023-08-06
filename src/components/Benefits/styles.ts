import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.section`
  padding-bottom: 4rem;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(191, 27, 44, 1) 0%,
    rgba(205, 205, 205, 1) 100%
  );

  h2 {
    text-align: center;
    padding: 4rem 0;
    font-size: 2.281rem;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      width: 80%;
    }
  }
`;
export const Card = styled.div`
  background: transparent;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  img {
    width: 100%;
    border-radius: 8px;
  }

  div {
    border: 1px solid ${colors.gray};

    padding: 1rem;
    border-radius: 8px;
    min-height: 13rem;
    text-align: center;

    span {
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
    }
  }
`;
