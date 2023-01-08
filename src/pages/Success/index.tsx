import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import successImg from "../../assets/success-illustration.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { OrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/PaymentMethods";
import { Card, Container } from "./styles";

interface LocationType {
  state: OrderData;
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

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
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
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
