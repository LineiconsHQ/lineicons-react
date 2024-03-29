import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitterOriginal = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.3 57.4c23.6 0 36.4-19.5 36.4-36.4 0-.4 0-1.1-.1-1.7 2.5-1.8 4.7-4.1 6.4-6.6-2.4 1.1-4.8 1.7-7.3 2 2.7-1.6 4.7-4.1 5.6-7.1-2.5 1.4-5.1 2.5-8.2 3.1-2.4-2.5-5.6-4.1-9.3-4.1-7.1 0-12.9 5.8-12.9 12.9 0 1 .1 2 .3 3C20.9 21.8 11.5 16.7 5.1 9c-1.1 2-1.7 4.1-1.7 6.4 0 4.5 2.3 8.3 5.8 10.6-2.1-.1-4.1-.7-5.8-1.6v.1c0 6.1 4.4 11.4 10.2 12.6-1.1.3-2.3.4-3.2.4-.8 0-1.7-.1-2.4-.3 1.7 5.1 6.4 8.8 12 8.9-4.4 3.4-9.9 5.5-15.8 5.5-1.2.2-2.2 0-3.2-.1 5.4 3.8 12.1 5.9 19.3 5.9" />
  </svg>
);
export default SvgTwitterOriginal;
