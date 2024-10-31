import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStarFat = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12 2.125a.75.75 0 0 1 .672.418l2.654 5.378 5.935.863a.75.75 0 0 1 .416 1.279l-4.294 4.186 1.013 5.911a.75.75 0 0 1-1.088.79L12 18.16 6.69 20.95a.75.75 0 0 1-1.088-.79l1.014-5.911-4.295-4.186a.75.75 0 0 1 .416-1.28l5.935-.862 2.654-5.378A.75.75 0 0 1 12 2.125Zm0 2.445L9.843 8.939a.75.75 0 0 1-.564.41l-4.822.7 3.49 3.401a.75.75 0 0 1 .215.664l-.824 4.802 4.313-2.267a.75.75 0 0 1 .698 0l4.312 2.267-.824-4.802a.75.75 0 0 1 .216-.664l3.489-3.4-4.822-.701a.75.75 0 0 1-.564-.41L12 4.569Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStarFat;
