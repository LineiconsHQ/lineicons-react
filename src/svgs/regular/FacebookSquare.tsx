import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebookSquare = ({
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
      d="M17.625 3H6.375A3.375 3.375 0 0 0 3 6.375v11.25A3.375 3.375 0 0 0 6.375 21h11.25A3.375 3.375 0 0 0 21 17.625V6.375A3.375 3.375 0 0 0 17.625 3Zm-.457 9.694h-1.684v6.234H12.67v-6.234h-1.092v-2.1h1.092V9.254c0-1.753.73-2.795 2.795-2.795h2.094v2.092H16.34c-.805 0-.857.3-.857.86l-.002 1.179h1.913l-.23 2.1.003.003Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFacebookSquare;
