const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type School {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    age: Number
    gender: String
    bio: String
    interests: String
    hometown: String
    email: String
    school: [School]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    school(_id: ID!): School
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      age: Number
      gender: String
      bio: String
      interests: String
      hometown: String  
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      age: Number
      gender: String
      bio: String
      interests: String
      hometown: String  
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;