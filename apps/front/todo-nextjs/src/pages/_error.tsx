import { NextPageContext } from 'next';

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
  const getMessage = () => {
    switch (statusCode) {
      case 404:
        return 'このページは存在しません';
      default:
        return 'ページを表示できませんでした';
    }
  };

  return (
    <StyledError>
      <Icon presentational={{ name: 'Error', size: 64 }} />
      <h2>{getMessage()}</h2>
    </StyledError>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};
