interface GithubRepoLanguages {
  totalBytes: number;
  items: {
    language: string;
    bytes: number;
  }[];
}

interface GithubStarredRepo {
  id: number;
  name: string;
  description: string;
  href: string;
  stars: number;
}

export type { GithubRepoLanguages, GithubStarredRepo };
