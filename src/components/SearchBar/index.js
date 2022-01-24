import React from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import searchIcon from "../../images/search-icon.svg";
import { useEffect, useState } from "react/cjs/react.development";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    setSearchTerm(state);
  }, [setSearchTerm, state]);
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search movies"
          onChange={(e) => setState(e.target.value)}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
