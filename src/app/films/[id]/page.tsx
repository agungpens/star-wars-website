"use client";

import { useQuery } from "@apollo/client";
import { GET_FILM_DETAIL } from "@/graphql/queries";

interface FilmDetailPageProps {
  params: { id: string };
}

export default function FilmDetailPage({ params }: FilmDetailPageProps) {
  const { id } = params;

  const { loading, error, data } = useQuery(GET_FILM_DETAIL, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error.message}</p>;
  const film = data.film;
  return (
    <div>
      <h1>{film.title}</h1>
      <p>{film.director}</p>
      <p>{film.producer}</p>
      <p>{film.release_date}</p>
    </div>
  );
}
