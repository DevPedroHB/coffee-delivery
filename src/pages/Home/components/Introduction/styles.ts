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

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

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

export const Content = styled.div`
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

export const InfoGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
