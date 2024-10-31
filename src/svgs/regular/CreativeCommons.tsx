import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreativeCommons = ({
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
      d="M12 4.26a7.74 7.74 0 1 0 0 15.48 7.74 7.74 0 0 0 0-15.48ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M8.756 14.827a2.82 2.82 0 0 0 2.745-2.19h-1.347a1.544 1.544 0 0 1-1.398.905A1.54 1.54 0 0 1 7.214 12a1.54 1.54 0 0 1 2.94-.648h1.347A2.822 2.822 0 0 0 5.929 12a2.825 2.825 0 0 0 2.827 2.827Zm6.118 0a2.82 2.82 0 0 0 2.745-2.19h-1.347a1.544 1.544 0 0 1-1.398.905A1.54 1.54 0 0 1 13.332 12a1.54 1.54 0 0 1 2.94-.648h1.347a2.822 2.822 0 0 0-5.572.648 2.825 2.825 0 0 0 2.827 2.827Z"
    />
  </svg>
);
export default SvgCreativeCommons;
