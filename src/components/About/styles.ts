import styled from "styled-components";
import banner from '../../assets/bannerSobre.svg'
import { breakpoints } from "../../styles";

export const AboutSection = styled.section`
  width: 100vw;
  padding-bottom: 2.5rem;
  background-image: url(${banner});
  background-size: cover;
  @media(max-width: ${breakpoints.tablet}) {
      background-position: center;
      object-fit: contain;
    }

  .container {
    max-width: 43.75rem;
    padding-top: 7.5rem;
    text-align: center;

    @media(max-width: ${breakpoints.tablet}) {
      width: 80vw;
    }

    h2 {
      font-size: 2.281rem;
      margin-bottom: 2.5rem;
    }

    p {
      font-size: 1.6rem;
     
    }
    
  }
  

`