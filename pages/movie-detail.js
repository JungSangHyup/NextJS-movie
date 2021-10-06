import React from "react";
import Movie from "../components/Movie";
import { useRouter } from "next/router";

function detail() {
  const { query } = useRouter();
  return (
    <div>
      <p>year={query.year}</p>
      <p> title={query.title}</p>
    </div>
  );
}

export default detail;
