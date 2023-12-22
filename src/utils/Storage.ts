import dayjs from 'dayjs';

const localStorageKeys = {
  spotifyCreds: 'spotify-creds',
  stravaCreds: 'strava-creds',
  traktCreds: 'trakt-creds',
};

function setLocalStorage(key: string, value: any) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key: string) {
  // @ts-ignore
  return JSON.parse(localStorage.getItem(key));
}

export type LocalCreds = {
  accessToken: string;
  expiresAt: number;
  refreshToken?: string;
};

type StoreLocalCredsArgs = {
  storageKey: string;
  accessToken: string;
  expiresIn: number;
  refreshToken?: string;
};

function storeLocalCreds({
  storageKey,
  accessToken,
  expiresIn,
  refreshToken,
}: StoreLocalCredsArgs): LocalCreds {
  const currentUnixTime = dayjs(dayjs(new Date())).unix();
  // Subtracting 15 secs below to factor in potential diff between token server creation and client time
  const expiresAt = currentUnixTime + expiresIn - 15;
  const creds = {
    accessToken,
    expiresAt,
    refreshToken,
  };
  setLocalStorage(storageKey, creds);
  return creds;
}

function areCredsExpired(creds: LocalCreds): boolean {
  const currentUnixTime = dayjs(dayjs(new Date())).unix();
  return currentUnixTime > creds.expiresAt;
}

export {
  localStorageKeys,
  getLocalStorage,
  setLocalStorage,
  storeLocalCreds,
  areCredsExpired,
};
