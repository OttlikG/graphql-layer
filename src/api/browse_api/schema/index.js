import { makeExecutableSchema } from 'graphql-tools';

// APIs
import ItemSummary from './api/item_summary';

// Common
import AspectFilter from './common/aspect_filter.graphql';
import FilterField from './common/filter_field.graphql';
import RangeValue from './common/range_value.graphql';

import resolvers from '../resolver/root_query';

const SchemaDefinition = `
schema {
  query: RootQueryType
}`;

const executableSchema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,

    //APIs
    // ItemSummary,

    // Common
    // AspectFilter,
    // FilterField,
    // RangeValue
  ],
  resolvers,
});

export default executableSchema;
