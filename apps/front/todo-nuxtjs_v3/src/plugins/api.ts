export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: runtimeConfig.public.apiBaseUrl,
    headers: {
      'Access-Control-Allow-Origin': runtimeConfig.public.applicationUrl,
    },
  });

  return {
    provide: {
      api,
    },
  };
});
