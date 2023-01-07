import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeeImg from "../../../../assets/coffee-introduction.png";
import { Container, Content, Item, Items, Title } from "./styles";

export function Introduction() {
  return (
    <Container id="introduction">
      <Content>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <Items>
          <Item itemColor="yellow">
            <div>
              <ShoppingCart weight="fill" size={16} />
            </div>
            <span>Compra simples e segura</span>
          </Item>
          <Item itemColor="baseText">
            <div>
              <Package weight="fill" size={16} />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </Item>
          <Item itemColor="yellowDark">
            <div>
              <Timer weight="fill" size={16} />
            </div>
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item itemColor="purple">
            <div>
              <Coffee weight="fill" size={16} />
            </div>
            <span>O café chega fresquinho até você</span>
          </Item>
        </Items>
      </Content>
      <img src={coffeeImg} alt="" />
    </Container>
  );
}
