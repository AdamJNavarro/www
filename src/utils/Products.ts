export function getProductLogoPath(name: string): string {
  const assetName = name.replaceAll(' ', '-').replaceAll('.', '');
  return `/img/logos/${assetName}.png`;
}

export function buildSocialUrl(href: string): string {
  if (href.includes(':')) return href;
  return `https://${href}`;
}
