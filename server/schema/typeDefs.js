const { gql } = require("apollo-server");

const typeDefs = gql` 
    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
    #  testType woith resolver in the User
    type Car {
        id: Int!
        typ: String!
        brand: String!
        hp: Int!
        available: Boolean!
    }
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
        favoriteCars: [Car]
    }
    

    type Query {
        users: UsersResult
        user(id: ID!): User!
        userByName(name: String!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality 
    }
    input UpdateUsernameInput {
        id:ID!
        newUsername: String!
    }

    type Mutation {
         createUser(input: CreateUserInput!): User
         updateUsername(input: UpdateUsernameInput!): User 
         deleteUser(id: ID!): User
    }
    
    enum Nationality {
        HUNGARY
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }
    type UsersSuccesfulResult {
        users: [User!]!
    }
    type UsersErrorResult {
        message: String!
    }
    union UsersResult = UsersSuccesfulResult | UsersErrorResult 
`; // close tick

module.exports = { typeDefs };


