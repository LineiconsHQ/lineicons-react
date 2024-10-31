import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWebflow = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="m22 5.765-6.39 12.47H9.622l2.664-5.172h-.123C9.975 15.926 6.68 17.805 2 18.236V13.14s3.002-.17 4.758-2.033H2V5.765h5.343v4.403h.123l2.186-4.403h4.05v4.372h.123l2.247-4.372H22Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWebflow;
