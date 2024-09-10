import Head from 'next/head';

import SeoPresentational from '~/components/presentational/Seo/Seo';

type Props = {
  children: JSX.Element;
  metadata?: {
    title: string;
    description: string;
  };
  ogp?: {
    title: string;
    description: string;
    type?: string;
    image?: string;
    url?: string;
  };
};

export default function Seo(props: Props) {
  const { metadata, ogp } = props;
  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta
          name="description"
          content={metadata?.description}
          key="description"
        />
        <meta property="og:title" content={ogp?.title} />
        <meta property="og:description" content={ogp?.description} />
        <meta property="og:type" content={ogp?.type} />
        <meta property="og:image" content={ogp?.image} />
        <meta property="og:url" content={ogp?.url} />
      </Head>
      <SeoPresentational>{props.children}</SeoPresentational>
    </>
  );
}
