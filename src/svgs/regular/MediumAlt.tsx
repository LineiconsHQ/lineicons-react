import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMediumAlt = ({
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
      d="M7.645 6.322c3.13 0 5.645 2.549 5.645 5.678s-2.548 5.677-5.645 5.677C4.548 17.677 2 15.13 2 12c0-3.13 2.548-5.678 5.645-5.678Zm9 .323c1.549 0 2.807 2.42 2.807 5.355 0 2.967-1.259 5.355-2.807 5.355S13.84 14.935 13.84 12c0-2.936 1.258-5.355 2.806-5.355Zm4.355.58c.548 0 1 2.13 1 4.775 0 2.645-.452 4.774-1 4.774s-1-2.13-1-4.774c0-2.645.452-4.775 1-4.775Z"
    />
  </svg>
);
export default SvgMediumAlt;
