import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  img {
    width: 5.309rem;
    height: 2.5rem;
  }
`;

export const Action = styled.div`
  display: flex;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};
    border-radius: 6px;
    padding: 0.5rem;
    font-size: 0.875rem;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["purple"]};
    }
  }

  button {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme["yellow-light"]};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }

    span {
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -0.522rem;
      right: -0.5rem;
      background: ${(props) => props.theme["yellow-dark"]};
      color: ${(props) => props.theme["white"]};
      border-radius: 50%;
      font-weight: 700;
      font-size: 0.75rem;
    }
  }
`;
