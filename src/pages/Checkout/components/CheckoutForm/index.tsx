import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Input } from "../../../../components/Input";
import {
  Card,
  CardHeader,
  Container,
  FormContainer,
  PaymentOptions,
} from "./styles";

export function CheckoutForm() {
  return (
    <Container>
      <h1>Complete seu pedido</h1>
      <Card>
        <CardHeader iconColor="yellowDark">
          <MapPinLine size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <small>Informe o endereço onde deseja receber seu pedido</small>
          </div>
        </CardHeader>
        <FormContainer>
          <Input placeholder="CEP" type="number" className="cep" />
          <Input placeholder="Rua" className="street" />
          <Input placeholder="Número" type="number" />
          <Input placeholder="Complemento" className="complement" />
          <Input placeholder="Bairro" />
          <Input placeholder="Cidade" />
          <Input placeholder="UF" className="uf" />
        </FormContainer>
      </Card>
      <Card>
        <CardHeader iconColor="purple">
          <CurrencyDollar size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <small>Informe o endereço onde deseja receber seu pedido</small>
          </div>
        </CardHeader>
        <PaymentOptions>
          <button type="button">
            <CreditCard size={16} />
            Cartão de Crédito
          </button>
          <button type="button">
            <Bank size={16} />
            Cartão de Débito
          </button>
          <button type="button">
            <Money size={16} />
            Dinheiro
          </button>
        </PaymentOptions>
      </Card>
    </Container>
  );
}
