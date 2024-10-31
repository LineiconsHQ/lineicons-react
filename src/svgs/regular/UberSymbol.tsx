import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUberSymbol = ({
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
      d="M4.364 3h15.272C20.39 3 21 3.61 21 4.364v15.272C21 20.39 20.39 21 19.636 21H4.364C3.61 21 3 20.39 3 19.636V4.364C3 3.61 3.61 3 4.364 3Zm2.21 8.454h3.79v-.818c0-.15.122-.272.273-.272h2.727c.15 0 .273.122.273.272v2.728c0 .15-.122.272-.273.272h-2.727a.273.273 0 0 1-.273-.272v-.819h-3.79a5.455 5.455 0 1 0 0-1.09Z"
    />
  </svg>
);
export default SvgUberSymbol;
