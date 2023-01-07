import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { AddressForm } from "../AddressForm";
import { PaymentMethods } from "../PaymentMethods";
import { Card, CardHeader, Container } from "./styles";

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
        <AddressForm />
      </Card>
      <Card>
        <CardHeader iconColor="purple">
          <CurrencyDollar size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <small>Informe o endereço onde deseja receber seu pedido</small>
          </div>
        </CardHeader>
        <PaymentMethods />
      </Card>
    </Container>
  );
}
