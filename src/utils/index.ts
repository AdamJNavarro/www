export * from './Array';
export * from './Data';

export function buildNamesString(persons: any[], key: string): string {
  return persons.map((_person: any) => _person[key]).join(', ');
}

export function makeKebabCase(str: string): string {
  return str.replaceAll(' ', '-').replaceAll('.', '-').toLowerCase();
}

export function getLogoPath(name: string, variant?: string): string {
  const fixedName = makeKebabCase(name);
  if (variant) return `/img/logos/${fixedName}-${variant}.svg`;
  return `/img/logos/${fixedName}.svg`;
}

export function formatDate(date: string) {
  const currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'numeric',
    day: 'numeric',
    year: '2-digit',
  });

  return formattedDate.includes('d') ? formattedDate : fullDate;
}

export function nFormatter(num: number, digits: number) {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  // eslint-disable-next-line no-plusplus
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
}

export function unixTimestampToDate(val: number) {
  return new Date(val * 1000);
}
