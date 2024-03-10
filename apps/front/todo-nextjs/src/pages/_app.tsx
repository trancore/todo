import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import reset from 'sanitize.css';
import { createGlobalStyle } from 'styled-components';
import { todoStore } from '~/store/todo';

import Layout from '~/components/container/Layout/Layout';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={todoStore}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
