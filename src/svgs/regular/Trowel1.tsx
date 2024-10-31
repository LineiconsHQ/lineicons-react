import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrowel1 = ({
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
      d="M18.55 3.115c1.746-.565 3.397 1.086 2.833 2.832l-2.44 7.553c-.517 1.6-2.543 2.089-3.732.9l-2.027-2.027-1.531 1.531c.49.86.37 1.973-.364 2.707L7.56 20.34a2.25 2.25 0 0 1-3.181 0l-.219-.219a2.25 2.25 0 0 1 0-3.182l3.73-3.73a2.25 2.25 0 0 1 2.703-.365l1.532-1.532-2.026-2.025c-1.19-1.19-.701-3.215.9-3.732l7.552-2.44Zm-4.305 8.197 2.026 2.027a.75.75 0 0 0 1.244-.3l2.44-7.553a.75.75 0 0 0-.944-.944l-7.553 2.44a.75.75 0 0 0-.3 1.244l2.026 2.026 1.189-1.189a.75.75 0 0 1 1.06 1.06l-1.188 1.19ZM10.01 14.27a.75.75 0 0 0-1.061 0L5.219 18a.75.75 0 0 0 0 1.06l.22.22a.75.75 0 0 0 1.06 0l3.73-3.73a.75.75 0 0 0 0-1.06l-.22-.22Z"
    />
  </svg>
);
export default SvgTrowel1;
