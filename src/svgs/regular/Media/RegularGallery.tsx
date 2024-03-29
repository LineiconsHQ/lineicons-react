import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGallery = ({
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
    <path d="M23.1 41c3.4 0 6.2-2.8 6.2-6.1 0-3.4-2.8-6.1-6.2-6.1-3.4 0-6.2 2.8-6.2 6.1.1 3.4 2.8 6.1 6.2 6.1zm0-7.8c.9 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6-.9 0-1.7-.7-1.7-1.6.1-.8.8-1.6 1.7-1.6zM49.2 21.4c3.4 0 6.2-2.8 6.2-6.1s-2.8-6.1-6.2-6.1-6.2 2.7-6.2 6.1 2.8 6.1 6.2 6.1zm0-7.7c.9 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6s-1.7-.7-1.7-1.6c0-.9.8-1.6 1.7-1.6z" />
    <path d="M63.3 7.2C63.3 3.8 60.4 1 57 1H33.5c-3.4 0-6.2 2.8-6.2 6.3v14.3H7.5c-3.4 0-6.3 2.8-6.3 6.3v29C1.2 60.2 4 63 7.5 63H31c3.4 0 6.3-2.8 6.3-6.3V42.5H57c3.4 0 6.3-2.8 6.3-6.3v-29zM33.5 5.5H57c1 0 1.8.8 1.8 1.8v23.2L50.9 25c-.9-.6-2.2-.5-2.9.3L43.6 30l-6.7-5c-.2-.1-.4-.2-.5-.3-1-1.7-2.7-2.8-4.6-3.1V7.2c-.1-.9.7-1.7 1.7-1.7zM7.5 26H31c1 0 1.8.8 1.8 1.8V48L27 43.9c-.9-.6-2.2-.5-2.9.3L19.6 49l-6.7-5c-.8-.6-2-.6-2.8.1l-4.4 3.7v-20c0-1 .8-1.8 1.8-1.8zm24.4 32.3-8.7-6.6 2.7-3 6.8 4.7v3.3c0 .7-.3 1.3-.8 1.6zM5.7 56.8v-3.1l5.9-5 13.1 9.9H7.5c-1-.1-1.8-.9-1.8-1.8zm31.5-26 9.5 7.2h-9.5v-7.2zM57 38h-2.8l-7-5.3 2.7-3 8.8 6.2v.3c.1 1-.7 1.8-1.7 1.8z" />
  </svg>
);
export default SvgGallery;
