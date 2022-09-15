import { gql } from '@apollo/client';
import { BookPartsFragment, ReadingStatesFragment } from '../fragments/literal';

const GET_BOOKS_QUERY = gql`
  query myReadingStates {
    myReadingStates {
      ...ReadingStateParts
      book {
        ...BookParts
      }
    }
  }
  ${ReadingStatesFragment}
  ${BookPartsFragment}
`;

const GET_MOMENTS_QUERY = gql`
  query momentsByHandleAndBookId($bookId: String!, $handle: String) {
    momentsByHandleAndBookId(bookId: $bookId, handle: $handle) {
      id
      profile {
        id
      }
    }
  }
`;

// Literal Profile ID = 'cl2jedoby6210890hxe5ct6ugc7'

const GET_BOOKS_BY_STATE_QUERY = gql`
  query booksByReadingStateAndProfile(
    $limit: Int!
    $offset: Int!
    $readingStatus: ReadingStatus!
    $profileId: String!
  ) {
    booksByReadingStateAndProfile(
      limit: $limit
      offset: $offset
      readingStatus: $readingStatus
      profileId: $profileId
    ) {
      ...BookParts
    }
  }
  ${BookPartsFragment}
`;

export { GET_BOOKS_QUERY, GET_MOMENTS_QUERY, GET_BOOKS_BY_STATE_QUERY };
