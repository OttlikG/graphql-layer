import getStales from './get_sales';

export default {
  RootQuery: {
    search(root, args, context) {
      // console.log('root', root)
      // console.log('args', args)
      // console.log('context', context)

      return getStales();
    },
  },
};
