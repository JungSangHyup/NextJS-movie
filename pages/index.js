import React from "react";
import styles from "../styles/Home.module.css";
import Movie from "../components/Movie";

function Home(props) {
  const { isLoading, movies } = props;
  return (
    <section className={styles.container}>
      {isLoading ? (
        <div className={styles.oader}>
          <span className={styles.loader__text}>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export async function getStaticProps(context) {
  const data = await fetch(
    "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
  ).then((res) => {
    return res.json();
  });
  //yts-proxy.now.sh/movie_details.json?movie_id=5000

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movies: data.data.movies, isLoading: false },
    revalidate: 30,
  };
}

export default Home;
