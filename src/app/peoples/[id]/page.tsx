"use client";

import { useQuery } from '@apollo/client';
import { GET_CHARACTER_DETAIL } from '@/graphql/queries';

interface CharacterDetailPageProps {
  params: { id: string };
}

export default function CharacterDetailPage({ params }: CharacterDetailPageProps) {
  const { id } = params;

  const { loading, error, data } = useQuery(GET_CHARACTER_DETAIL, {
    variables: { id },
    skip: !id, // Skip query if ID is not yet available
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const character = data.person;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Gender: {character.gender}</p>
      <p>Birth Year: {character.birthYear}</p>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
    </div>
  );
}
