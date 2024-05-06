'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { handleServerActionError } from '~/utils';

export async function getApiTokens(provider: string): Promise<any> {
  noStore();

  try {
    const tokens = (
      await sql`SELECT  provider, access_token AS "accessToken", refresh_token AS "refreshToken", expiration_date AS "expirationDate" FROM apitokens WHERE provider = ${provider}`
    ).rows[0];
    return tokens;
  } catch (error) {
    return handleServerActionError();
  }
}

export async function getLatestWord(): Promise<any> {
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
    return handleServerActionError();
  }
}

export async function getPaginatedWords({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}) {
  noStore();

  const overfetchLimit = limit + 1;

  try {
    const words = (
      await sql`SELECT spelling, definition, part_of_speech AS "partOfSpeech", date_learned AS "dateLearned" FROM words ORDER BY date_learned DESC LIMIT ${overfetchLimit} OFFSET ${offset}`
    ).rows;

    const hasMore = words.length > limit;
    const expectedWords = hasMore ? words.slice(0, -1) : words;

    return {
      data: expectedWords,
      hasMore,
      error: null,
    };
  } catch (error) {
    const baseError = handleServerActionError();
    return { ...baseError, hasMore: false };
  }
}
