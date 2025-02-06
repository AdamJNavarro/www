export function sortByPropertyExistence(data: any[], key: string): any[] {
	return [...data].sort((a: any, b: any) => (a[key] ? -1 : b[key] ? 1 : 0));
}

export function sortByDate(data: any[], key: string): any[] {
	return [...data].sort((a, b) => {
		if (new Date(a[key]) > new Date(b[key])) {
			return -1;
		}
		return 1;
	});
}

interface orderByArgs {
	data: any[];
	key: string;
	reverse?: boolean;
}

export function sortByAbc({ data, key, reverse = false }: orderByArgs): any[] {
	return [...data].sort((a, b) => {
		if (reverse) {
			return b[key].normalize().localeCompare(a[key].normalize());
		}

		return a[key].normalize().localeCompare(b[key].normalize());
	});
}
