import React, { useCallback, useEffect, useState } from "react";
import TableofMovies from "./TableofMovies";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log("MovieList: ", data);
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      console.log(" transformedMovies MovieList: ", transformedMovies);
    } catch (error) {}
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <TableofMovies lists={movies}/>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <>
      <h1>Movies</h1>
      {content}
      {/* <TableofMovies lists={movies}/> */}
    </>
  );
};
export default MovieList;
