import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    font-size: 0.875rem;
    grid-column: span 3;
    color: ${(props) => props.theme["base-error"]};
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    > p {
      grid-column: span 2;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;

    > p {
      grid-column: span 1;
    }
  }
`;
