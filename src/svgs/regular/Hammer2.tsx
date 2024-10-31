import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHammer2 = ({
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
      d="m13.374 4-.098-.593a.787.787 0 0 0-1.553 0L11.624 4h-4.96a.75.75 0 0 0-.75.75v4.183c0 .415.336.75.75.75h3.71l-.538 9.945A2.25 2.25 0 0 0 12.082 22h.834a2.25 2.25 0 0 0 2.246-2.372l-.538-9.945h3.71a.75.75 0 0 0 .75-.75V8.75A4.75 4.75 0 0 0 14.336 4h-.96Zm-.252 5.683.543 10.026a.75.75 0 0 1-.75.79h-.833a.75.75 0 0 1-.748-.79l.542-10.026h1.246Zm4.414-1.5H7.414V5.5h6.921a3.251 3.251 0 0 1 3.2 2.683Z"
    />
  </svg>
);
export default SvgHammer2;
