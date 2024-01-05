type Props = {
  children: JSX.Element;
  submit: () => undefined;
};

export default function Form({ submit, children }: Props) {
  return <form onSubmit={submit()}>{children}</form>;
}
