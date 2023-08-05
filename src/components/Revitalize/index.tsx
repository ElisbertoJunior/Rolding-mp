import { Container } from "./styles";
import doctor from "../../assets/Medica.svg";
import MoreButton from "../MoreButton";

const Revitalize = () => {
  return (
    <Container>
      <div className="container">
        <img src={doctor} alt="Imagem de uma medica atendendo." />
        <div>
          <h3>Revitalize sua vida amorosa</h3>
          <p>
            Experimente os benefícios, entre eles a <strong>maior satisfação</strong> e uma
            <strong>conexão</strong> mais <strong>forte</strong> com seu <strong>parceiro</strong>. Solução <strong>segura</strong>, <strong>eficaz</strong> e
            fortalecedora para suas necessidades íntimas. Resolve os <strong>problemas</strong>,
            como <strong>diminuição do libido</strong>, desequilíbrio hormonal, <strong>baixa
            autoconfiança</strong>.
          </p>
          <MoreButton/>
        </div>
      </div>
    </Container>
  );
  
};

export default Revitalize;
