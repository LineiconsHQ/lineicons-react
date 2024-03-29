import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAmazon = ({
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
    <path d="M25.9 35.5c1.1 1.2 2.5 1.9 4.1 1.9.2 0 .5 0 .9-.1.1 0 .2 0 .3-.1 1.8-.5 3.3-1.7 4.2-3.5.4-.8.7-1.6.9-2.4.2-.7.3-1.4.3-2.1v-3.1c0-1.2-1-2.3-2.3-2.3-2 0-3.4.1-4.4.4-3.5 1-5.5 3.5-5.5 7 .1 1.8.5 3.1 1.5 4.3-.1 0-.1 0 0 0zm4-2.6s.1 0 0 0m1.3-4.2c.2-.1.5-.1.9-.2v.8c0 .2-.1.7-.2 1.1-.1.4-.3.8-.5 1.3-.4.8-.9 1.1-1.2 1.2-.1 0-.2 0-.4.1-.2 0-.3-.1-.5-.3-.2-.3-.3-.7-.3-1.3 0-1.3.3-2.2 2.2-2.7z" />
    <path d="M15.6 24.6c-1.6 2.3-2.4 5.1-2.4 8.2 0 4.1 1.2 7.3 3.6 9.5 2.3 2.2 5.4 3.4 9 3.4 2.2 0 4-.2 5.6-.7 1.9-.6 3.8-1.7 5.7-3.3 1.1 1.2 2.3 2.7 2.7 3 .1.1.3.2.5.3.6.3 1.2.4 1.8.4.9 0 1.6-.2 2.2-.7.3-.2 2-1.7 3.2-2.8 3.1-2.8 3.5-3.3 3.5-4.4 0-.7-.2-1.4-.7-2.1 0-.1-.1-.2-.2-.2-.6-.8-1-1.4-1.4-1.8 0 0-.2-.3-.5-1.1-.2-.6-.3-1.3-.3-2.1V16c0-.6 0-1.3-.1-1.7-.1-1.2-.2-1.6-.3-1.9-.8-5-5.3-10.3-15.2-10.6-.2 0-6.2-.2-11.4 2.5-3.1 1.6-5.4 5.2-6.4 9.6-.1.5-.1.8-.1 1 0 1.7 1.1 2.9 2.8 3.3h.2l6 .7c-.5.2-.9.3-1.4.5-2.7 1.2-4.9 2.9-6.4 5.2zM31 21.9c.9-.1 2.2-.2 4-.4l1.1-.1c1.2-.1 2.1-1.1 2.1-2.2v-1c0-3.1-.4-5.1-1.2-6.3C35.6 10 33.9 9 31.6 9c-.6 0-3.1 0-5.5 1.9-1.2 1-2.1 2.2-2.5 3.7l-4.3-.5c.7-2.7 2.1-4.8 3.8-5.7 4.2-2.2 9.1-2 9.2-2 9.2.3 10.8 5.4 11.1 6.9v.2s.1.3.1 1.3c.1.7.1 1.2.1 1.3v14.2c0 1.3.2 2.5.5 3.5.4 1.2.8 2 1.3 2.6.2.2.4.5.7.9-1.1 1-2.9 2.7-3.9 3.5-1-1.1-2.8-3.2-3.1-3.6-.4-.5-1-.9-1.6-.9-.7-.1-1.4.2-1.8.7-1.9 2-3.7 3.3-5.4 3.8-1.2.3-2.6.5-4.3.5-2.4 0-4.4-.7-5.9-2.2-1.5-1.4-2.2-3.4-2.2-6.2 0-2.2.5-4.1 1.6-5.6 1-1.5 2.5-2.6 4.5-3.4 1.7-1.1 4.2-1.7 7-2zm-4.3-3.8c.5-.5.9-1.3 1.1-2.1.2-.7.5-1.2 1-1.6 1.2-.9 2.5-.9 2.5-.9h.2c.8 0 1.3.3 1.8.9 0 0 .3.6.4 2.7-1.4.1-2.4.2-3.2.3-1.4.2-2.7.4-3.8.7zM53.1 51.8c-.1.1-.3.1-.7.3-.3.1-.5.2-.7.3C45.4 54.8 39 56 32.6 56c-9.7 0-18.6-2.4-26.9-7.1-.3-.2-.6-.2-.8.1-.1.1-.1.2-.1.3 0 .1.1.3.3.5 3.6 3.3 7.7 5.8 12.3 7.6C21.9 59 26.8 60 32 60c3.3 0 6.7-.5 10.3-1.4 3.5-1 6.7-2.2 9.5-3.9 1-.5 1.7-1.1 2.2-1.5.5-.3.5-.7.3-1.1-.3-.4-.7-.5-1.2-.3z" />
    <path d="M58.9 48.4c-.3-.3-1.2-.6-2.7-.7-.3-.1-.6-.1-1-.1-1.2 0-2.4.2-3.7.5-.7.2-1.6.5-2.4 1.2-.1.1-.2.3-.3.4 0 .1-.1.1-.1.1 0 .1 0 .1.1.2s.2.1.4.1c.7-.1 1.4-.2 2.2-.3.7-.1 1.4-.1 2-.1 1.5 0 2.4.2 2.8.6.1.1.2.4.2.8 0 1.1-.6 3.1-1.8 6-.1.3-.1.5.1.5.1 0 .1.1.2.1s.3-.1.5-.2c1.1-1 2-2.2 2.7-3.8.7-1.6 1-2.9 1-4.1v-.3c0-.4 0-.6-.2-.9z" />
  </svg>
);
export default SvgAmazon;
