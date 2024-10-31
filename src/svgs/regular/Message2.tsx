import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessage2 = ({
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
      d="M2.5 6a2.25 2.25 0 0 1 2.25-2.25h14.5A2.25 2.25 0 0 1 21.5 6v10.548a2.25 2.25 0 0 1-2.25 2.25H7.635L3.75 22.277a.75.75 0 0 1-1.25-.559V6Zm2.25-.75A.75.75 0 0 0 4 6v14.04l2.848-2.55a.75.75 0 0 1 .5-.192H19.25a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H4.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessage2;
