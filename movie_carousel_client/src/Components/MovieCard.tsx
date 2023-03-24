import { useRef } from "react";
import styles from '../styles/MovieCard.module.css';
import { movieType } from "./Carousel";

interface MovieProps {
  movie: movieType
}

const MovieCard = ({movie}: MovieProps) => {
  const hoverRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    if (hoverRef.current) hoverRef.current.style.opacity = '1';
  };

  const handleMouseOut = () => {
    if (hoverRef.current) hoverRef.current.style.opacity = '0';
  };

  return (
    <div className={styles.container}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className={styles.image}
      />
      <div
        className={styles['hover-content']}
        ref={hoverRef}
      >
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
      </div>
      <div
        className={styles.overlay}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
    </div>
  );
};

export default MovieCard;