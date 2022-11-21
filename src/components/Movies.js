import React from "react";
import { movies } from "../data";

function Movies() {
  
  const allMovies = movies.map(movie => {

    console.log(movie)

    return (
      <div key={movie.title}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <div>Genres:
          <ul>
            {movie.genres.map(genre => {
              return(
                <li key={genre}>{genre}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  })
  
  return (
  <div>
    <h1>Movies Page</h1>
    {allMovies}
  </div>
  )
}

export default Movies;
