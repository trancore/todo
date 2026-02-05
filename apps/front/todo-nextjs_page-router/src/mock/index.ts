import { SharedOptions } from 'msw';

export async function initMocks() {
  const serverOptions: Partial<SharedOptions> | undefined = {
    onUnhandledRequest: 'bypass',
  };

  if (typeof window === 'undefined') {
    const { server } = await import('~/mock/server');
    server.listen(serverOptions);
  } else {
    const { worker } = await import('~/mock/browser');
    worker.start();
  }
}
