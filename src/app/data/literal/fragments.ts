import { gql } from '@apollo/client';

const ReadingStatesFragment = gql`
  fragment ReadingStateParts on ReadingState {
    id
    status
    createdAt
  }
`;

const BookPartsFragment = gql`
  fragment BookParts on Book {
    id
    slug
    title
    isbn13
    cover
    authors {
      id
      name
    }
  }
`;

const MomentPartsFragment = gql`
  fragment MomentParts on Moment {
    id
    note
    noteJson
    quote
    quoteJson
    where
    spoiler
    profileId
    bookId
    createdAt
  }
`;

const ProfilePartsFragment = gql`
  fragment ProfileParts on Profile {
    id
    handle
    name
    bio
    image
    invitedByProfileId
  }
`;

export {
  BookPartsFragment,
  MomentPartsFragment,
  ProfilePartsFragment,
  ReadingStatesFragment,
};
