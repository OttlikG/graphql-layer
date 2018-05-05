import axios from 'axios';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const buildHeaders = headers => ({
  ...defaultHeaders,
  headers
});

export const EbayAPI = ({ headers, ...options }) => {
  return axios.create({
    baseURL: 'https://api.ebay.com/buy/browse/v1/',
    timeout: 1000,
    ...(buildHeaders(headers)),
    ...options,
  });
}
