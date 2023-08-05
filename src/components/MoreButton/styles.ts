import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Button = styled.a`
  background: ${colors.red};
  border: ${colors.red};
  color: ${colors.white};
  font-size: 1.5rem;
  height: 4.375rem;
  width: 25rem;
  border-radius: 2.5rem;
  margin: 0 auto;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    height: 3.375rem;
    width: 17rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.85;
  }
`;
