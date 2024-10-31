import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlantscale = ({
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
      d="M2 12C2 6.477 6.477 2 12 2c4.06 0 7.556 2.42 9.122 5.897L7.898 21.122a9.997 9.997 0 0 1-1.613-.915L14.492 12H12l-7.071 7.071A9.97 9.97 0 0 1 2 12Zm20 .004L12.003 22c5.52-.002 9.995-4.477 9.997-9.996Z"
    />
  </svg>
);
export default SvgPlantscale;
