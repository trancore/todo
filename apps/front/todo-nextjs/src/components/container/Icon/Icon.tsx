import { ComponentProps } from 'react';

import IconPresentational from '~/components/presentational/Icon/Icon';

type Props = {
  presentational: ComponentProps<typeof IconPresentational>;
};

export default function Icon({ presentational }: Props) {
  return <IconPresentational {...presentational} />;
}
