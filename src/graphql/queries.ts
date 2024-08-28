// src/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_ALL_FILMS = gql`
  query GetAllFilms {
    allFilms {
      films {
        id
        title
        director
        releaseDate
        episodeID
      }
    }
  }
`;

export const GET_ALL_PEOPLE = gql`
  query GetAllPeople {
    allPeople {
      people {
        name
        id
      }
    }
  }
`;

export const GET_FILM_DETAIL = gql`
  query GetFilmDetail($id: ID!) {
    film(id: $id) {
      title
      director
      releaseDate
      episodeID
    }
  }
`;


export const GET_CHARACTER_DETAIL = gql`
  query GetCharacterDetail($id: ID!) {
    person(id: $id) {
      name
      gender
      birthYear
      height
      mass
    }
  }
`;

export const SEARCH_FILMS = gql`
  query SearchFilms($searchTerm: String!) {
    searchFilms(searchTerm: $searchTerm) {
      id
      title
      director
      releaseDate
      episodeID
    }
  }
`;