import ConvertedAmount from './converted_amount.graphql';
import Image from './image.graphql';
import ItemSummary from './item_summary.graphql';
import Search from './search.graphql';
import Seller from './seller.graphql';

// Enum
import CurrencyCodeEnum from './enum/currency_code_enum.graphql';

// Input
import AspectFilterInput from './input/aspect_filter_input.graphql';
import FilterFieldInput from './input/filter_field_input.graphql';
import RangeValueInput from './input/range_value_input.graphql';
import SearchInput from './input/search_input.graphql';
import SortFieldInput from './input/sort_field_input.graphql';

export default () => [
  ConvertedAmount,
  Image,
  ItemSummary,
  Search,
  Seller,

  // Input
  AspectFilterInput,
  FilterFieldInput,
  RangeValueInput,
  SearchInput,
  SortFieldInput,

  // Enum
  CurrencyCodeEnum
];
