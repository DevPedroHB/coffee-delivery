import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/coffee-delivery.svg";
import { useCart } from "../../hooks/useCart";
import { Action, HeaderContainer } from "./styles";

export function Header() {
  const { cartQuantity } = useCart();

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
          {cartQuantity != 0 && <span>{cartQuantity}</span>}
        </Link>
      </Action>
    </HeaderContainer>
  );
}
