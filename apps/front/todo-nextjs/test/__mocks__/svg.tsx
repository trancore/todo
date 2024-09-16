import { JSX, SVGProps } from 'react';

export default function MockSvg(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return <svg {...props} />;
}
