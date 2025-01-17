import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileXmark = ({
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
      d="M9.75 20.5V22h-3a2.25 2.25 0 0 1-2.25-2.25V9.621c0-.596.237-1.169.659-1.59l5.367-5.371A2.25 2.25 0 0 1 12.118 2h5.132a2.25 2.25 0 0 1 2.25 2.25v5.5H18v-5.5a.75.75 0 0 0-.75-.75h-5.002l.003 3.998A2.25 2.25 0 0 1 10 9.75H6v10c0 .414.336.75.75.75h3Zm.999-15.941L7.059 8.25h2.942a.75.75 0 0 0 .75-.75l-.002-2.941Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M12.485 12.485a.75.75 0 0 0 0 1.061l3.08 3.079-3.08 3.079a.75.75 0 0 0 1.061 1.06l3.079-3.078 3.078 3.077a.75.75 0 0 0 1.06-1.06l-3.077-3.078 3.077-3.078a.75.75 0 0 0-1.06-1.06l-3.078 3.077-3.079-3.079a.75.75 0 0 0-1.06 0Z"
    />
  </svg>
);
export default SvgFileXmark;
