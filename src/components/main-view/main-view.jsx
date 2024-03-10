import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://dry-ridge-94435-1154c64a056a.herokuapp.com/movies")
      .then((response) => { 
        console.log(response);
        return response.json()
      })
      .then((moviesFromApi) => { // Прямое использование полученных данных, если они соответствуют структуре, описанной в вашем примере
        const formattedMovies = moviesFromApi.map((movie) => { // Используем movie для обозначения каждого элемента в массиве
          return {
            _id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            Genre: {
              Name: movie.Genre.Name,
              Description: movie.Genre.Description,
            },
            Director: {
              Name: movie.Director.Name,
              Bio: movie.Director.Bio,
              Birth: movie.Director.Birth,
            },
            ImagePath: movie.ImagePath || 'default-placeholder-image-url.jpg',
          };
        });
        setMovies(formattedMovies); // Обновляем состояние с отформатированными данными
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []);

    if (movies.length === 0) return <div>The list is empty!</div>;

    return (
        <div>
            {selectedMovie ? (
                <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
            ) : (
                movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => setSelectedMovie(movie)} />
                ))
            )}
        </div>
    );
};