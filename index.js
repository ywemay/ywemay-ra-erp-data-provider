import {
  default as getRaProvider,
  defaultPrimaryKeys, 
  defaultSchema } from '@raphiniert/ra-data-postgrest';

import { doFetch } from 'ywemay-ra-utils'

const setHeaders = (headers, schema) => {
  const schema = schema || 'public';
  if (!headers.get('Accept-Profile')) headers.set('Accept-Profile', schema);
  if (!headers.get('Content-Profile')) headers.set('Content-Profile', schema);
}

const { VITE_API_HOST } = import.meta.env;

export function getProvider({ schema, hooks }) {
  const config = {
    apiUrl: VITE_API_HOST,
    httpClient: (uri, options = {}) => {
      if (!options) options = {};
      if (!options.headers) {
          options.headers = new Headers({ Accept: 'application/json' });
      }
      setHeaders(options.headers, schema)
      const url = uri.match(/^http/) ? uri : VITE_API_HOST + uri;
      return doFetch(url, options)
    },
    defaultListOp: 'eq',
    primaryKeys: defaultPrimaryKeys,
    schema: defaultSchema
  }

  return getRaProvider(config);
}

export default getProvider;