import React, { useState } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      name
      id
      age
      username
    }
  }
`;
const QUERY_ALL_MOVIES = gql`
  query getAllmovies {
    movies {
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`;

function DisplayData() {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  const { data: moviesData } = useQuery(QUERY_ALL_MOVIES);

  const [movieSearched, setMovieSearched] = useState('');

  const [fetchMovie, { data: movieSearchedData, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  if (loading) return <h1>Data is loading....</h1>;

  return (
    <div>
      {data &&
        data.users.map((user) => {
          return (
            <div key={user.id}>
              <h4>Name: {user.name}</h4>
              <h4>Age: {user.age}</h4>
              <h4>UserName: {user.username}</h4>
            </div>
          );
        })}
      <h1>List of movie</h1>
      {moviesData &&
        moviesData.movies.map((movie, idx) => {
          return (
            <div key={idx}>
              <h4>Name: {movie.name}</h4>
              <h4>Year: {movie.yearOfPublication}</h4>
            </div>
          );
        })}
      <h1>Fetch on click</h1>
      <div>
        <input
          type="text"
          placeholder="Interstellar..."
          onChange={(event) => {
            setMovieSearched(event.target.value);
          }}
        />
        <button
          onClick={() => fetchMovie({ variables: { name: movieSearched } })}
        >
          Fetch Data
        </button>

        <div>
          {movieSearchedData && (
            <div>
              <h1>MovieName: {movieSearchedData.movie.name}</h1>
              <h1>
                Year Of Publication: {movieSearchedData.movie.yearOfPublication}
              </h1>
            </div>
          )}
          {movieError && <h1> There was an error fetching the data</h1>}
        </div>
      </div>
    </div>
  );
}

export default DisplayData;
