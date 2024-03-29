import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnlink = ({
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
    <path d="m29.7 13.2-8.1-8.1C17.1.6 9.7.6 5.1 5.1 3 7.4 1.8 10.3 1.8 13.4c0 3.1 1.2 6 3.4 8.2l8 8.1c2.3 2.3 5.3 3.4 8.2 3.4 3 0 6-1.1 8.2-3.4 2.2-2.2 3.4-5.1 3.4-8.2.1-3.1-1.1-6-3.3-8.3zM16.4 26.5l-8-8.1C7 17 6.3 15.2 6.3 13.3c0-1.9.7-3.7 2.1-5.1 1.4-1.4 3.2-2.1 5.1-2.1 1.8 0 3.7.7 5.1 2.1l8.1 8c1.3 1.4 2.1 3.2 2.1 5.1 0 1.2-.3 2.4-.9 3.5l-2.5-2.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l2.3 2.3c-2.8 1.4-6 .9-8.1-1.3zM58.9 42.3l-8.1-8.1c-4.5-4.5-12-4.5-16.5 0-2.2 2.2-3.4 5.1-3.4 8.2s1.2 6 3.4 8.2l8 8.1c2.3 2.3 5.3 3.4 8.2 3.4 3 0 6-1.1 8.2-3.4 2.2-2.2 3.4-5.1 3.4-8.2.2-3-1-5.9-3.2-8.2zm-3.3 13.3c-2.8 2.8-7.4 2.8-10.1 0l-8-8.1c-1.4-1.4-2.1-3.2-2.1-5.1 0-1 .2-2 .6-2.9l2.2 2.3c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L39 36.3c1.1-.6 2.3-.9 3.5-.9 1.8 0 3.7.7 5.1 2.1l8.1 8c1.3 1.4 2.1 3.2 2.1 5.1-.1 1.9-.8 3.7-2.2 5zM39.7 16.4c1.2 0 2.3-1 2.3-2.3V6.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v7.7c0 1.2 1 2.2 2.3 2.2zM47.6 24.4c0 1.2 1 2.3 2.3 2.3h7.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.6c-1.3 0-2.3 1-2.3 2.3zM41.8 20.6c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l6.5-6.6c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-6.5 6.6c-.9.9-.9 2.3 0 3.2zM24.4 47.6c-1.2 0-2.3 1-2.3 2.3v7.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-7.7c-.1-1.3-1.1-2.3-2.3-2.3zM13.9 39.7c0-1.2-1-2.3-2.3-2.3H6.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.1c1.3-.1 2.3-1.1 2.3-2.3zM16.9 42.3l-6.5 6.5c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l6.5-6.5c.9-.9.9-2.3 0-3.2-.9-.9-2.4-.9-3.2 0z" />
  </svg>
);
export default SvgUnlink;
