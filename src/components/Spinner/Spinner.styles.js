import styled from "styled-components";

export const Spinner = styled.div`
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--medGrey);
  border-radius: 50%;
  height: 55px;
  width: 55px;
  margin: 20px auto;
  animation: animateSpin 0.8s linear infinite;

  @keyframes animateSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
