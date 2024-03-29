import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWechat = ({
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
    <path d="M56.5 51.5c3.9-2.8 6.5-7 6.5-11.8C63 31.1 54.7 24 44.3 24s-18.6 7-18.6 15.6S34 55.2 44.3 55.2c2.1 0 4.2-.3 6.1-.8.1-.1.3-.1.6-.1s.7.1 1 .3l4.1 2.4c.1.1.1.1.3.1.3 0 .6-.3.6-.6 0-.1-.1-.3-.1-.4 0-.1-.6-2-.7-3.2v-.4c-.2-.4 0-.8.3-1zM38.1 37.3c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm12.4 0c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1 2.5-2.5 2.5z" />
    <path d="M44.3 22.8h1.3C43.8 13.9 34.5 7 23.4 7 11.1 7.1 1 15.4 1 25.7c0 5.8 3 10.7 7.8 14.1.4.3.6.7.6 1.3 0 .1-.1.3-.1.4-.4 1.4-1 3.7-1 3.8-.3.2-.3.3-.3.6 0 .4.3.7.8.7.1 0 .3-.1.4-.1l4.9-2.8c.3-.1.8-.3 1.3-.3.1 0 .4.1.7.1 2.3.7 4.8 1 7.3 1h1.3c-.4-1.4-.7-3-.7-4.5 0-9.8 9-17.2 20.3-17.2zm-13.4-6.1c1.7 0 3 1.4 3 3s-1.4 3-3 3-3-1.4-3-3 1.3-3 3-3zm-15 6.1c-1.7 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.3 3-3 3z" />
  </svg>
);
export default SvgWechat;
