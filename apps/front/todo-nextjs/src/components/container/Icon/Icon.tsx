import { ComponentProps } from 'react';

import IconPresentational from '~/components/presentational/Icon/Icon';

type Props = {
  presentational: Omit<ComponentProps<typeof IconPresentational>, 'clickIcon'>;
  clickIcon: () => void;
};

export default function Icon({ presentational, clickIcon }: Props) {
  return <IconPresentational {...presentational} clickIcon={clickIcon} />;
}
