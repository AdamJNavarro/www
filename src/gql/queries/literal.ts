import { gql } from '@apollo/client';
import {
  BookPartsFragment,
  MomentPartsFragment,
  ProfilePartsFragment,
  ReadingStatesFragment,
} from '../fragments/literal';

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

export { GET_BOOKS_QUERY, GET_MOMENTS_QUERY };
