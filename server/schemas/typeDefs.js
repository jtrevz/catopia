const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Cat {
        _id: ID
        name: String
    }
`;