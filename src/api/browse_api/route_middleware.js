import Router from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import browseApiSchema from './executable_schema';

export default function registerBrowseAPIRoute(app) {
  const router = new Router();
  const BROWSE_API_ROUTE = 'browse';
  const schema = browseApiSchema;

  router.post(`/graphql/${BROWSE_API_ROUTE}`, koaBody(), graphqlKoa({ schema }));
  router.get(`/graphql/${BROWSE_API_ROUTE}`, graphqlKoa({ schema }));
  router.get(`/graphiql/${BROWSE_API_ROUTE}`, graphiqlKoa({ endpointURL: `/graphql/${BROWSE_API_ROUTE}` }));

  return app
    .use(router.routes())
    .use(router.allowedMethods());
}
