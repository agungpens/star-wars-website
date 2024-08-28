"use client";

import { useQuery } from "@apollo/client";
import { GET_ALL_PEOPLE } from "@/graphql/queries";
import Link from "next/link";

export default function PeoplePage() {
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {data.allPeople.people.map((person: any) => (
          <li key={person.id}>
            <h2>{person.name}</h2>
            {/* Link to character detail page */}
            <Link href={`/peoples/${person.id.slice(0, -1)}`}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
