import dotenvConfiguration from '../../config/dotenv_configuration';
import Koa from 'koa';
import registerBrowseAPIRoute from '../api/browse_api/route_middleware';

export function run() {
  const app = new Koa();
  let port = process.env.PORT || 4000;

  registerBrowseAPIRoute(app);

  app.listen(port);
  console.log(`Running a GraphQL API server at localhost:${port}/graphql`);

  // if (module.hot) {
  //   console.log('--- HMR')
  //   module.hot.accept('./server');
  // }
}

run();
