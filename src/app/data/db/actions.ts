/* eslint-disable consistent-return */

'use server';

import { sql } from '@vercel/postgres';
import { type Session } from 'next-auth';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { auth } from '~/app/auth';
import { handleServerActionError } from '~/utils';

async function getSession(): Promise<Session> {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }

  return session;
}

export async function saveApiTokens({
  provider,
  accessToken,
  refreshToken,
  expirationDate,
}: any) {
  noStore();
  try {
    const { rows } =
      await sql`UPDATE apitokens SET access_token = ${accessToken}, refresh_token = ${refreshToken}, expiration_date = ${expirationDate} WHERE provider = ${provider} RETURNING *`;
    console.log('UPD TOKENS DATA', rows);
    return rows[0];
  } catch (error) {
    console.log('Save tokens err', error);
    handleServerActionError();
  }
}

export async function addWord(formData: FormData) {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  const session = await getSession();
  const email = session.user?.email as string;

  if (email !== 'adamjnav@gmail.com') {
    throw new Error('Unauthorized');
  }

  const spelling = formData.get('spelling')?.toString() || '';
  const definition = formData.get('definition')?.toString() || '';
  const partOfSpeech = formData.get('partOfSpeech')?.toString() || '';
  const dateLearned = formData.get('dateLearned')?.toString() || '';

  noStore();

  await sql`INSERT INTO words (spelling, definition, part_of_speech, date_learned) VALUES (${spelling}, ${definition}, ${partOfSpeech}, ${dateLearned});`;
  revalidatePath('/words');
}
