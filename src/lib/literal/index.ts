const LITERAL_BASE_URL = 'https://literal.club';
const LITERAL_BOOK_URL = `${LITERAL_BASE_URL}/book`;

export function buildLiteralUrl(slug: string): string {
  return `${LITERAL_BOOK_URL}/${slug}`;
}
