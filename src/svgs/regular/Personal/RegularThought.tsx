import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThought = ({
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
    <path d="M25.5 44.2c-4.9 0-9.6-2.5-12.4-6.6C8 35 4.8 29.8 4.8 24.2c0-8.3 6.8-15.1 15.1-15.2.7 0 1.4 0 2.1.1C24.5 4 29.7.7 35.5.7c6.7 0 12.6 4.5 14.4 10.9 5.6 2.3 9.3 7.7 9.3 13.9 0 8.3-6.7 15-15 15-2.5 0-4.9-.6-7.1-1.8-2.9 3.4-7.1 5.4-11.6 5.5zm-5.6-30.7c-5.8.1-10.6 4.8-10.6 10.7 0 4.1 2.5 7.9 6.2 9.6.4.2.7.5 1 .9 1.9 3.1 5.3 5 8.9 5 3.7-.1 7.1-2 9.1-5.1.3-.5.9-.9 1.5-1 .6-.1 1.3 0 1.8.4 1.9 1.4 4.1 2.2 6.4 2.2 5.8 0 10.5-4.7 10.5-10.5 0-4.7-3-8.7-7.4-10.1-.8-.2-1.4-.9-1.5-1.7-1-4.9-5.3-8.5-10.3-8.5-4.5 0-8.5 2.9-10 7.2-.4 1.1-1.6 1.8-2.7 1.5-1-.5-2-.6-2.9-.6zM40.7 56c-3.6 0-6.6-3-6.6-6.6s3-6.6 6.6-6.6 6.6 3 6.6 6.6-2.9 6.6-6.6 6.6zm0-8.7c-1.2 0-2.1.9-2.1 2.1 0 1.2.9 2.1 2.1 2.1s2.1-.9 2.1-2.1c.1-1.2-.9-2.1-2.1-2.1zM52.6 63.3c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4c1.5 0 2.9.6 3.9 1.6S58 56.5 58 58v.2c-.2 2.8-2.5 5.1-5.4 5.1zm0-6.3c-.5 0-.9.4-.9.9s.4.9.9.9.8-.4.9-.9c0-.3-.1-.4-.2-.5-.1-.2-.4-.4-.7-.4z" />
  </svg>
);
export default SvgThought;
