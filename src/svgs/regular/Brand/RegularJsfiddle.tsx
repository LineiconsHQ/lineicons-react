import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJsfiddle = ({
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
    <path d="M56.3 29.8c-.4-.3-.6-.7-.7-1.1-.3-1.8-.4-3.7-1-5.4-4-11-16.9-15.7-27.1-10-3 1.7-5.4 4-7.2 6.9-.4-.1-.6-.3-.8-.4-3.2-1.4-6.5-1.1-9.5 1-2.8 2-4 4.8-3.5 8.5 0 .3-.1.8-.4 1.1C1.7 33.6 0 39 1.6 44.2 3.2 49.3 8 53 13.2 53.1c3.2-.1 6.6-.1 10-.1 9.2 0 18.3.1 27.7-.1 5.8-.1 10.6-4.1 11.9-9.6 1.1-5.4-1.4-10.7-6.5-13.5zM58.7 47c-2 2.4-4.7 3.8-7.9 3.8-6.2.1-12.6 0-18.8 0 0 .1-17.9 0-18.1 0-4.8 0-8.5-2.1-10.4-6.6s-.4-10 3.8-12.8c1-.7 1.4-1.3 1.1-2.5-.6-3 .4-5.2 3-6.9 2.5-1.7 5.2-1.7 7.9-.3 1.1.6 1.7 1.3 2.4-.3 1.6-3 3.8-5.1 6.6-6.6 10.7-6.1 25.1.8 25.3 14.5 0 .8.3 1.4 1.1 1.7 6.6 3.1 8.4 10.7 4 16zm-9.6-8.9c-.7 3.4-3.8 6.1-7.3 6.1-1.8 0-3.5-.7-4.8-2-3-2.8-7.9-8.2-10.6-10.3-2.3-1.7-4.7-1.4-6.6.4-5.5 4.8 1.7 13.4 7.3 8.5.4-.4.8-1.1 1.4-1.4.8-.6 2.3-.1 1.4 1.1-2 3-5.4 4.2-8.6 3.2S16 39.8 16 36c.1-2.4 1.4-4.8 3.8-6.1s5.1-1.4 7.3.3c5.6 4.2 8.3 9 11.9 11.1 2.7 1.7 5.9.7 7.6-2 3.2-5.4-3.8-11.6-8.6-6.9-.4.4-.7 1-1.3 1.3-1.1.7-2-.4-1.4-1.1 2.3-3.1 5.5-4.5 9.2-3.1 3.4 1.3 5.3 5 4.6 8.6z" />
  </svg>
);
export default SvgJsfiddle;
