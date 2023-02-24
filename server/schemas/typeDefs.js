const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Cat {
        _id: ID
        name: String
        age: String
        gender: String
        coat: String
        breed: String
        color: String
        houseTrained: String
        spayNeutered: String
        shots: String
        description: String
    }

    type Query {
    cats: [Cat]
    }
`;