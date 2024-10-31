import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCake1 = ({
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
      d="M20.25 7.75v-1A2.25 2.25 0 0 0 18 4.5H6a2.25 2.25 0 0 0-2.25 2.25v4.056A2.25 2.25 0 0 0 2 13v5.75c0 .414.336.75.75.75h18.5a.75.75 0 0 0 .75-.75V13a2.25 2.25 0 0 0-1.75-2.194V7.784a.67.67 0 0 0 0-.035ZM6 6h12a.75.75 0 0 1 .75.75v.471l-2.075.673a3 3 0 0 1-1.85 0l-1.437-.466a4.5 4.5 0 0 0-2.776 0l-1.436.466a3 3 0 0 1-1.852 0L5.25 7.221V6.75A.75.75 0 0 1 6 6Zm12.75 2.798v1.952H5.25V8.798l1.612.523a4.5 4.5 0 0 0 2.776 0l1.437-.466a3 3 0 0 1 1.85 0l1.437.466a4.5 4.5 0 0 0 2.776 0l1.612-.523ZM4.25 12.25h15.5a.75.75 0 0 1 .75.75v.83l-2.95.956a3 3 0 0 1-1.85 0l-2.312-.75a4.5 4.5 0 0 0-2.776 0l-2.311.75a3 3 0 0 1-1.852 0L3.5 13.83V13a.75.75 0 0 1 .75-.75Zm16.25 3.157V18h-17v-2.593l2.487.806a4.5 4.5 0 0 0 2.776 0l2.312-.75a3 3 0 0 1 1.85 0l2.312.75a4.5 4.5 0 0 0 2.776 0l2.487-.806Z"
    />
  </svg>
);
export default SvgCake1;
