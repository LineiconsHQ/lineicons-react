import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPartySpray = ({
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
      d="M10.5 2.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .707.5H14A.75.75 0 0 1 14 4h-.5v.917a6.753 6.753 0 0 1 5.25 6.583v8.25A2.25 2.25 0 0 1 16.5 22h-9a2.25 2.25 0 0 1-2.25-2.25V11.5c0-3.212 2.244-5.9 5.25-6.583V2.75ZM6.75 11.5v.75h10.5v-.75a5.25 5.25 0 1 0-10.5 0Zm10.5 2.25H6.75v6c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-6Z"
    />
  </svg>
);
export default SvgPartySpray;
