import { movieList } from "./movieSlice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log("MovieList: ", data);
      return data;
    };
    try {
      const movieLists = await fetchData();
    dispatch(
        movieList.movies({
            list:movieLists
        })
    );
      
    } catch (error) {}
  };
};
