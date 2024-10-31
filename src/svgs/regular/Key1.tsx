import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKey1 = ({
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
      d="m14.986 4.528 2.104 2.104-1.059 1.06-1.043-1.044a.75.75 0 1 0-1.06 1.06l1.043 1.044-2.334 2.334a5.374 5.374 0 1 0 1.06 1.06l6.044-6.043a.75.75 0 1 0-1.06-1.061l-.53.53-2.104-2.104a.75.75 0 0 0-1.06 1.06Zm-2.858 8.098.015.014.015.015a3.873 3.873 0 1 1-.03-.03Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKey1;
