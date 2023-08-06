import { breakpoints, colors } from "../../styles";
import styled from "styled-components";

type Props = {
  typePill: "gold" | "silver" | "traditional";
};

export const Container = styled.section` 
 
  margin: 3rem 0;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      width: 80%;
     
   }
}
`

export const Card = styled.div<Props>`
  height: 100%;
  width: 100%;
  border-radius: 10px;

  @media (max-width: ${breakpoints.tablet}) {
  
      
  }


  img {
    width: 100%;
    height: 80%;
    border-radius: 10px 10px 0 0;
  }

  div {
    position: relative;
    height: 20%;
    width: 100%;
    background: ${(props) => {
      if (props.typePill === "gold") {
        return colors.gold;
      } else if (props.typePill === "silver") {
        return colors.silver;
      } else {
        return colors.red;
      }
    }};
    border-radius: 0 0 10px 10px;
    margin-top: -0.3rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;

    strong {
      font-weight: bold;
      font-size: 1.5rem;
    }

    span {
      position: absolute;
      padding: .3rem;
      top: 0;
      left: 0;
    }

    button {
      height: 125px;
      width: 125px;
      border-radius: 10px;
      background: transparent;
      border: transparent;
      cursor: pointer;
    }
  }
`;
