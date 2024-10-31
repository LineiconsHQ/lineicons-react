import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonitor = ({
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
      d="M2 6.422a2.25 2.25 0 0 1 2.25-2.25h15.5A2.25 2.25 0 0 1 22 6.422v7.406a2.25 2.25 0 0 1-2.25 2.25h-7v2.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-2.25h-7A2.25 2.25 0 0 1 2 13.828V6.422Zm2.25-.75a.75.75 0 0 0-.75.75v7.406c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V6.422a.75.75 0 0 0-.75-.75H4.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMonitor;
