import { Main, Section } from "./styles";
import logo from '../../assets/LogoLibido.svg'
import MoreButton from "../MoreButton";

const Hero = () => {
  return (
    <Section>
      <Main className="container">
        <div>
          <h1>Restaure a relação <br /> Íntima com sua parceira(o)</h1>
          <span>
            Sua companheira(o) com apetite. <br /> Disposição a qualquer momento!
          </span>
          <MoreButton />
        </div>
        <img src={logo} alt="Logo Libido Master" />
      </Main>
    </Section>
  );
};

export default Hero;
