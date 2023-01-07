import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeeImg from "../../../../assets/coffee-introduction.png";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Container, Content, InfoGrid, Title } from "./styles";

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
        <InfoGrid>
          <InfoWithIcon
            icon={<ShoppingCart weight="fill" size={16} />}
            text="Compra simples e segura"
            bgIconColor="yellow"
          />
          <InfoWithIcon
            icon={<Package weight="fill" size={16} />}
            text="Embalagem mantém o café intacto"
            bgIconColor="baseText"
          />
          <InfoWithIcon
            icon={<Timer weight="fill" size={16} />}
            text="Entrega rápida e rastreada"
            bgIconColor="yellowDark"
          />
          <InfoWithIcon
            icon={<Coffee weight="fill" size={16} />}
            text="O café chega fresquinho até você"
            bgIconColor="purple"
          />
        </InfoGrid>
      </Content>
      <img src={coffeeImg} alt="" />
    </Container>
  );
}
