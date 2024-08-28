"use client";

import { useQuery } from "@apollo/client";
import { GET_ALL_FILMS } from "@/graphql/queries";
import Link from "next/link";

export default function FilmsPage() {
  const { loading, error, data } = useQuery(GET_ALL_FILMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Star Wars Films</h1>
      <ul>
        {data.allFilms.films.map((film: any) => (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <p>Directed by: {film.director}</p>
            <p>ID: {film.id.slice(0, -2)}</p>
            <Link href={`/films/${film.id.slice(0, -2)}`}>View Details</Link>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
