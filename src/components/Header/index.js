import React from "react";
import { Content, Wrapper, LogoImg, TmdbImg } from "./Header.styles";
import logo from "../../images/react-movie-logo.svg";
import tmdb from "../../images/tmdb_logo.svg";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={logo} alt="logo" />
      <TmdbImg src={tmdb} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
