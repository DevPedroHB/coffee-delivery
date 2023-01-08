import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { Button, Buttons, Container, Footer, Info, Tags } from "./styles";

export interface CoffeeProps {
  id: number;
  imgUrl: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeToCart } = useCart();

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <Container key={coffee.id}>
      <img
        src={`/coffees/${coffee.imgUrl}`}
        alt={`Imagem café ${coffee.name}`}
      />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Info>
        <strong>{coffee.name}</strong>
        <span>{coffee.description}</span>
      </Info>
      <Footer>
        <p>
          R$ <span>{formatMoney(coffee.price)}</span>
        </p>
        <Buttons>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <Button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </Button>
        </Buttons>
      </Footer>
    </Container>
  );
}
