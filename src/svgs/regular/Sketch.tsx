import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSketch = ({
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
      d="m2.742 8.226-.742 1h3.645l.258-5.258-3.161 4.258Zm14.903-4.742-5.193-.516 5.484 5.968-.29-5.452ZM6.194 10.452l-.452-.871h-3.71l9.097 10.58-4.935-9.71Zm.064-1.226h11.484l-3.29-3.58L12 2.967 6.258 9.226Zm12 .355-5.387 10.613 9.097-10.581h-3.71V9.58Zm.194-5.13-.355-.515.032.71.226 4.58H22l-3.548-4.774Zm-12.226 1-.194 3.452 5.516-5.935-5.193.516-.13 1.968Zm11.645 4.13H6.129l1.742 3.387L12 21.032l5.871-11.451Z"
    />
  </svg>
);
export default SvgSketch;
