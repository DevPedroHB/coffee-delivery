import styled, { css } from "styled-components";

export const Container = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${(props) => css`
      background: ${props.theme["purple-light"]};
      border-color: ${props.theme["purple"]};

      &:hover {
        background: ${props.theme["purple-light"]};
      }
    `}
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 0;
  user-select: none;
  transition: all 0.2s;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`;
