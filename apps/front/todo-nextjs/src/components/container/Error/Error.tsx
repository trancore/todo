import { selectError } from '~/state/error';

import ErrorPresentation from '~/components/presentational/Error/Error';

import { useAppSelector } from '~/hooks/useRedux';

export default function Error() {
  const store = useAppSelector(selectError);

  return <ErrorPresentation displayed={store.displayed} text={store.text} />;
}
