import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { Button, Card, Confirmation, Container } from "./styles";

export default function CheckoutCart() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();
  const DELIVERY_PRICE = 3.5;
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  return (
    <Container>
      <h1>Cafés selecionados</h1>
      <Card>
        {cartItems.map((coffee) => (
          <CoffeeCartCard key={coffee.id} coffee={coffee} />
        ))}
        <Confirmation>
          <p>
            <small>Total de Itens</small>
            <span>R$ {formatMoney(cartItemsTotal)}</span>
          </p>
          <p>
            <small>Entrega</small>
            <span>R$ {formatMoney(DELIVERY_PRICE)}</span>
          </p>
          <p>
            <strong>Total</strong>
            <strong>R$ {formatMoney(cartTotal)}</strong>
          </p>
        </Confirmation>
        <Button type="submit" disabled={cartQuantity <= 0}>
          Confirmar Pedido
        </Button>
      </Card>
    </Container>
  );
}
