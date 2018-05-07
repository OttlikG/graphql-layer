import { ebayConnector } from '../../../../helpers/fetch';

export default function getSales() {
  return ebayConnector().get('item_summary/search', {
    params: {
      q: 'drone',
      limit: 3
    }
  }).then(result => {
    // console.log('result', JSON.stringify(result.data, null, 2));
    return result.data;
  }).catch(console.error);
}
