import MoreButton from "../MoreButton";
import { Container } from "./styles";

const LastCall = () => {
  return (
    <Container>
     <div className="container">
     <h3>Desconto imperdivel</h3>
      <div>
      <p>
        Você chegou ao final da página, e entendemos que podemos ter dúvidas ou
        hesitações. Mas queremos lhe oferecer uma oportunidade! Uma oferta
        única: 25% de desconto + Frete Grátis. Atenção, essa oferta é válida por
        tempo limitado! Clique no botão e garanta 25% de desconto. Oportunidade
        de elevar seu prazer e felicidade ao máximo! <br /> 🔥 Aproveite AGORA! 🔥
      </p>
      </div>
      <MoreButton /> 
     </div>
    </Container>
  );
};

export default LastCall;
