import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLine = ({
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
    <path d="M63 27.7C63 13.8 49 2.4 32 2.4S1 13.7 1 27.7c0 12.4 11 22.8 25.9 24.8 1 .1 2.4.7 2.7 1.5.3.7.1 2 .1 2.8 0 0-.4 2.3-.4 2.7-.1.7-.6 3.1 2.7 1.5 3.2-1.4 17.8-10.6 24.4-18 4.5-4.8 6.6-9.8 6.6-15.3zM21 35c0 .3-.3.6-.6.6h-8.7c-.1 0-.3-.1-.4-.1-.1-.1-.1-.3-.1-.4V21.5c0-.3.3-.6.6-.6h2.1c.3 0 .6.3.6.6v10.7h5.9c.3 0 .6.3.6.6V35zm5.2 0c0 .3-.3.6-.6.6h-2.1c-.3 0-.6-.3-.6-.6V21.5c0-.3.3-.6.6-.6h2.1c.3 0 .6.3.6.6V35zm15.1 0c0 .3-.3.6-.6.6h-2.2c-.1 0-.1-.1-.1-.1L32 27.1v8c0 .3-.3.6-.6.6h-2.1c-.3 0-.6-.3-.6-.6V21.6c0-.3.3-.6.6-.6h2.1l.1.1 6.2 8.3v-8c0-.3.3-.6.6-.6h2.4c.3 0 .6.3.6.6V35zm12-11.3c0 .3-.3.6-.6.6h-5.9v2.3h5.9c.3 0 .6.3.6.6v2.1c0 .3-.3.6-.6.6h-5.9V32h5.9c.3 0 .6.3.6.6v2.1c0 .3-.3.6-.6.6H44c-.1 0-.3-.1-.4-.1-.1-.1-.1-.3-.1-.4V21.3c0-.1.1-.3.1-.4.1-.1.3-.1.4-.1h8.7c.3 0 .6.3.6.6v2.3z" />
  </svg>
);
export default SvgLine;
