import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBriefcasePlus1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M12.023 8.56a.75.75 0 0 0-.75.75V12h-2.69a.75.75 0 0 0 0 1.5h2.69v2.69a.75.75 0 0 0 1.5 0V13.5h2.691a.75.75 0 0 0 0-1.5h-2.69V9.31a.75.75 0 0 0-.75-.75Z"
    />
    <path
      fill="#323544"
      d="M7.773 5.25A2.25 2.25 0 0 1 10.023 3h4a2.25 2.25 0 0 1 2.25 2.25V6h3a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-14.5a2.25 2.25 0 0 1-2.25-2.25v-9A2.25 2.25 0 0 1 4.773 6h3v-.75Zm7 0a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75V6h5.5v-.75Zm-10 2.25a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-14.5Z"
    />
  </svg>
);
export default SvgBriefcasePlus1;
