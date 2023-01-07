import styled, { css } from "styled-components";

interface ContainerProps {
  size: "medium" | "small";
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 6px;

  span {
    background: none;
    border: none;
    color: ${(props) => props.theme["base-title"]};
    line-height: 0;
  }

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme["purple"]};
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
