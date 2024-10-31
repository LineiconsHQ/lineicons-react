import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEraser1 = ({
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
      d="M11.044 3.13a2.25 2.25 0 0 1 3.074-.824l4.763 2.75a2.25 2.25 0 0 1 .824 3.073l-4.817 8.342a.75.75 0 0 1-1.024.275l-.217-.125-1.123 1.945a.75.75 0 0 1-1.025.275L5.87 15.59a.75.75 0 0 1-.274-1.025l1.123-1.945-.217-.125a.75.75 0 0 1-.274-1.024l4.816-8.343Zm1.304 12.741-4.33-2.5-.748 1.296 4.33 2.5.748-1.296Zm1.616-.799 4.442-7.693a.75.75 0 0 0-.275-1.024l-4.763-2.75a.75.75 0 0 0-1.025.274l-4.441 7.693.189.109.028.015 5.629 3.25.027.017.19.109ZM5.25 20.5a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5H5.25Z"
    />
  </svg>
);
export default SvgEraser1;
