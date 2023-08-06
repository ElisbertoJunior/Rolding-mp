import { Container } from "./styles";
import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import logo from "../../assets/LogoLibido.png";

const ContactUs = () => {
  return (
    <Container>
      <div className="container">
        <div>
          <h3>Fale conosco</h3>
          <p>
            <span>TELEFONE</span> (62) 3456-7890{" "}
          </p>
          <p>
            <span>EMAIL</span> ola@grandesite.com.br{" "}
          </p>
          <p>
            <span>SOCIAL</span>
            <div>
              <img height={32} src={insta} alt="Logo Facebook" />
              <img height={32} src={face} alt="Logo Intagram" />
            </div>{" "}
          </p>
        </div>
        <img src={logo} alt="Logo libido master" />
      </div>
    </Container>
  );
};

export default ContactUs;
