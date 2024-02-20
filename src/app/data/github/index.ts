'use server';

import { Octokit } from 'octokit';
import { handleServerActionError } from '~/utils';

const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

const octokit = new Octokit({ auth: token });

export async function getLatestStarredRepo() {
  try {
    const resp = await octokit.request('GET /user/starred', {
      per_page: 1,
      page: 1,
    });

    const { id, name, description, html_url, stargazers_count } = resp.data[0];

    return {
      data: {
        id,
        name,
        description,
        href: html_url,
        stars: stargazers_count,
      },
      error: null,
    };
  } catch (error) {
    return handleServerActionError();
  }
}

export async function getGithubRepoLanguages({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) {
  try {
    const resp = await octokit.rest.repos.listLanguages({
      owner,
      repo,
    });

    const totalBytes = Object.values(resp.data).reduce((a, b) => a + b, 0);
    const items = Object.keys(resp.data).map((key) => ({
      language: key,
      bytes: resp.data[key],
    }));

    return {
      data: {
        totalBytes,
        items,
      },
      error: null,
    };
  } catch (error) {
    return handleServerActionError();
  }
}

export async function getGithubRepoDependencies({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) {
  try {
    const resp = await octokit.rest.repos.getContent({
      owner,
      repo,
      path: 'package.json',
      headers: {
        accept: 'application/vnd.github+json',
      },
    });
    //console.log('RESP', resp);
    const { dependencies, devDependencies } = JSON.parse(
      // @ts-ignore
      Buffer.from(resp.data.content, resp.data.encoding).toString()
    );

    return {
      data: {
        deps: JSON.stringify(dependencies, null, ' '),
        devDeps: JSON.stringify(devDependencies, null, ' '),
      },
      error: null,
    };
  } catch (error) {
    return handleServerActionError();
  }
}
