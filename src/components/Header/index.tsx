import { MapPin, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import logoImg from "../../assets/coffee-delivery.svg";
import { Action, HeaderContainer } from "./styles";

export function Header() {
  const [countCartItems, setCountCartItems] = useState(3);
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Logotipo Coffee Delivery" />
      <Action>
        <span>
          <MapPin size={22} weight="fill" />
          Indaiatuba, SP
        </span>
        <button>
          <ShoppingCart size={22} weight="fill" />
          {countCartItems != 0 && <span>{countCartItems}</span>}
        </button>
      </Action>
    </HeaderContainer>
  );
}
