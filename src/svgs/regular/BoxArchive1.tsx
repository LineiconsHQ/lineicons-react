import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBoxArchive1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M10 11.565a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
    />
    <path
      fill="#323544"
      d="M2 6.064a2.25 2.25 0 0 1 2.25-2.25h15.5A2.25 2.25 0 0 1 22 6.064v1a2.25 2.25 0 0 1-1.25 2.017v9.983a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25V9.081A2.25 2.25 0 0 1 2 7.064v-1Zm2.75 3.25v9.75c0 .415.336.75.75.75h13a.75.75 0 0 0 .75-.75v-9.75H4.75Zm15.75-2.25v-1a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v1c0 .415.336.75.75.75h15.5a.75.75 0 0 0 .75-.75Z"
    />
  </svg>
);
export default SvgBoxArchive1;
