import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { Container, Content } from "./styles";

interface PaymentMethodInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
  label: string;
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <Container>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <Content>
          {icon}
          {label}
        </Content>
      </label>
    </Container>
  );
});
