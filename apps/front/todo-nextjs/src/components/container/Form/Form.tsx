'use client';

import FormPresentational from '~/components/presentational/Form/Form';

type Props = {
  children: JSX.Element;
  submit: () => undefined;
};

export default function Form({ children, submit }: Props) {
  return <FormPresentational submit={submit}>{children}</FormPresentational>;
}
