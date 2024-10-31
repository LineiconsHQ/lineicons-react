import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBuildings1 = ({
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
      d="M12.75 14.667a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM13.5 8.583a.75.75 0 0 0 0 1.5h3a.75.75 0 1 0 0-1.5h-3Z"
    />
    <path
      fill="#323544"
      d="M11.5 3.25A2.25 2.25 0 0 0 9.25 5.5v2.25H5.5A2.25 2.25 0 0 0 3.25 10v10c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75V5.5a2.25 2.25 0 0 0-2.25-2.25h-7Zm-2.25 16h-4.5V10a.75.75 0 0 1 .75-.75h3.75v2.25H7.756a.75.75 0 0 0 0 1.5H9.25v2.5H7.756a.75.75 0 0 0 0 1.5H9.25v2.25Zm1.5-6.973a.824.824 0 0 0 0-.054V5.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v13.75h-8.5v-2.973a.824.824 0 0 0 0-.054v-3.946Z"
    />
  </svg>
);
export default SvgBuildings1;
