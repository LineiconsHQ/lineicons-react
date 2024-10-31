import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStarFatHalf2 = ({
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
      d="M13.082 2.375a.75.75 0 0 0-1.423-.332L9.005 7.421l-5.935.863a.75.75 0 0 0-.416 1.279l4.295 4.186-1.014 5.911a.75.75 0 0 0 1.088.79l5.658-2.974a.75.75 0 0 0 .4-.663V2.374Zm-2.907 6.064 1.407-2.85v10.77L7.67 18.416l.824-4.802a.75.75 0 0 0-.216-.664L4.79 9.55l4.822-.701a.75.75 0 0 0 .564-.41Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="m17.64 20.45-3.04-1.598v-1.695l2.393 1.259-.823-4.802a.75.75 0 0 1 .215-.664l3.49-3.4-4.822-.701a.75.75 0 0 1-.454-.245v-3.33l1.06 2.147 5.935.863a.75.75 0 0 1 .415 1.279l-4.294 4.186 1.014 5.911a.75.75 0 0 1-1.088.79Z"
    />
  </svg>
);
export default SvgStarFatHalf2;
