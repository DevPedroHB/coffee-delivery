import styled from "styled-components";
import { BaseCard } from "../../styles";

const ICON_COLORS = {
  yellowDark: "yellow-dark",
  purple: "purple",
} as const;

interface CardHeaderProps {
  iconColor: keyof typeof ICON_COLORS;
}

export const Container = styled.div`
  display: grid;
  height: min-content;
  gap: 0.75rem;
  flex: 2;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Card = styled(BaseCard)``;

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

export const FormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: max-content;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  .uf {
    max-width: 3.75rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto 1fr;

    .cep {
      grid-column: span 2;
      max-width: max-content;
    }

    .street {
      grid-column: span 2;
    }

    .complement {
      grid-column: span 1;
    }

    .uf {
      max-width: max-content;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    .cep {
      grid-column: span 1;
    }

    .street {
      grid-column: span 1;
    }

    .complement {
      grid-column: span 1;
    }
  }
`;

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme["base-button"]};
    padding: 1rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    text-transform: uppercase;
    line-height: 0;

    svg {
      color: ${(props) => props.theme["purple"]};
      margin-right: 0.75rem;
    }

    &:hover {
      background: ${(props) => props.theme["base-hover"]};
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
