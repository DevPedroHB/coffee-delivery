import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { formatMoney } from "../../../../utils/formatMoney";
import { Button, Buttons, Container, Footer, Info, Tags } from "./styles";

interface CoffeeCardProps {
  id: number;
  imgUrl: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export function CoffeeCard({
  id,
  imgUrl,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  return (
    <Container key={id}>
      <img src={`/coffees/${imgUrl}`} alt={`Imagem café ${name}`} />
      <Tags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Info>
        <strong>{name}</strong>
        <span>{description}</span>
      </Info>
      <Footer>
        <p>
          R$ <span>{formatMoney(price)}</span>
        </p>
        <Buttons>
          <QuantityInput quantity={3} />
          <Button>
            <ShoppingCart weight="fill" size={22} />
          </Button>
        </Buttons>
      </Footer>
    </Container>
  );
}
