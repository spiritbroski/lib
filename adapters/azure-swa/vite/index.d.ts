import { ServerAdapterOptions } from '../../shared/vite';
import type { StaticGenerateRenderOptions } from '@spiritbro1/qwik-city/static';

/**
 * @alpha
 */
export declare function azureSwaAdapter(opts?: AzureSwaAdapterOptions): any;

/**
 * @alpha
 */
export declare interface AzureSwaAdapterOptions extends ServerAdapterOptions {
}

/**
 * @alpha
 * @deprecated Please use `azureSwaAdapter` exported from `@spiritbro1/qwik-city/adapters/azure-swa/vite` instead.
 */
export declare const azureSwaAdaptor: typeof azureSwaAdapter;

/**
 * @alpha
 * @deprecated Please use `AzureSwaAdapterOptions` instead.
 */
export declare type AzureSwaAdaptorOptions = AzureSwaAdapterOptions;

export { StaticGenerateRenderOptions }

export { }
