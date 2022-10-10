import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const LITERAL_ENDPOINT = 'https://literal.club/graphql/';
const LITERAL_TOKEN = process.env.NEXT_PUBLIC_LITERAL_ACCESS_TOKEN;

const literalLink = ApolloLink.from([
  setContext((_, { headers }) => {
    const token = LITERAL_TOKEN;

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  }),
  createHttpLink({
    uri: LITERAL_ENDPOINT,
  }),
]);

const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().serviceName === 'literal',
    literalLink,
    // Change link to aws once re-implemented
    literalLink
  ),
  cache: new InMemoryCache(),
});

export { client };
