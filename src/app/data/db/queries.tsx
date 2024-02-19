'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function getLatestWord(): Promise<any> {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();

  try {
    const word = (
      await sql`SELECT spelling, definition, part_of_speech AS "partOfSpeech", date_learned AS "dateLearned" FROM words ORDER BY date_learned DESC LIMIT 1`
    ).rows[0];
    return {
      data: word,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: {
        code: 500,
        message: 'A database error occurred.',
      },
    };
  }
}

export async function getWords() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();

  return (
    await sql`SELECT spelling, definition, part_of_speech AS "partOfSpeech", date_learned AS "dateLearned" FROM words ORDER BY date_learned DESC`
  ).rows;
}
