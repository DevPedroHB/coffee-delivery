import styled from "styled-components";

export const CafesCard = styled.div`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: -2.5rem 0 0 0;
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const CardTags = styled.div`
  margin: 0.75rem 0 1rem 0;
  display: flex;
  gap: 0.25rem;

  span {
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    text-transform: uppercase;
    padding: 0.25rem;
    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: 700;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;

  strong {
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  span {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
    margin-bottom: 2rem;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;

    span {
      font-family: "Baloo 2", sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }
`;

export const FooterButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    gap: 0.25rem;
    padding: 0.5rem;

    svg {
      color: ${(props) => props.theme["purple"]};
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }

  button {
    display: flex;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["purple-dark"]};
    padding: 0.5rem;
    color: ${(props) => props.theme["base-card"]};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${(props) => props.theme["purple"]};
    }
  }
`;
