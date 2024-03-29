import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJava = ({
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
    <path d="M42.4 38.9c1.1-.8 2.8-1.5 2.8-1.5s-4.6.8-9.3 1.3c-5.7.3-11.8.5-14.9 0-7.3-1 3.9-3.7 3.9-3.7s-4.4-.3-9.9 2.4c-6.2 3 15.9 4.4 27.4 1.5zm-10.2-4c-2.4-5.2-10.1-9.7 0-17.6 12.5-10 6-16.3 6-16.3 2.7 10.3-9.2 13.4-13.4 19.7-2.9 4.2 1.5 8.9 7.4 14.2zM46 13.7s-21.3 5.4-11.1 17c3 3.4-.8 6.5-.8 6.5s7.6-3.9 4.1-8.9c-3.2-4.6-5.8-6.9 7.8-14.6zm-.7 32.6c-.1.1-.1.1-.1.3 15.5-4.1 9.9-14.5 2.4-11.8-.4.1-.8.4-1 .8.4-.1.8-.3 1.4-.4 3.5-.7 8.9 5.1-2.7 11.1zm5.6 7.6s1.7 1.4-2 2.5c-7 2.1-29.1 2.7-35.3.1-2.3-1 2-2.4 3.2-2.7 1.4-.3 2.1-.1 2.1-.1-2.4-1.7-15.9 3.4-6.8 4.8 24.9 4.2 45.3-1.6 38.8-4.6zm-27-5c-9.4 2.7 5.8 8.2 17.9 3-1.1-.4-2.4-1.1-3.4-1.7-5.5 1.1-7.9 1.1-12.8.6-4.1-.5-1.7-1.9-1.7-1.9zm21.8 11.8c-9.4 1.7-21.4 1.5-28.3.4 0 0 1.4 1.1 8.7 1.7 11.1.7 28.3-.4 28.7-5.8 0 0-.7 2.2-9.1 3.7zm-5.4-17c-7.2 1.4-11.4 1.4-16.6.8-4.1-.4-1.4-2.4-1.4-2.4-10.4 3.5 5.8 7.5 20.6 3.1-.9-.3-1.7-.8-2.6-1.5z" />
  </svg>
);
export default SvgJava;
