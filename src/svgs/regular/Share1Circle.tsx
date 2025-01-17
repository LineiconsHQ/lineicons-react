import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShare1Circle = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M17.08 2.448a.75.75 0 0 0-1.281.53v2.557a8.987 8.987 0 0 0-8.036 10.851.75.75 0 0 0 1.466 0 7.492 7.492 0 0 1 6.57-5.87v2.49a.75.75 0 0 0 1.28.53l5.014-5.014a.75.75 0 0 0 0-1.06l-5.014-5.014Zm.219 3.806V4.79l3.203 3.203-3.203 3.203V9.73a.75.75 0 0 0-.75-.75 8.973 8.973 0 0 0-7.265 3.696 7.49 7.49 0 0 1 7.265-5.672.75.75 0 0 0 .75-.75Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M12.313 2.229c.703 0 1.39.072 2.051.21a2.246 2.246 0 0 0-.065.54v.983a8.5 8.5 0 1 0 6.508 7.967l1.367-1.367c.091.542.139 1.099.139 1.667 0 5.522-4.478 10-10 10-5.523 0-10-4.478-10-10 0-5.523 4.477-10 10-10Z"
    />
  </svg>
);
export default SvgShare1Circle;
