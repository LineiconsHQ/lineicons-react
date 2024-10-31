import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUploadCircle1 = ({
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
      d="M11.673 10.37 10.3 11.742a.75.75 0 0 1-1.06-1.061l2.64-2.638a.748.748 0 0 1 1.11.026l2.614 2.612a.75.75 0 0 1-1.06 1.06l-1.371-1.369v5.068a.75.75 0 0 1-1.5 0v-5.07Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2.422 12c0-5.522 4.477-10 10-10 5.522 0 9.999 4.478 9.999 10s-4.477 9.999-10 9.999c-5.522 0-10-4.477-10-9.999Zm10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUploadCircle1;
