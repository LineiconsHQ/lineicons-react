import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebookRounded = ({
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
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M13.3 21.916v-7.724h2.177l.288-2.719H13.3l.004-1.36c0-.71.067-1.09 1.086-1.09h1.361V6.306h-2.178c-2.616 0-3.537 1.318-3.537 3.536v1.633h-1.63v2.718h1.63v7.614a10.053 10.053 0 0 0 3.264.11Z"
    />
  </svg>
);
export default SvgFacebookRounded;
