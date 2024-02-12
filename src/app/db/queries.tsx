'use server';

import { sql } from '@vercel/postgres';

export async function getWords() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  const words = await sql`
    SELECT spelling, definition, part_of_speech, date_learned
    FROM words
  `;
  return words.rows;
}
