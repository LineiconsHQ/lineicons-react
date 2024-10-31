import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAmd = ({
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
      d="M6.697 14.068H5.588l-.34-.818H3.4l-.31.818H2l1.667-4.133H4.86l1.836 4.133ZM4.28 10.922l-.606 1.606h1.273l-.667-1.606Zm6.447-.987h.897v4.133h-1.03v-2.582l-1.115 1.297H9.32l-1.115-1.297v2.582h-1.03V9.935h.897l1.327 1.533 1.327-1.533Zm3.508 0c1.51 0 2.285.939 2.285 2.072 0 1.188-.751 2.061-2.4 2.061h-1.71V9.935h1.825Zm-.794 3.376h.673c1.036 0 1.346-.704 1.346-1.31 0-.709-.382-1.309-1.358-1.309h-.66v2.619Zm5.13-2.396-1.3-1.3H22v4.73l-1.3-1.299v-2.131h-2.13Zm-.002.26-1.338 1.338v1.872h1.872l1.338-1.337h-1.872v-1.873Z"
    />
  </svg>
);
export default SvgAmd;
