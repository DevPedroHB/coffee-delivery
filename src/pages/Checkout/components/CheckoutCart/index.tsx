import { CoffeeCartCard } from "../CoffeeCartCard";
import { Button, Card, Confirmation, Container } from "./styles";

export default function CheckoutCart() {
  return (
    <Container>
      <h1>Cafés selecionados</h1>
      <Card>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <Confirmation>
          <p>
            <small>Total de Itens</small>
            <span>R$ 29,70</span>
          </p>
          <p>
            <small>Entrega</small>
            <span>R$ 3,50</span>
          </p>
          <p>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </p>
        </Confirmation>
        <Button type="submit">Confirmar Pedido</Button>
      </Card>
    </Container>
  );
}
