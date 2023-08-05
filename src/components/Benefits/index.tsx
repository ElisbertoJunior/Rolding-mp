import { Card, Container } from "./styles";
import girl from "../../assets/mulher-de-biquine.png";
import couple from "../../assets/casal.png"
import girlImg from "../../assets/mulher-cama.png"

const Benefits = () => {
  return (
    <Container>
      <h2>Benefícios De Uso</h2>
      <div className="container">
        <Card>
          <img  src={girl} />
          <div>
            <span>
              Estimulante de libido eficaz aumenta significativamente o desejo
              íntimo em homens e mulheres.
            </span>
          </div>
        </Card>
        <Card>
          <img  src={couple} />
          <div>
            <span>
              Aumenta a energia, resistência e disposição física, proporcionando
              uma experiência mais satisfatória.
            </span>
          </div>
        </Card>
        <Card>
          <img  src={girlImg} />
          <div>
            <span>
              Faz as mulheres se sentirem mais seguras e satisfeitas consigo
              mesmas e com seu relacionamento. Melhora no bem-estar emocional
              pode se refletir em outras áreas da vida,
            </span>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Benefits;
