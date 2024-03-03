import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      "Genre": {
          "Name": "Action",
          "Description": "A genre characterized by energetic sequences, physical feats, and a fast-paced plot involving confrontations and escapes."
      },
      "Director": {
          "Name": "Christopher Nolan",
          "Bio": "New bio here.",
          "Birth": "1970-01-01T00:00:00.000Z"
      },
      "_id": "65cbd70a5870d2801b2a3685",
      "Title": "The Dark Knight",
      "Description": "Batman faces his toughest challenge yet as he goes head-to-head with the Joker, a villain who seeks to create chaos and bring Gotham to its knees.",
      "ImagePath": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      "Featured": true
  },
  {
      "Genre": {
          "Name": "Comedy",
          "Description": "A genre that aims to entertain and amuse, often through humor that highlights the eccentricities of characters and situations."
      },
      "Director": {
          "Name": "Wes Anderson",
          "Bio": "Known for his distinctive visual and narrative style, Andersons films are meticulously crafted, featuring quirky characters and unique storytelling elements.",
          "Birth": "1969-01-01T00:00:00.000Z"
      },
      "_id": "65cbd70a5870d2801b2a368c",
      "Title": "The Grand Budapest Hotel",
      "Description": "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
      "ImagePath": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      "Featured": true
  },
  {
      "Genre": {
          "Name": "History",
          "Description": "A genre that depicts historical events and figures, often focusing on dramatic, pivotal moments in human history."
      },
      "Director": {
          "Name": "Steven Spielberg",
          "Bio": "Spielberg is known for his ability to tackle sensitive subjects with empathy and depth, making history accessible and engaging for a wide audience.",
          "Birth": "1946-01-01T00:00:00.000Z"
      },
      "_id": "65cbd70a5870d2801b2a368a",
      "Title": "Schindlers List",
      "Description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      "ImagePath": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX190_CR0,2,190,281_.jpg",
      "Featured": true
  },
  {
      "Genre": {
          "Name": "Science Fiction",
          "Description": "Deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life."
      },
      "Director": {
          "Name": "Christopher Nolan",
          "Bio": "New bio here.",
          "Birth": "1970-01-01T00:00:00.000Z"
      },
      "_id": "65cbd70a5870d2801b2a3688",
      "Title": "Interstellar",
      "Description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "ImagePath": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      "Featured": true
  },
  {
      "Genre": {
          "Name": "Adventure",
          "Description": "Focuses on exciting stories filled with new experiences or exotic locales, often involving the hero embarking on a quest."
      },
      "Director": {
          "Name": "Steven Spielberg",
          "Bio": "An iconic filmmaker recognized for his prowess in crafting engaging narratives and pioneering special effects in blockbuster films.",
          "Birth": "1946-01-01T00:00:00.000Z"
      },
      "_id": "65cbd70a5870d2801b2a3689",
      "Title": "Jurassic Park",
      "Description": "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
      "ImagePath": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_QL75_UX190_CR0,2,190,281_.jpg",
      "Featured": true
  },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

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