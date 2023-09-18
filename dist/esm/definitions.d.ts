export interface BasicPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
