import { makeExecutableSchema } from 'graphql-tools';

// APIs
import ItemSummary from './item_summary/schema';

import resolvers from '../browse_api/item_summary/resolver';

const SchemaDefinition = `
schema {
  query: RootQuery
}
`;

const RootQuery = `
type RootQuery {
  search(parameter: SearchInput): Search
}
`;

const executableSchema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,

    //APIs
    ItemSummary,
  ],
  resolvers,
});

export default executableSchema;
