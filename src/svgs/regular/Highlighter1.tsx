import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHighlighter1 = ({
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
      d="M11.228 17.788a.75.75 0 0 1-.53-.22l-.177-.176-1.591 1.59a1.75 1.75 0 0 1-1.844.406.75.75 0 0 1-.1.125l-.364.364a.75.75 0 0 1-.682.204l-2.345-.483a.75.75 0 0 1-.38-1.265l1.296-1.295a.75.75 0 0 1 .125-.1 1.75 1.75 0 0 1 .405-1.844l1.59-1.591-.176-.177a.75.75 0 0 1 0-1.06L14.94 3.78a2.25 2.25 0 0 1 3.182 0l2.121 2.121a2.25 2.25 0 0 1 0 3.182l-8.485 8.486a.75.75 0 0 1-.53.22ZM9.46 16.331l-1.768-1.767-1.59 1.59a.25.25 0 0 0 0 .354l1.414 1.414a.25.25 0 0 0 .353 0l1.591-1.59Zm1.591-.53.014.014.163.163 7.955-7.955a.75.75 0 0 0 0-1.06L17.06 4.84a.75.75 0 0 0-1.06 0l-7.955 7.955.163.163.014.014L11.05 15.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHighlighter1;
