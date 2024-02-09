import { Octokit } from 'octokit';
import useSWR from 'swr';
import { fetcher } from '~/utils';
import { GithubRepoLanguages, GithubStarredRepo } from './github.types';

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const octokit = new Octokit({ auth: token });

function useGithubRepoLangs({ owner, repo }: { owner: string; repo: string }) {
  return useSWR<GithubRepoLanguages>(
    `/api/github/repo-langs?owner=${owner}&repo=${repo}`,
    fetcher
  );
}

function useGithubStarredRepos() {
  return useSWR<GithubStarredRepo>('/api/github/starred', fetcher);
}

export { octokit, useGithubRepoLangs, useGithubStarredRepos };
