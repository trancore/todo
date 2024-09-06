import Head from 'next/head';

import SeoPresentational from '~/components/presentational/Seo/Seo';

type Props = {
  children: JSX.Element;
  title?: string;
  description?: string;
};

export default function Seo(props: Props) {
  const { title: titleString, description } = props;
  return (
    <>
      <Head>
        <title>{titleString}</title>
        <meta name="description" content={description} key="description" />
      </Head>
      <SeoPresentational>{props.children}</SeoPresentational>
    </>
  );
}
