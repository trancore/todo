import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider } from 'next-intl';
import { Provider as StateProvider } from 'react-redux';
import reset from 'sanitize.css';
import { createGlobalStyle } from 'styled-components';

import Layout from '~/components/container/Layout/Layout';
import Toast from '~/components/container/Toast/Toast';

import { useAppWrappedStore } from '~/hooks/useRedux';

import { initMocks } from '~/mock';

if (
  process.env.NODE_ENV === 'development' &&
  process.env.NEXT_PUBLIC_USE_MOCK === 'true'
) {
  initMocks();
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { store, props } = useAppWrappedStore(pageProps);
  const router = useRouter();

  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    // EtoEテスト用
    window.store = store;
  }

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Asia/Tokyo"
      messages={pageProps.messages}
    >
      <StateProvider store={store}>
        <SessionProvider session={session}>
          <GlobalStyle />
          <Layout>
            <Component {...props} />
          </Layout>
          <Toast />
        </SessionProvider>
      </StateProvider>
    </NextIntlClientProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  a:any-link {
    text-decoration: none;
    color: #FFFFFF;
  }
`;
