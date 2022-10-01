export * from './Array';
export * from './Data';

export function buildNamesString(persons: any[], key: string): string {
  return persons.map((_person: any) => _person[key]).join(', ');
}
