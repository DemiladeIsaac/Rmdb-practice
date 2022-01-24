import React from "react";
import { Wrapper, Load } from "./Button.styles";

const Button = ({ callback, text }) => (
  <Wrapper>
    <Load onClick={callback}>{text}</Load>
  </Wrapper>
);

export default Button;
