import styled from "styled-components";

const INFO_COLORS = {
  yellow: "yellow",
  yellowDark: "yellow-dark",
  purple: "purple",
} as const;

interface InfoProps {
  iconColor: keyof typeof INFO_COLORS;
}

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark"]};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 2.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1024px) {
    img {
      max-width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;

    img {
      max-width: 100%;
    }
  }
`;

export const Card = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${(props) => props.theme["background"]};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;
