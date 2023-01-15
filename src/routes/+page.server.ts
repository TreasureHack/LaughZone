import { list } from '$lib/functions/reddit';

/** @type {import('./$types').PageLoad} */
export async function load() {
  return await list();
}