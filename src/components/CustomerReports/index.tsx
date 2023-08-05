import { Container } from "./styles";

const CustomerReports = () => {
  return (
    <Container>
       <h3>Relato de clientes:</h3>
      <div className="container">
        <div>
          <p>
            "Nossa vida íntima estava estagnada. Foi a melhor decisão que já
            tomei. Desde que começou a usar o produto, nossa paixão foi reacesa,
            e estamos aproveitando momentos maravilhosos juntos novamente."
          </p>
          <strong>Jorge Castro</strong>
        </div>
        <div>
          <p>
            "Agora, nos sentimos mais conectados e apaixonados do que nunca.
            Recomendo esse produto a todos os casais que desejam recuperar sua
            vida amorosa."
          </p>
          <strong>Marcelo Araujo</strong>
        </div>
        <div>
          <p>
            "Fiquei surpreso com o quão eficaz esse produto é! Ele
            trouxe de volta a vitalidade e o desejo que estávamos no início de
            nosso casamento. Agora, estamos vivendo momentos íntimos incríveis."
          </p>
          <strong>Silvia Borges</strong>
        </div>
      </div>
    </Container>
  );
};

export default CustomerReports;
