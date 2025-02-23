import type { Location } from 'react-router-dom';

/**
 * Adds a query parameter to the current location
 **/
export function addQueryParam(location: Location, key: string, value: string): string {
  const urlSearchParams = new URLSearchParams(location.search);

  urlSearchParams.set(key, value);

  const searchParams = urlSearchParams.toString();

  return `${location.pathname}${searchParams ? `?${searchParams}` : ''}`;
}

/**
 * Replaces query parameter in the current location
 **/
export function replaceQueryParam(location: Location, key: string, value: string): string {
  const urlSearchParams = new URLSearchParams();

  urlSearchParams.set(key, value);

  const searchParams = urlSearchParams.toString();

  return `${location.pathname}?${searchParams}`;
}

/**
 * Removes a query parameter from the current location
 **/
export function removeQueryParam(location: Location, key: string): string {
  const urlSearchParams = new URLSearchParams(location.search);

  urlSearchParams.delete(key);

  const searchParams = urlSearchParams.toString();

  return `${location.pathname}${searchParams ? `?${searchParams}` : ''}`;
}
