import { MapPin, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/coffee-delivery.svg";
import { Action, HeaderContainer } from "./styles";

export function Header() {
  const [countCartItems, setCountCartItems] = useState(5);
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="Logotipo Coffee Delivery" />
      </Link>
      <Action>
        <span>
          <MapPin size={22} weight="fill" />
          Indaiatuba, SP
        </span>
        <Link to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {countCartItems != 0 && <span>{countCartItems}</span>}
        </Link>
      </Action>
    </HeaderContainer>
  );
}
