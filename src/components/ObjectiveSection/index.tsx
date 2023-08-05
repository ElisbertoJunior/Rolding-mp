import {
  Container,
  Content,
  DescriptionCard,
  RedContent,
  SmallCard,
  WhiteContent,
} from "./styles";
import coupleImage from "../../assets/FotoCasal.svg";
import coupleImageTwo from "../../assets/FotoCasal2.svg";
import lightImg from "../../assets/lampada.svg"

const ObjectiveSection = () => {
  return (
    <Container>
      <WhiteContent>
        <Content>
          <img src={coupleImage} alt="Foto de casal feliz" />
          <DescriptionCard>
            <strong>Restaurando a paixão em casamentos</strong>
            <span>
              não é incomum que os casais experimentem um declínio na intimidade
              sexual.
            </span>
          </DescriptionCard>
        </Content>
      </WhiteContent>
      <RedContent>
        <SmallCard>
          <div>
            <strong>Revivendo a intimidade</strong>
            <span>
              Muitas mulheres casadas desejam uma conexão mais profunda e uma
              vida amorosa mais satisfatória
            </span>
          </div>
          <img height={250} src={coupleImageTwo} />
        </SmallCard>
        <SmallCard direction="row-reverse">
          <div>
            <strong>Nosso Objetivo</strong>
            <span>
              Fornecemos um produto que garante o retorno de uma vida íntima com
              sua companheira, compre agora e desfrute de todos beneficos
            </span>
          </div>
          <img height={250} src={lightImg} />
        </SmallCard>
      </RedContent>
    </Container>
  );
};

export default ObjectiveSection;
