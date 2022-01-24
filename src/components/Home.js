import React from "react";
import HeroImage from "./HeroImage";

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
import NoImage from "../images/no_image.jpg";

//Custom hook
import { useHomeFetch } from "./hooks/useHomeFetch";

//Components
import Grid from "./Grid";
import Thumb from "./Thumb";
import SearchBar from "./SearchBar";
import Button from "./Button";
import Spinner from "./Spinner";

const Home = () => {
  //const [data, setData] = useState({});
  const {
    state,
    isLoading,
    error,
    setSearchTerm,
    setIsLoadingMore,
    isLoadingMore,
  } = useHomeFetch();
  // console.log(state.results);
  // console.log(state.results[0]);

  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    <>
      {state.results[0] ? (
        <HeroImage
          imageUrl={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header="Popular Movies">
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            movieId={movie.id}
            imageUrl={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
      {isLoadingMore && <Spinner />}
      <Button callback={() => setIsLoadingMore(true)} text="Load More" />
    </>
  );
};

export default Home;
