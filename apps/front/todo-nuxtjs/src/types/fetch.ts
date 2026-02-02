import type { UseFetchOptions } from 'nuxt/app';

type OpenApiFetchBody<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Paths extends Record<string, any>,
  Path extends keyof Paths,
  Method extends keyof Paths[Path],
> = Paths[Path][Method]['requestBody']['content']['application/json'] extends infer Data
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Data extends Record<string, any>
    ? { body: Data }
    : Paths[Path][Method]['requestBody']['content'] extends infer Params
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Params extends Record<string, any>
        ? { body: Params }
        : object
      : object
  : object;

type OpenApiFetchParams<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Paths extends Record<string, any>,
  Path extends keyof Paths,
  Method extends keyof Paths[Path],
> = Paths[Path][Method]['parameters']['path'] extends infer Params
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Params extends Record<string, any>
    ? { params: Params }
    : object
  : object;

type OpenApiFetchQuery<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Paths extends Record<string, any>,
  Path extends keyof Paths,
  Method extends keyof Paths[Path],
> = Paths[Path][Method]['parameters']['query'] extends infer Query
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Query extends Record<string, any>
    ? { query: Query }
    : object
  : object;

export type OpenApiResponse<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Paths extends Record<string, any>,
  Path extends keyof Paths,
  Method extends keyof Paths[Path],
> = Paths[Path][Method]['responses']['200']['content']['application/json'] extends infer Data
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Data extends Record<string, any>
    ? Data
    : Paths[Path][Method]['responses']['200']['content']['application/x-www-form-urlencoded'] extends infer Data
      ? Data extends string
        ? Data
        : unknown
      : unknown
  : unknown;

export type OpenApiFetchOptions<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Paths extends Record<string, any>,
  Path extends keyof Paths,
  Method extends keyof Paths[Path],
  Options extends UseFetchOptions<OpenApiResponse<Paths, Path, Method>>,
> = Omit<Options, 'method' | 'body' | 'params' | 'query'> & {
  // OpenAPIで生成したMethodを使う
  method: Method;
} & OpenApiFetchBody<Paths, Path, Method> &
  OpenApiFetchParams<Paths, Path, Method> &
  OpenApiFetchQuery<Paths, Path, Method>;

export type OpenApiFetchError<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Paths extends Record<string, any>,
  Path extends keyof Paths,
  Method extends keyof Paths[Path],
> = Paths[Path][Method]['responses']['400']['content']['application/json'] extends infer ErrorBadRequest
  ? ErrorBadRequest
  : Paths[Path][Method]['responses']['401']['content']['application/json'] extends infer ErrorUnauthorized
    ? ErrorUnauthorized
    : Paths[Path][Method]['responses']['403']['content']['application/json'] extends infer ErrorForbidden
      ? ErrorForbidden
      : Paths[Path][Method]['responses']['404']['content']['application/json'] extends infer ErrorNotFound
        ? ErrorNotFound
        : Paths[Path][Method]['responses']['500']['content']['application/json'] extends infer ErrorEnternalServer
          ? ErrorEnternalServer
          : Paths[Path][Method]['responses']['503']['content']['application/json'] extends infer ErrorServiceUnavailable
            ? ErrorServiceUnavailable
            : unknown;
