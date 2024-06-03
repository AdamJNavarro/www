import { StackItem } from '~/app/data/stack';

export function makeCommaList({ data, key }: { data: any[]; key: string }) {
  return [...data].map((item) => item[key]).join(', ');
}

export function combineSharedNamespaces(data: StackItem[]): string {
  const awsItems = [...data].filter((item) => item.name.startsWith('AWS'));
  const nonAwsItems = [...data].filter((item) => !item.name.startsWith('AWS'));

  if (awsItems.length > 1) {
    const awsNames = awsItems
      .map((item) => item.name.substring(3).trim())
      .join(', ');
    const nonAwsNames = nonAwsItems.map((item) => item.name).join(', ');
    return `${nonAwsNames}, AWS (${awsNames})`;
  }

  return [...data].map((item) => item.name).join(', ');
}

export function sortStackByUsage(data: StackItem[]): StackItem[] {
  return [...data].sort((a, b) => Number(b.activelyUsing) - Number(a.activelyUsing));
}

export function filterStackByUsage(data: StackItem[]): StackItem[] {
  return [...data].filter((item) => item.activelyUsing);
}
