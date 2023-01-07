import { Trash } from "phosphor-react";
import expressoImg from "../../../../assets/expresso.png";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Actions, Button, Container, Details, Info } from "./styles";

export function CoffeeCartCard() {
  return (
    <Container>
      <Info>
        <img src={expressoImg} alt={`Imagem café Expresso`} />
        <Details>
          <span>Expresso Tradicional</span>
          <Actions>
            <QuantityInput size="small" quantity={3} />
            <Button type="button">
              <Trash size={16} />
              Remover
            </Button>
          </Actions>
        </Details>
      </Info>
      <span>R$ 9,90</span>
    </Container>
  );
}
