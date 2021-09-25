import React, { useState } from 'react';
import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client';

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      name
      id
      age
      username
      nationality
    }
  }
`;
const QUERY_USER_BYNAME = gql`
  query UserByname($name: String!) {
    userByName(name: $name) {
      name
      id
      age
      username
      nationality
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

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      id
      username
      nationality
    }
  }
`;
const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      name
    }
  }
`;

function DisplayData() {
  //query users
  const { data, loading, refetch } = useQuery(QUERY_ALL_USERS);

  //query movies
  const { data: moviesData } = useQuery(QUERY_ALL_MOVIES);

  //Fetch movie on Click
  const [fetchMovie, { data: movieSearchedData, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  // Fetch User on Click
  const [fetchUserByName, { data: userData, error: userError }] =
    useLazyQuery(QUERY_USER_BYNAME);
  const [searchedUser, setSearchedUser] = useState('');

  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [deleteUser] = useMutation(DELETE_USER_MUTATION);

  // States

  const [movieSearched, setMovieSearched] = useState('');

  // Create User States
  const [name, nameSet] = useState('');
  const [username, usernameSet] = useState('');
  const [age, ageSet] = useState(0);
  const [nationality, nationalitySet] = useState('');

  // Delete UserStae
  const [id, setId] = useState(0);

  if (loading) return <h1>Data is loading....</h1>;

  return (
    <div>
      <div className="createInputs">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => nameSet(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => usernameSet(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => ageSet(e.target.value)}
        />
        <input
          type="text"
          placeholder="nationality"
          onChange={(e) => nationalitySet(e.target.value.toUpperCase())}
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                input: { name, username, age: Number(age), nationality },
              },
            });
            refetch();
          }}
        >
          Create a User
        </button>
      </div>
      <div>
        <input
          type="number"
          placeholder="ID..."
          onChange={(e) => setId(e.target.value)}
        />
        <button
          onClick={() => {
            deleteUser({
              variables: {
                id: id,
              },
            });
            refetch();
          }}
        >
          Delete User by ID
        </button>
      </div>
      {data &&
        data.users.map((user) => {
          return (
            <div key={user.id}>
              <h4>Name: {user.name}</h4>
              <h4>Id: {user.id}</h4>
              <h4>Age: {user.age}</h4>
              <h4>UserName: {user.username}</h4>
              <h4>Nationality: {user.nationality}</h4>
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
      <h1>Fetch Movie on click</h1>
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
      <h1>Fetch User on Click</h1>
      <div>
        <input
          type="text"
          placeholder="Type a name"
          onChange={(event) => {
            setSearchedUser(event.target.value);
          }}
        />
        <button
          onClick={() => fetchUserByName({ variables: { name: searchedUser } })}
        >
          Fetch Data
        </button>
        {userData && (
          <div>
            <h2>UserName: {userData.userByName.name}</h2>
            <h2>Nationality of User: {userData.userByName.nationality}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayData;
