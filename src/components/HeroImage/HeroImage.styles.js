import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  width: 100%;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;
  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;

  h1 {
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--fontMed);
    width: 60%;
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
      width: 100%;
    }
  }
`;
