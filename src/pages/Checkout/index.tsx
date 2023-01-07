import CheckoutCart from "./components/CheckoutCart";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm />
      <CheckoutCart />
    </CheckoutContainer>
  );
}
