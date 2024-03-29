import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogleWallet = ({
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
    <path d="M22.7 14.1c5.2 8.5 8.9 15.6 11.7 22.5-1.1 4.7-2.7 9.2-4.4 13.5-1.8-7.3-3.7-14.1-7.8-20.6.9-4.8.3-10 .5-15.4zM16 24.3H3.2c-.8 0-1.4 1.1-.8 1.7 5.8 7.6 9.9 16.2 12.7 25.9h14.4c-2.3-9.7-5.4-18.5-11.4-26.8-.6-.4-1.3-.8-2.1-.8zM22.7 12c9.4 15.1 18 32.6 19.2 51h15.6C55.8 44 48 26.2 37.7 12h-15zm34.8-9.4c-.3-1-1.1-1.6-2.1-1.6H43.2c-.7 0-1.3.7-1.1 1.4 1.8 6.3 3.1 13.2 3.7 20.3 6.6 11.8 11 24.7 12.5 37.3 2.3-8.3 3.5-18.5 3.5-28 0-10.1-1.6-20-4.3-29.4z" />
  </svg>
);
export default SvgGoogleWallet;
