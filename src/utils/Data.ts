import { IncomingOptions } from 'use-http';

interface GoFetchArgs {
  url: string;
  config: RequestInit;
}

interface GoFetchPayload {
  data?: any;
  error?: Error;
}

export interface CustomFetchArgs<TVars = any> {
  opts?: IncomingOptions;
  vars?: TVars;
}

function makeError(name: string | number, message: string) {
  const error = new Error(message);
  error.name = `${name}`;
  return error;
}

export async function goFetch({
  url,
  config,
}: GoFetchArgs): Promise<GoFetchPayload> {
  const resp = await fetch(url, config);
  const isJson = resp.headers.get('content-type')?.includes('application/json');
  const data = isJson ? await resp.json() : null;

  if (!resp.ok) {
    const errorMessage = (data && data.message) || resp.statusText;
    const error = makeError(resp.status, errorMessage);
    return {
      error,
    };
  }

  return {
    data,
  };
}

export function buildUseFetchOpts(
  opts: IncomingOptions,
  defaultOpts?: IncomingOptions
): IncomingOptions {
  return {
    ...defaultOpts,
    ...opts,
    headers: {
      ...defaultOpts.headers,
      ...opts.headers,
    },
    interceptors: {
      ...defaultOpts.interceptors,
      ...opts.interceptors,
    },
  };
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
