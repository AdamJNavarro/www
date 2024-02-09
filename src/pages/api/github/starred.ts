import type { NextApiResponse } from 'next';
import { octokit } from '~/lib/github';

export default async function handler(req: any, res: NextApiResponse) {
  const resp = await octokit.request('GET /user/starred', {
    per_page: 1,
    page: 1,
  });

  const { id, name, description, html_url, stargazers_count } = resp.data[0];

  return res.status(200).json({
    id,
    name,
    description,
    href: html_url,
    stars: stargazers_count,
  });
}
