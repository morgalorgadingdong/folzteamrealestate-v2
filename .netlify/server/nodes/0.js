import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-17b26669.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-17b26669.js","_app/immutable/chunks/index-c80691d2.js","_app/immutable/chunks/stores-9941fb25.js","_app/immutable/chunks/singletons-0b4f5668.js"];
export const stylesheets = ["_app/immutable/assets/_layout-81c82bb5.css"];
export const fonts = [];
