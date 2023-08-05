import { colors, breakpoints } from "./../../styles/index";
import styled from "styled-components";

type Props = {
  direction?: string;
};

export const Container = styled.section`
  width: 100vw;
  background: ${colors.white};

  display: flex;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    padding: 2rem;
  }
`;
export const RedContent = styled.div`
  background: ${colors.red};
  width: 100%;
  height: 100%;
  padding: 3rem 0;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100vw;
    height: 100%;
    padding: 0;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const WhiteContent = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3.125rem;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: end;

    padding: 0;
  }
`;
export const Content = styled.div`
  position: relative;

  img {
    position: relative;
  }

  div {
    z-index: 1;
    position: absolute;
    margin-top: 28.125rem;
    margin-left: 5.625rem;
    top: 0;
  }
`;

export const DescriptionCard = styled.div`
  padding: 0.5rem;
  width: 18.188rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  background: ${colors.red};
  text-align: center;

  strong {
    font-weight: bold;
    font-size: 1.188rem;
  }

  span {
    font-size: 0.9rem;
  }
`;

export const SmallCard = styled.div<Props>`
  padding-left: 5rem;
  display: flex;
  width: 40rem;
  align-items: center;
  flex-direction: ${(props) => props.direction || ""};

  @media (max-width: ${breakpoints.tablet}) {
    width: 30rem;
    padding: 2rem 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      font-weight: bold;
      font-size: 1.938rem;

      @media (max-width: ${breakpoints.tablet}) {
        font-weight: bold;
        font-size: 1.55rem;
      }
    }

    span {
      font-size: 1rem;
    }
  }
`;
