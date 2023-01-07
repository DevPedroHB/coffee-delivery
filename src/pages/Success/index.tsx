import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import successImg from "../../assets/success-illustration.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { Card, Container } from "./styles";

export function Success() {
  return (
    <Container>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Card>
          <InfoWithIcon
            icon={<MapPin weight="fill" size={16} />}
            text={
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </span>
            }
            bgIconColor="purple"
          />
          <InfoWithIcon
            icon={<Timer weight="fill" size={16} />}
            text={
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            }
            bgIconColor="yellow"
          />
          <InfoWithIcon
            icon={<CurrencyDollar size={16} />}
            text={
              <span>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </span>
            }
            bgIconColor="yellowDark"
          />
        </Card>
      </div>
      <img src={successImg} alt="Imagem de sucesso" />
    </Container>
  );
}
