import styled from "styled-components";

export const Container = styled.input`
  height: 2.625rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
  transition: all 0.2s;
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
