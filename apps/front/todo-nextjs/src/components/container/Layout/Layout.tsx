import LayoutPresentational from '~/components/presentational/Layout/Layout';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return <LayoutPresentational>{children}</LayoutPresentational>;
}
