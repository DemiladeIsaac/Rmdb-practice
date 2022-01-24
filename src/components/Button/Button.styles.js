import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Load = styled.button`
  padding: 20px;
  border-radius: 24px;
  width: 300px;
  background-color: var(--darkGrey);
  color: var(--white);
  margin: 20px 0;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
