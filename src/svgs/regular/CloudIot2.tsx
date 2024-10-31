import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudIot2 = ({
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
      d="M8.613 2.158a5.073 5.073 0 0 1 4.965 1.46 3.96 3.96 0 0 1 5.666 4.127 4.42 4.42 0 0 1-2.464 8.088h-.282v2.416c0 .414.336.75.75.75h.49c.229-.303.592-.5 1-.5h.01a1.25 1.25 0 0 1 0 2.5h-.01c-.409 0-.772-.196-1-.5h-.49a2.25 2.25 0 0 1-2.25-2.25v-2.416h-2.25v3.909a1.25 1.25 0 0 1-.74 2.257h-.01a1.25 1.25 0 0 1-.75-2.25v-3.916h-2.25v2.416a2.25 2.25 0 0 1-2.25 2.25h-.49c-.227.304-.59.5-1 .5h-.01a1.25 1.25 0 1 1 0-2.5h.01c.41 0 .772.197 1 .5h.49a.75.75 0 0 0 .75-.75v-2.416h-.282a4.42 4.42 0 0 1-2.39-8.136 5.076 5.076 0 0 1 3.787-5.54Zm-.328 12.175h3.677a.739.739 0 0 1 .073 0h3.677a.739.739 0 0 1 .073 0h.996a2.92 2.92 0 0 0 1.282-5.542.75.75 0 0 1-.387-.895 2.46 2.46 0 0 0-3.82-2.697.75.75 0 0 1-1.063-.172 3.576 3.576 0 0 0-6.405 2.888.75.75 0 0 1-.41.855 2.92 2.92 0 0 0 1.238 5.563h.996a.742.742 0 0 1 .073 0Z"
    />
  </svg>
);
export default SvgCloudIot2;