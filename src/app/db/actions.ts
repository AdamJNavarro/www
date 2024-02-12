/* eslint-disable consistent-return */

'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';

const ADMIN_KEY = 'Monkey25';

export async function addWord(formData: any) {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  if (formData.adminKey !== ADMIN_KEY) {
    // Prevent others from being able to write to database until I can properly impl auth
    return false;
  }

  const { spelling, definition, partOfSpeech, dateLearned } = formData;

  noStore();

  await sql`INSERT INTO words (spelling, definition, part_of_speech, date_learned) VALUES (${spelling}, ${definition}, ${partOfSpeech}, ${dateLearned});`;
  revalidatePath('/admin');
}
