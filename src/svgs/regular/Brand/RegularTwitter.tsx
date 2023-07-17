import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitter = ({
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
    <path d="M21.4 56.8c-6.7 0-13.2-1.9-18.6-5.6-.9-.6-1.2-1.7-.9-2.7.4-1 1.4-1.6 2.4-1.4.8.1 1.6.2 2.4.2 2.9 0 5.7-.6 8.3-1.7-3.2-1.6-5.8-4.4-6.9-8-.2-.7-.1-1.4.3-2C5.6 33 4 29.4 4 25.5v-.1c0-.8.4-1.5 1.1-1.9.1-.1.2-.1.3-.2-.9-1.8-1.4-3.9-1.4-5.9 0-2.5.6-4.8 1.8-6.8.4-.6 1-1 1.8-1.1.7-.1 1.5.3 1.9.8C14.3 16.2 21.2 20 28.6 21v-.1c0-7.5 6.1-13.6 13.6-13.6 3.3 0 6.4 1.2 8.9 3.4 1.1-.4 2.3-1.2 3.5-1.9.6-.4 1.2-.8 1.8-1.1.7-.4 1.6-.4 2.4.1s1.1 1.3 1 2.1c-.1.6-.3 2-.7 3.5h.4c.9-.2 1.8.2 2.3 1 .5.8.5 1.7 0 2.5-1.4 2.1-3.5 3.5-5.4 4.8-.2.1-.4.3-.5.4v.3C56 39.2 43 56.8 21.4 56.8zM12.8 51c2.7.8 5.6 1.2 8.6 1.2 18.8 0 30.1-15.3 30.1-30.1v-1.2c-.1-.8.2-1.6.9-2.1.5-.4 1.1-.8 1.6-1.2l.9-.6c-.5-.2-.9-.7-1.1-1.2-.2-.5-.2-1.1 0-1.6-.9.4-1.8.7-2.7.9-.7.1-1.5-.1-2-.7-1.8-1.9-4.1-2.9-6.6-2.9-5 0-9.1 4.1-9.1 9.1 0 .6.1 1.3.2 2.1.1.7 0 1.4-.5 1.9s-1.1.8-1.8.8c-8.5-.4-16.5-3.9-22.5-9.8-.1.5-.1 1-.1 1.5 0 3.1 1.5 5.9 4.1 7.6.8.6 1.2 1.6.9 2.6-.3 1-1.2 1.6-2.2 1.6-.7 0-1.5-.1-2.2-.3 1.1 2.8 3.6 5 6.7 5.6 1 .2 1.8 1.1 1.8 2.2s-.7 2-1.7 2.2c-.6.2-1.3.3-1.8.4 1.7 2 4.1 3.2 6.8 3.2 1 0 1.8.6 2.1 1.5.3.9 0 1.9-.8 2.5-3.1 2.4-6.2 4-9.6 4.8z" />
  </svg>
);
export default SvgTwitter;