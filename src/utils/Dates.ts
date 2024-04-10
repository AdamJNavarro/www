type DateFormat = 'short' | 'long' | 'ago' | 'short-ago' | 'long-ago';

type FormatDateArgs = {
  date: string;
  format: DateFormat;
};

export function formatDate({ date, format }: FormatDateArgs): string {
  const currentDateTime = new Date().getTime();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const shortDate = targetDate.toLocaleString('en-us', {
    month: 'numeric',
    day: 'numeric',
    year: '2-digit',
  });

  if (format === 'short') return shortDate;

  const longDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (format === 'long') return longDate;

  const targetDateTime = targetDate.getTime();
  const timeDifference = Math.abs(currentDateTime - targetDateTime);
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let agoStr;

  if (daysAgo < 1) {
    agoStr = 'Today';
  } else if (daysAgo < 7) {
    agoStr = `${daysAgo}d ago`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    agoStr = `${weeksAgo}w ago`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    agoStr = `${monthsAgo}mo ago`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    agoStr = `${yearsAgo}y ago`;
  }

  if (format === 'ago') return agoStr;
  if (format === 'short-ago') return `${shortDate} (${agoStr})`;
  return `${longDate} (${agoStr})`;
}
