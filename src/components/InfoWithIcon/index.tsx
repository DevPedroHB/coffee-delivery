import { ReactNode } from "react";
import { Container, INFO_COLORS } from "./styles";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  bgIconColor: keyof typeof INFO_COLORS;
}

export function InfoWithIcon({ icon, text, bgIconColor }: InfoWithIconProps) {
  return (
    <Container bgIconColor={bgIconColor}>
      <div>{icon}</div>
      {typeof text === "string" ? <span>{text}</span> : text}
    </Container>
  );
}
