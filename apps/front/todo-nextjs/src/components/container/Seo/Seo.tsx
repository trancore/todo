import Head from 'next/head';

import SeoPresentational from '~/components/presentational/Seo/Seo';

type Props = {
  children: JSX.Element;
  metadata?: { title?: string; description?: string };
};

export default function Seo(props: Props) {
  const { metadata } = props;
  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta
          name="description"
          content={metadata?.description}
          key="description"
        />
      </Head>
      <SeoPresentational>{props.children}</SeoPresentational>
    </>
  );
}
