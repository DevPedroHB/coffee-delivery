import styled from "styled-components";

const ITEM_COLORS = {
  yellow: "yellow",
  yellowDark: "yellow-dark",
  baseText: "base-text",
  purple: "purple",
} as const;

interface ItemsProps {
  itemColor: keyof typeof ITEM_COLORS;
}

export const IntroductionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  /* filter: blur(80px); */

  img {
    max-width: 100%;
    max-height: auto;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 0 2rem 0;

    img {
      margin: 0;
    }
  }
`;

export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  @media screen and (max-width: 768px) {
    gap: 2.06rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-title"]};
    font-weight: 800;
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.li<ItemsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme[ITEM_COLORS[props.itemColor]]};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${(props) => props.theme["background"]};
    }
  }
`;
