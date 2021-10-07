import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Movie.module.css";
import Link from "next/link";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div className={styles.movie}>
      <Link
        href={{
          pathname: `/movie-detail/${id}`,
        }}
      >
        <Image
          src={poster}
          alt={title}
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </Link>
      <div className={styles.movie__data}>
        <h3 className={styles.movie__title}>{title}</h3>
        <h5 className={styles.movie__year}>{year}</h5>
        <ul className={styles.movie__genres}>
          {genres.map((genre, index) => {
            return (
              <li key={index} className={styles.movie__genre}>
                {genre}
              </li>
            );
          })}
        </ul>
        <p className={styles.movie__summary}>{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
