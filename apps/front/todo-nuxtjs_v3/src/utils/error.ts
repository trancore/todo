import type { FetchError } from 'ofetch';
import type { OpenApiFetchError } from '~/types/fetch';
import type { paths as ApiPaths } from '~/types/openapi';

const defineCreateErrorPage = <Endpoints extends Record<string, any>>() => {
  return {
    createErrorPage: <
      Endpoint extends keyof Endpoints,
      Method extends keyof Endpoints[Endpoint],
    >(
      error: FetchError<OpenApiFetchError<Endpoints, Endpoint, Method>>,
    ) => {
      const { status, message } = error;

      throw createError({ status, message });
    },
  };
};

export const { createErrorPage } = defineCreateErrorPage<ApiPaths>();
