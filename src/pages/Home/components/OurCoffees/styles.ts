import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 0;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.375rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  row-gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
