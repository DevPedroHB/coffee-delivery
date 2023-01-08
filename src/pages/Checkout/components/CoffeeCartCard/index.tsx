import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { Actions, Button, Container, Details, Info } from "./styles";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const coffeeTotal = coffee.price * coffee.quantity;

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  return (
    <Container>
      <Info>
        <img src={`/coffees/${coffee.imgUrl}`} alt={`Imagem café Expresso`} />
        <Details>
          <span>{coffee.name}</span>
          <Actions>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
              size="small"
            />
            <Button type="button" onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </Button>
          </Actions>
        </Details>
      </Info>
      <span>R$ {formatMoney(coffeeTotal)}</span>
    </Container>
  );
}
