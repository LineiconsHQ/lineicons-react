import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInjection1 = ({
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
      fillRule="evenodd"
      d="M16.594 2.218a.75.75 0 0 1 1.06 0l1.19 1.19.002.001 2.958 2.959a.75.75 0 1 1-1.06 1.06l-.66-.66-1.707 1.706.707.707a.75.75 0 0 1 0 1.06l-8.276 8.277a2.25 2.25 0 0 1-2.814.299.748.748 0 0 1-.034.036l-1.038 1.038a.75.75 0 0 1-1.06 0l-.335-.335-2.225 2.225a.75.75 0 1 1-1.06-1.06l2.224-2.226-.334-.333a.75.75 0 0 1 0-1.061l1.038-1.038a.793.793 0 0 1 .036-.034 2.25 2.25 0 0 1 .298-2.814l8.277-8.277a.75.75 0 0 1 1.06 0l.708.707 1.706-1.706-.661-.66a.75.75 0 0 1 0-1.061ZM18.315 5 16.61 6.706l.708.707 1.706-1.706L18.316 5Zm-3.302 2.23-.701-.7-7.747 7.746a.75.75 0 0 0 0 1.06l2.121 2.122a.75.75 0 0 0 1.061 0l7.747-7.747-.702-.701-.006-.006-1.768-1.768-.005-.005Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInjection1;
