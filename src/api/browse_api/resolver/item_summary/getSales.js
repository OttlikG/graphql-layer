import { EbayAPI } from '../../../../helpers/fetch';

export default function getSales() {
  const fetchEbay = EbayAPI();
  const options = {

  }
  return fetchEbay.get('item_summary/search', {
    params: {
      q: 'drone',
      limit: 3
    }
  });
}
