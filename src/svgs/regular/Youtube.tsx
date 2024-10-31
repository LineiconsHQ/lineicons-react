import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYoutube = ({
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
      d="M21.58 7.194a2.471 2.471 0 0 0-1.773-1.775C18.258 5 12 5 12 5s-6.258 0-7.806.42a2.471 2.471 0 0 0-1.775 1.774C2 8.774 2 12 2 12s0 3.258.42 4.806c.225.871.903 1.549 1.774 1.775C5.742 19 12 19 12 19s6.258 0 7.806-.42a2.471 2.471 0 0 0 1.775-1.773C22 15.258 22 12 22 12s0-3.226-.42-4.806ZM10 15V9l5.194 3L10 15Z"
    />
  </svg>
);
export default SvgYoutube;
