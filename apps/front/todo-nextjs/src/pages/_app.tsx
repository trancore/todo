import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import reset from 'sanitize.css';
import { createGlobalStyle } from 'styled-components';

import Layout from '~/components/container/Layout/Layout';
import Toast from '~/components/container/Toast/Toast';

import { useAppWrappedStore } from '~/hooks/useRedux';

if (
  process.env.NODE_ENV === 'development' &&
  process.env.NEXT_PUBLIC_USE_MOCK === 'true'
) {
  require('~/mock');
}

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = useAppWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout>
        <Component {...props} />
      </Layout>
      <Toast />
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  a:any-link {
    text-decoration: none;
    color: #FFFFFF;
  }
`;
