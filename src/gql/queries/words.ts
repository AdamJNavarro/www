import { gql } from '@apollo/client';

export const GET_WORDS_QUERY = gql`
  query listWords {
    listWords {
      items {
        id
        spelling
        definition
        partOfSpeech
        dateLearned
      }
    }
  }
`;

export const CREATE_WORD_MUTATION = gql`
  mutation createWord($createwordinput: CreateWordInput!) {
    createWord(input: $createwordinput) {
      id
      spelling
      definition
      partOfSpeech
      dateLearned
    }
  }
`;
