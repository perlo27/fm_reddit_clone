const { gql } = require('apollo-server');

export default gql`
  type Item {
    title: String
    id: ID
  }

  type Query {
    items: [Item]
  }
`;