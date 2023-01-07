import styled from "styled-components";

export const BaseCard = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 2rem;
  border-radius: 6px;
`;

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
