import { ComponentProps } from 'react';

import ErrorPresentation from '~/components/presentational/Error/Error';

type Props = {
  presentational: ComponentProps<typeof ErrorPresentation>;
};

export default function Error({ presentational }: Props) {
  const { text } = presentational;

  return <ErrorPresentation text={text} />;
}
