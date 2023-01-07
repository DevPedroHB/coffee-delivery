import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > span {
    flex-wrap: nowrap;
    font-weight: 700;
  }

  @media screen and (max-width: 1024px) {
    gap: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Actions = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 0;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`;
