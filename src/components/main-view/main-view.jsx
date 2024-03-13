import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    const url = "https://dry-ridge-94435-1154c64a056a.herokuapp.com/movies";
    fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((moviesFromApi) => {
      const formattedMovies = moviesFromApi.map((movie) => {
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
          ImagePath: movie.ImagePath,
        };
      });
      setMovies(formattedMovies);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
  }, [token]);

  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);
        }} />
        <div>or</div>
        <SignupView />
      </>
    );
  }  

  if (movies.length === 0) return <div>The list is empty!</div>;

  return (
    <div>
      <button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }}
      >
        Logout
      </button>
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

export default MainView;
