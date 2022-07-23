export function getProductLogoPath(name: string): string {
  const assetName = name.replaceAll(' ', '-').replaceAll('.', '');
  return `/img/logos/${assetName}.png`;
}
