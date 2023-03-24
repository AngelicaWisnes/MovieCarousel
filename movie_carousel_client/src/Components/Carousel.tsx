import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import 'pure-react-carousel/dist/react-carousel.es.css';

export type movieType = {
  Plot: string
  Poster: string
  Title: string
  imdbID: string
}

const MOVIE_IDS = [
  'tt0111161', 'tt0068646', 'tt0468569', 'tt0071562', 'tt0050083',
  'tt0108052', 'tt0167260', 'tt0110912', 'tt0120737', 'tt0060196',
  'tt0109830', 'tt0137523', 'tt0167261', 'tt1375666', 'tt0080684',
  'tt0133093', 'tt0099685', 'tt0073486', 'tt0114369', 'tt0047478',
];
const API_URL = `https://www.omdbapi.com/?apikey=5bc9fd01&i=`;

const Carousel = () => {
  const [movies, setMovies] = useState<movieType[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responses = await Promise.all(
          MOVIE_IDS.map(id => fetch(`${API_URL}${id}`).then(res => res.json()))
        );
        setMovies(responses);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <CarouselProvider
      visibleSlides={3}
      step={3}
      naturalSlideWidth={220}
      naturalSlideHeight={300}
      totalSlides={movies.length}
      infinite
    >
      <ButtonBack>Back</ButtonBack>
      <Slider>
        {movies.map((movie, index) => (
          <Slide key={movie.imdbID} index={index}>
            <MovieCard movie={movie} />
          </Slide>
        ))}
      </Slider>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
