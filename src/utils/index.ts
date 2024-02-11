export * from './Array';
export * from './Data';

export function buildNamesString(persons: any[], key: string): string {
  return persons.map((_person: any) => _person[key]).join(', ');
}

export function makeKebabCase(str: string): string {
  return str.replaceAll(' ', '-').replaceAll('.', '-').toLowerCase();
}

export function getLogoPath(name: string): string {
  const fixedName = makeKebabCase(name);
  return `/img/logos/${fixedName}.svg`;
}
