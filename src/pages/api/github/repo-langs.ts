import type { NextApiResponse } from 'next';
import { octokit } from '~/lib/github';

export default async function handler(req: any, res: NextApiResponse) {
  const { owner, repo } = req.query;

  // const respo = await octokit.rest.repos.listCommits({
  //   owner,
  //   repo,
  //   per_page: 1,
  //   page: 1,
  // });

  // const linkStr = `${respo.headers.link}`;
  // const strStart = linkStr.lastIndexOf('=', linkStr.lastIndexOf('=') - 1) + 1;
  // const strEnd = linkStr.lastIndexOf('>');
  // const commitCount = linkStr.substring(strStart, strEnd);

  const resp = await octokit.rest.repos.listLanguages({
    owner,
    repo,
  });

  const totalBytes = Object.values(resp.data).reduce((a, b) => a + b, 0);
  const items = Object.keys(resp.data).map((key) => ({
    language: key,
    bytes: resp.data[key],
  }));

  return res.status(200).json({
    totalBytes,
    items,
  });
}
