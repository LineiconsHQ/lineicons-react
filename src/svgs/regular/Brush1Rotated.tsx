import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrush1Rotated = ({
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
      d="M10.888 2.53a2.25 2.25 0 0 1 3.182 0l7.425 7.425a2.25 2.25 0 0 1 0 3.182L14.07 20.56a2.25 2.25 0 0 1-3.182 0L8.767 18.44l-1.945 1.945a2.25 2.25 0 1 1-3.182-3.182l1.945-1.945-2.121-2.12a2.25 2.25 0 0 1 0-3.182l7.424-7.425Zm2.121 1.06a.75.75 0 0 0-1.06 0L6.645 8.895l8.486 8.486 5.303-5.304a.75.75 0 0 0 0-1.06l-3.713-3.713-1.237 1.237a.75.75 0 1 1-1.06-1.06l1.237-1.238-1.06-1.06-3.006 3.005a.75.75 0 0 1-1.06-1.06L13.54 4.12l-.53-.53Zm1.06 14.85L5.586 9.955l-1.06 1.06a.75.75 0 0 0 0 1.06l7.424 7.425a.75.75 0 0 0 1.06 0l1.06-1.06Zm-7.424-2.122-1.944 1.945a.75.75 0 0 0 1.06 1.06l1.945-1.944-1.06-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBrush1Rotated;
