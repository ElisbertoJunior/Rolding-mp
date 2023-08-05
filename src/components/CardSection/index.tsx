import { Card, Container } from "./styles";
import goldenPill from "../../assets/pirula.png";
import arrow from "../../assets/seta.png"

const CardSection = () => {
  return (
    <Container>
      <div className="container">
        <Card typePill="gold">
          <img src={goldenPill} />
          <div>
            <strong>OURO - <br /><small>R$3373,37</small></strong>
            <button type="button">
              <img src={arrow} />
            </button>
          </div>
        </Card>
        <Card typePill="silver">
          <img src={goldenPill} />
          <div>
            <span>Mais vendido</span>
            <strong>PRATA - <br /><small>R$1737.99</small></strong>
            <button type="button">
              <img src={arrow} />
            </button>
          </div>
        </Card>
        <Card typePill="traditional">
          <img src={goldenPill} />
          <div>
            <strong>TRADICIONAL - <br /><small>R$373,37</small></strong>
            <button type="button">
              <img src={arrow} />
            </button>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default CardSection;
