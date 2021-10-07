import React, { useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";

function detail(props) {
  // { id, title, year, summary, poster, genres }
  const { movie } = props;
  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.rating}</p>
      <Image
        src={movie.large_cover_image}
        alt={movie.title}
        width="100%"
        height="100%"
        objectFit="contain"
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const { data, error } = await useSWR(
    `https://yts-proxy.now.sh/movie_details.json?movie_id=${params.id}`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movie: data.data.movie },
  };
}

export default detail;
