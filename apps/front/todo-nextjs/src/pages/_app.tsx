import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import reset from 'sanitize.css';
import { createGlobalStyle } from 'styled-components';

import { rootStore } from '~/store/root';

import Layout from '~/components/container/Layout/Layout';
import Toast from '~/components/container/Toast/Toast';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={rootStore}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toast />
    </Provider>
  );
}
