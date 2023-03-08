import { ServerAdapterOptions } from '../../shared/vite';
import type { StaticGenerateRenderOptions } from '@spiritbro1/qwik-city/static';

/**
 * @alpha
 */
export declare function netifyEdgeAdapter(opts?: NetlifyEdgeAdapterOptions): any;

/**
 * @alpha
 * @deprecated Use `netifyEdgeAdapter` exported from `@spiritbro1/qwik-city/adapters/netlify-edge/vite` instead.
 */
export declare const netifyEdgeAdaptor: typeof netifyEdgeAdapter;

/**
 * @alpha
 */
export declare interface NetlifyEdgeAdapterOptions extends ServerAdapterOptions {
    /**
     * Determines if the build should generate the edge functions declarations `manifest.json` file.
     *
     * https://docs.netlify.com/edge-functions/declarations/
     *
     * Defaults to `true`.
     */
    functionRoutes?: boolean;
    /**
     * Manually add pathnames that should be treated as static paths and not SSR.
     * For example, when these pathnames are requested, their response should
     * come from a static file, rather than a server-side rendered response.
     */
    staticPaths?: string[];
}

/**
 * @alpha
 * @deprecated Use `NetlifyEdgeAdapterOptions` instead.
 */
export declare type NetlifyEdgeAdaptorOptions = NetlifyEdgeAdapterOptions;

export { StaticGenerateRenderOptions }

export { }
