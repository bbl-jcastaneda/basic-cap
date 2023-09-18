import { WebPlugin } from '@capacitor/core';
import type { BasicPlugin } from './definitions';
export declare class BasicWeb extends WebPlugin implements BasicPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
