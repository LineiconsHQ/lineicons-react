import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAtlassian = ({
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
      d="M7.892 11.255c-.322-.322-.773-.322-.966.097L2.06 21.114c-.193.354.097.87.548.87h6.797a.624.624 0 0 0 .548-.323c1.45-3.06.548-7.668-2.062-10.406Zm3.609-8.924c-4.704 7.539-.323 13.563 2.545 19.33a.624.624 0 0 0 .548.322h6.797a.602.602 0 0 0 .548-.87S12.822 2.783 12.596 2.332c-.29-.42-.838-.42-1.095 0Z"
    />
  </svg>
);
export default SvgAtlassian;
