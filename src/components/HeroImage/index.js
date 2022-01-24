import React from "react";
import { Content, Wrapper, Text } from "../HeroImage/HeroImage.styles";

const HeroImage = ({ title, imageUrl, text }) => (
  <Wrapper image={imageUrl}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
