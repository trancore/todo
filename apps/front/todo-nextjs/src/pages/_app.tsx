import { AppProps } from 'next/app';

import reset from 'sanitize.css';
import { createGlobalStyle } from 'styled-components';
import Layout from '~/components/container/Layout/Layout';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
