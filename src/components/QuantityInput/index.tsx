import { Minus, Plus } from "phosphor-react";
import { Container, IconWrapper } from "./styles";

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
}

export function QuantityInput({
  size = "medium",
  quantity,
}: QuantityInputProps) {
  return (
    <Container size={size}>
      <IconWrapper disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <span>{quantity}</span>
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </Container>
  );
}
