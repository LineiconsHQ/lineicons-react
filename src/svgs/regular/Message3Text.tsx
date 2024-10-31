import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessage3Text = ({
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
      d="M6.25 9.773a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.023a.75.75 0 0 0 0 1.5h5a.75.75 0 1 0 0-1.5H7Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2.5 5.531a2.25 2.25 0 0 1 2.25-2.25h14.5a2.25 2.25 0 0 1 2.25 2.25V16.08a2.25 2.25 0 0 1-2.25 2.25h-4.149l-2.499 3.366a.75.75 0 0 1-1.204 0L8.9 18.33H4.75a2.25 2.25 0 0 1-2.25-2.25V5.53Zm2.25-.75a.75.75 0 0 0-.75.75V16.08c0 .414.336.75.75.75h4.527a.75.75 0 0 1 .602.303L12 19.99l2.122-2.857a.75.75 0 0 1 .602-.303h4.526a.75.75 0 0 0 .75-.75V5.53a.75.75 0 0 0-.75-.75H4.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessage3Text;
