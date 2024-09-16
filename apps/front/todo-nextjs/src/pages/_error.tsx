import { NextPageContext } from 'next';

import { useTranslations } from 'next-intl';
import { styled } from 'styled-components';

import Icon from '~/components/container/Icon/Icon';

type Props = {
  statusCode: number;
};

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Error({ statusCode }: Props) {
  const t = useTranslations('pages');

  const getMessage = () => {
    switch (statusCode) {
      case 404:
        return <h2>{t('error.notFound')}</h2>;
      default:
        return <h2>{t('error.inValid')}</h2>;
    }
  };

  return (
    <StyledError>
      <Icon presentational={{ name: 'Error', size: 64 }} />
      {getMessage()}
    </StyledError>
  );
}

Error.getInitialProps = async ({ res, err, locale }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const currentlocale = locale || 'ja';

  return {
    statusCode,
    messages: (await import(`~/messages/${currentlocale}.json`)).default,
  };
};
