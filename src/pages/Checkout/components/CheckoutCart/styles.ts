import styled from "styled-components";
import { BaseCard } from "../../styles";

export const Container = styled.div`
  display: grid;
  height: min-content;
  gap: 0.75rem;
  flex: 1;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Card = styled(BaseCard)`
  border-radius: 6px 36px 6px 36px;
`;

export const Confirmation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  p {
    display: flex;
    justify-content: space-between;

    small {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.25rem;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem;
  background: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.6;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
