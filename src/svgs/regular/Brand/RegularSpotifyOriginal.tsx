import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpotifyOriginal = ({
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
    <path d="M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31 31-13.8 31-31S49.2 1 32 1zm14.2 44.7c-.6.8-1.7 1.1-2.7.7-7.3-4.5-16.5-5.5-27.2-3.1-1.1.3-2.1-.4-2.3-1.4-.3-1.1.4-2.1 1.4-2.4C27.2 36.8 37.2 38 45.6 43c.9.7 1.2 1.8.6 2.7zm3.8-8.3c-.7 1.1-2.3 1.4-3.2.7-8.3-5.1-21-6.6-30.9-3.5-1.3.4-2.7-.3-3-1.7-.4-1.3.3-2.7 1.7-3 11.3-3.5 25.2-1.7 34.8 4.1.9.7 1.3 2.1.6 3.4zm.3-8.9c-10-5.9-26.5-6.5-36.1-3.5-1.4.4-3.1-.4-3.5-2-.4-1.4.4-3.1 2-3.5 11-3.2 29-2.7 40.6 4.2 1.4.8 1.8 2.7 1.1 3.9-.8 1.3-2.7 1.7-4.1.9z" />
  </svg>
);
export default SvgSpotifyOriginal;
