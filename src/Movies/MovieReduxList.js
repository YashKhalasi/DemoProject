import React from "react";
import { useSelector } from 'react-redux';
import TableofMovies from "./TableofMovies";

const MovieReduxList = () => {

  const MoviesList = useSelector(state => state.movies.list.results) ;
  console.log("Movieslist from reduc..",MoviesList);

  let content = <p>Found no movies.</p>;

  if (MoviesList.length > 0) {
    content = <TableofMovies lists={MoviesList}/>;
  }
  return (
    <>
      <h1>Movies</h1>
      {content}
      {/* <TableofMovies lists={movies}/> */}
    </>
  );
};
export default MovieReduxList;
