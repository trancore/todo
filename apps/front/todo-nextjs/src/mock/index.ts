import { SharedOptions } from 'msw';

async function initMocks() {
  const options: Partial<SharedOptions> | undefined = {
    onUnhandledRequest: 'bypass',
  };

  if (typeof window === 'undefined') {
    const { server } = await import('~/mock/server');
    server.listen(options);
  } else {
    const { worker } = await import('~/mock/browser');
    worker.start(options);
  }
}

initMocks();
