import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkedin = ({
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
    <path d="M14.6 63H5.7C2.6 63 0 60.5 0 57.5V28c0-3.1 2.5-5.5 5.7-5.5h8.9c3.1 0 5.7 2.5 5.7 5.5v29.5c.1 3-2.5 5.5-5.7 5.5zM5.7 27.4c-.3 0-.6.1-.6.4v29.5c0 .1.1.4.6.4h8.9c.3 0 .6-.1.6-.4V28c0-.1-.3-.4-.6-.4H5.7v-.2zM58.8 63h-9c-3.1 0-5.7-2.5-5.7-5.5V45.3c0-.6-.4-1-1.2-1-.6 0-1.2.4-1.2 1v12.1c0 3.1-2.5 5.5-5.7 5.5h-8.9c-3.1 0-5.7-2.5-5.7-5.5V28c0-3.1 2.5-5.5 5.7-5.5H36c1.9 0 3.5.9 4.5 2.3.4-.1.9-.4 1.2-.6 3.1-1.5 6.6-1.9 9.8-1.5 7 .9 12.4 6.7 12.5 13.7v21.3c.3 2.8-2.2 5.3-5.2 5.3zM43 39.4c3.4 0 6.1 2.8 6.1 6v12.1c0 .1.1.4.6.4h8.9c.3 0 .6-.1.6-.4V36.3c-.1-4.4-3.6-8.2-8.2-8.6-2.3-.3-5 .1-7.3 1.2-1.2.4-2.2 1.2-3.2 1.8l-3.9 2.8V28c0-.1-.1-.4-.6-.4h-8.9c-.3 0-.6.1-.6.4v29.5c0 .1.1.4.6.4h9c.3 0 .6-.1.6-.4V45.3c.2-3.3 2.8-5.9 6.3-5.9zM10.8 21.9C5 21.9.2 17.2.2 11.4S4.8 1 10.8 1s10.6 4.7 10.6 10.5-4.8 10.4-10.6 10.4zm0-15.8c-3.1 0-5.7 2.5-5.7 5.4 0 3.1 2.5 5.4 5.7 5.4s5.7-2.5 5.7-5.4c0-3.1-2.5-5.4-5.7-5.4z" />
  </svg>
);
export default SvgLinkedin;
