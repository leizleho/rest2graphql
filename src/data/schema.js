import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Contact {
    id: ID
    firstName: String
    lastName: String
    company: String
  }

  type Query {
    getContacts: [Contact]
    getOneContact(id: ID!) : Contact
  }

  input ContactInput {
    id: ID
    firstName: String
    lastName: String
    company: String
  }

  type Mutation {
      createContact(input: ContactInput): Contact
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
