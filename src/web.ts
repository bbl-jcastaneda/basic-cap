import { WebPlugin } from '@capacitor/core';

import type { BasicPlugin } from './definitions';

export class BasicWeb extends WebPlugin implements BasicPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
