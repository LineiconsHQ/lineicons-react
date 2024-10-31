import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownloadCircle1 = ({
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
      d="M11.671 13.63 10.3 12.258a.75.75 0 0 0-1.06 1.061l2.64 2.638a.748.748 0 0 0 1.11-.026l2.613-2.612a.75.75 0 0 0-1.06-1.06l-1.37 1.369V8.56a.75.75 0 0 0-1.5 0v5.07Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2.422 12c0-5.522 4.477-9.999 10-9.999 5.522 0 9.999 4.477 9.999 9.999s-4.477 10-10 10c-5.522 0-10-4.478-10-10Zm10-8.499a8.5 8.5 0 1 0 0 16.999 8.5 8.5 0 0 0 0-16.999Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDownloadCircle1;
