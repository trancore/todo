'use client';

import { selectToast } from '~/state/toast';

import ToastPresentational from '~/components/presentational/Toast/Toast';

import { useAppSelector } from '~/hooks/useRedux';

export default function Toast() {
  const store = useAppSelector(selectToast);

  return <ToastPresentational text={store.text} displayed={store.displayed} />;
}
