import { localStorageKeys } from '~/utils/Storage';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
const TMBD_CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${TMDB_API_KEY}`;

export function getTmdbImageConfig() {
  const config = JSON.parse(localStorage.getItem(localStorageKeys.tmdbConfig));

  const { secure_base_url, poster_sizes } = config;
  return {
    baseUrl: `${secure_base_url}w`,
    sizes: {
      sm: poster_sizes[0].substring(1),
      md: poster_sizes[1].substring(1),
      lg: poster_sizes[2].substring(1),
    },
  };
}

export async function getTmdbPosterUrl(
  posterId: any,
  posterSize: number,
  baseUrl: string
): Promise<string> {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${posterId}/images?api_key=${TMDB_API_KEY}&language=en`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  );
  const { posters } = await response.json();
  return `${baseUrl}${posterSize}${posters[0].file_path}`;
}

interface TmdbConfig {
  images: any;
  change_keys: string[];
}

export async function getTmdbConfig(): Promise<any> {
  const resp = await fetch(TMBD_CONFIG_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  const isJson = resp.headers.get('content-type')?.includes('application/json');
  const data = isJson ? await resp.json() : null;

  if (!resp.ok) {
    const error = (data && data.message) || resp.status;
    return error;
  }

  // localStorage.setItem(localStorageKeys.tmdbConfig, JSON.stringify(data.images));

  return data;
}
