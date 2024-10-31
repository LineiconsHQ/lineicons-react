import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGlassJuice1 = ({
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
      d="M13.773 3.936a.75.75 0 0 1 .68-.436h3.041a.75.75 0 1 0 0-1.5h-3.04a2.25 2.25 0 0 0-2.043 1.307l-.897 1.943H5.625a.75.75 0 0 0-.746.823L6.246 19.97A2.25 2.25 0 0 0 8.485 22h7.03a2.25 2.25 0 0 0 2.24-2.03L19.12 6.073a.75.75 0 0 0-.746-.823h-5.209l.607-1.314ZM11.977 6.75H17.548l-1.286 13.073a.75.75 0 0 1-.747.677h-7.03a.75.75 0 0 1-.747-.677L6.452 6.75h5.525Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGlassJuice1;
