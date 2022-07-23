export function buildSocialUrl(href: string): string {
  if (href.includes(':')) return href;
  return `https://${href}`;
}
