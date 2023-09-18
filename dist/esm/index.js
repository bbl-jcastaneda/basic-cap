import { registerPlugin } from '@capacitor/core';
const Basic = registerPlugin('Basic', {
    web: () => import('./web').then(m => new m.BasicWeb()),
});
export * from './definitions';
export { Basic };
//# sourceMappingURL=index.js.map