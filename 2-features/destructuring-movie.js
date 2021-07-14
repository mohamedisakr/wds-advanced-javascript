import { movieList } from "./data.js";

const firstMovie = movieList[0];

const { id, adult, original_title, vote_average, vote_count } = firstMovie;
const condensedMovie = { id, adult, original_title, vote_average, vote_count };
console.log(condensedMovie);

const sameFirstMovie = { ...firstMovie };
console.log(sameFirstMovie);
