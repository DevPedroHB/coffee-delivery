import styled from "styled-components";

export const INFO_COLORS = {
  yellow: "yellow",
  yellowDark: "yellow-dark",
  baseText: "base-text",
  purple: "purple",
} as const;

interface ContainerProps {
  bgIconColor: keyof typeof INFO_COLORS;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;
    min-height: 2rem;
    background: ${(props) => props.theme[INFO_COLORS[props.bgIconColor]]};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${(props) => props.theme["background"]};
    }
  }
`;
