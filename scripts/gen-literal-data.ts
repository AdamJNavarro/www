import ky from 'ky';
import { loadEnvConfig } from '@next/env';
import fs from 'fs/promises';
import { buildNamesString } from '~/utils';
import { LiteralBook } from '~/app/(main)/data/literal';

const projectDir = process.cwd();
loadEnvConfig(projectDir);
const token = process.env.NEXT_PUBLIC_LITERAL_ACCESS_TOKEN;
const endpoint = 'https://literal.club/graphql/';
const query = `
  query myReadingStates {
    myReadingStates {
      id
      status
      createdAt
      book {
        id
        slug
        title
        isbn13
        cover
        pageCount
        authors {
          id
          name
        }
      }
    }
  }
`;

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query }),
};

async function getLiteralData() {
  const json: any = await ky.post(endpoint, options).json();

  const updatedValues: LiteralBook[] = json.data.myReadingStates.map((entry) => ({
    status: entry.status,
    createdAt: entry.createdAt,
    id: entry.book.id,
    url: `https://literal.club/book/${entry.book.slug}`,
    title: entry.book.title,
    cover: entry.book.cover,
    isbn: entry.book.isbn13,
    pageCount: entry.book.pageCount,
    authors: buildNamesString(entry.book.authors, 'name'),
  }));

  const updatedData = JSON.stringify(
    { updatedAt: new Date(), books: updatedValues },
    null,
    2
  );

  await fs.writeFile(
    './src/app/(main)/data/literal/data.json',
    updatedData,
    'utf-8'
  );
}

getLiteralData();
