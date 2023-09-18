import { registerPlugin } from '@capacitor/core';

import type { BasicPlugin } from './definitions';

const Basic = registerPlugin<BasicPlugin>('Basic', {
  web: () => import('./web').then(m => new m.BasicWeb()),
});

export * from './definitions';
export { Basic };
