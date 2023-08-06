import { Logo, Main, Section } from "./styles";
import logo from '../../assets/LogoLibido.png'
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
        <Logo src={logo} alt="Logo Libido Master" />
      </Main>
    </Section>
  );
};

export default Hero;
