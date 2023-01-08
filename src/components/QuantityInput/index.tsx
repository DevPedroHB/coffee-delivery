import { Minus, Plus } from "phosphor-react";
import { Container, IconWrapper } from "./styles";

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({
  size = "medium",
  quantity,
  onIncrease,
  onDecrease,
}: QuantityInputProps) {
  return (
    <Container size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <span>{quantity}</span>
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </Container>
  );
}
