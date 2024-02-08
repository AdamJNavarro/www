interface GithubRepoLanguages {
  totalBytes: number;
  items: {
    language: string;
    bytes: number;
  }[];
}

export type { GithubRepoLanguages };
