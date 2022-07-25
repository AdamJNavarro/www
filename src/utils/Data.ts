import { IncomingOptions } from 'use-http';

interface GoFetchArgs {
  url: string;
  config: RequestInit;
}

interface GoFetchPayload {
  data?: any;
  error?: string;
}

export async function goFetch({
  url,
  config,
}: GoFetchArgs): Promise<GoFetchPayload> {
  try {
    const resp = await fetch(url, config);
    const isJson = resp.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await resp.json() : null;

    if (!resp.ok) {
      const statusCode = resp.status;
      const error = (data && data.message) || `Error Code: ${statusCode}`;
      throw error;
    }

    return {
      data,
    };
  } catch (e) {
    return {
      error: e,
    };
  }
}

export interface CustomFetchArgs<TVars = any> {
  opts?: IncomingOptions;
  vars?: TVars;
}
