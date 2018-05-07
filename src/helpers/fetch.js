import axios from 'axios';
import { isEmpty } from 'lodash';

function generateBaseUrl (params) {
  Object.keys(params).forEach(key => {
    if (isEmpty(params[key])) {
      throw new Error(`${key} must be defined`);
    }
  })
  const { protocol, domain, api } = params;
  return `${protocol}://${domain}/${api}/`;
}

function connector ({ protocol, domain, api, headers }) {
  return axios.create({
    baseURL: generateBaseUrl({ protocol, domain, api }),
    timeout: 1500,
    headers
  });
}

export const ebayConnector = () => {
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.EBAY_PROD_TOKEN}`,
    'Content-Type': 'application/json'
  };

  const connectorConfig = {
    protocol: 'https',
    domain: 'api.ebay.com',
    api: 'buy/browse/v1',
    headers
  }

  return connector(connectorConfig);
}
