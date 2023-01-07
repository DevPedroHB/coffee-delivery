import styled from "styled-components";

const ICON_COLORS = {
  yellowDark: "yellow-dark",
  purple: "purple",
} as const;

interface CardHeaderProps {
  iconColor: keyof typeof ICON_COLORS;
}

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
`;

export const CheckoutColumn = styled.div`
  display: grid;
  height: min-content;
  gap: 0.75rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CardHeader = styled.div<CardHeaderProps>`
  display: flex;
  margin-bottom: 2rem;

  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
  }

  div {
    display: grid;

    span {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    small {
      font-size: 0.875rem;
    }
  }
`;

export const CardBody = styled.div`
  grid-template-columns: repeat(3, 1fr);
`;
