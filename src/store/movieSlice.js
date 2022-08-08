import { createSlice } from "@reduxjs/toolkit";

const intialMovieState={
    list:[],
}

const movieSlice = createSlice({
    name: "movie",
    initialState: intialMovieState,
    reducers: {
        movies(state,action){
            console.log(state,"Movie..",action);
            state.list=action.payload.list;
        }
    }
})

export const movieList = movieSlice.actions;

export default movieSlice.reducer;