import { Octokit } from 'octokit';
import useSWR from 'swr';
import { fetcher } from '~/utils';
import { GithubRepoLanguages } from './github.types';

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const octokit = new Octokit({ auth: token });

export function useGithubRepoLangs({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) {
  return useSWR<GithubRepoLanguages>(
    `/api/github/repo-langs?owner=${owner}&repo=${repo}`,
    fetcher
  );
}

export { octokit };
