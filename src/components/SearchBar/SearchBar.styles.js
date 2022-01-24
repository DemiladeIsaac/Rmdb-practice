import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 20px;
  display: flex;
  align-items: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  border-radius: 40px;
  position:relative;
  background:var(--medGrey);

   img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

    input {
    width: 95%;
    padding: 15px;
    background:transparent;
    color:var(--white);
    border:0;
    font-size:var(--fontBig);
    padding-left:60px;

    :focus {
      outline: none;
    }
`;
