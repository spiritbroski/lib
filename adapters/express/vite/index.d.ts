import { ServerAdapterOptions } from '../../shared/vite';
import type { StaticGenerateRenderOptions } from '@spiritbro1/qwik-city/static';

/**
 * @alpha
 */
export declare function expressAdapter(opts?: ExpressAdapterOptions): any;

/**
 * @alpha
 */
export declare interface ExpressAdapterOptions extends ServerAdapterOptions {
}

/**
 * @alpha
 * @deprecated Use `expressAdapter` exported from `@spiritbro1/qwik-city/adapters/express/vite` instead.
 */
export declare const expressAdaptor: typeof expressAdapter;

/**
 * @alpha
 * @deprecated Use `ExpressAdapterOptions` instead.
 */
export declare type ExpressAdaptorOptions = ExpressAdapterOptions;

export { StaticGenerateRenderOptions }

export { }
