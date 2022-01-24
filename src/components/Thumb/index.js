import React from "react";
import { Wrapper } from "./Thumb.styles";
const Thumb = ({ movieId, imageUrl }) => (
  <Wrapper src={imageUrl} alt="movie-thumb" />
);

export default Thumb;
