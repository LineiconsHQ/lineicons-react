import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkedin = ({
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
      d="M19.706 3H4.348c-.725 0-1.306.58-1.306 1.306v15.387c0 .697.58 1.307 1.306 1.307h15.3c.726 0 1.307-.58 1.307-1.306V4.277C21.013 3.581 20.432 3 19.707 3ZM8.355 18.3H5.713V9.735h2.642V18.3ZM7.019 8.545a1.53 1.53 0 0 1-1.538-1.539c0-.841.696-1.538 1.538-1.538.842 0 1.54.697 1.54 1.538 0 .842-.64 1.54-1.54 1.54ZM18.371 18.3h-2.642v-4.152c0-.987-.029-2.293-1.393-2.293-1.394 0-1.597 1.103-1.597 2.206V18.3h-2.642V9.735h2.584v1.19h.029c.377-.696 1.22-1.393 2.526-1.393 2.7 0 3.193 1.742 3.193 4.123V18.3h-.058Z"
    />
  </svg>
);
export default SvgLinkedin;
