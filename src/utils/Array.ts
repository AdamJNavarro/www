export function sortByPropertyExistence(data: any[], key: string): any[] {
  return [...data].sort((a: any, b: any) => (a[key] ? -1 : b[key] ? 1 : 0));
}

interface orderByArgs {
  data: any[];
  key: string;
  reverse: boolean;
}

export function sortByAbc({ data, key, reverse }: orderByArgs): any[] {
  return [...data].sort((a, b) => {
    if (reverse) {
      return b[key].normalize().localeCompare(a[key].normalize());
    }

    return a[key].normalize().localeCompare(b[key].normalize());
  });
}
