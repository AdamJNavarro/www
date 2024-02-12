'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function getLatestWord() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();

  return (
    await sql`SELECT spelling, definition, part_of_speech AS "partOfSpeech", date_learned AS "dateLearned" FROM words ORDER BY date_learned DESC LIMIT 1`
  ).rows[0];
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
