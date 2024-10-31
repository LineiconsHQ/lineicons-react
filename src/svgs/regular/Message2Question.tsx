import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessage2Question = ({
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
      d="M10.92 9.712a1.08 1.08 0 1 1 1.698.886c-.27.19-.598.443-.86.76-.267.322-.508.759-.508 1.3a.75.75 0 0 0 1.5 0c0-.074.03-.184.162-.343.135-.162.332-.324.566-.488A2.58 2.58 0 1 0 9.42 9.713a.75.75 0 0 0 1.5 0ZM12 13.916a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M4.75 3.75A2.25 2.25 0 0 0 2.5 6v15.718a.75.75 0 0 0 1.25.559l3.885-3.479H19.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H4.75ZM4 6a.75.75 0 0 1 .75-.75h14.5A.75.75 0 0 1 20 6v10.548a.75.75 0 0 1-.75.75H7.348a.75.75 0 0 0-.5.192L4 20.04V6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessage2Question;
