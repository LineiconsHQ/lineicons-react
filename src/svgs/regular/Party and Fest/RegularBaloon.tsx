import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBaloon = ({
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
    <path d="M41.2 1.3c-4.8 0-9.1 2.9-11.6 7.6-1.8-.9-3.7-1.4-5.8-1.4C15.6 7.4 9 15.3 9 25c0 8.7 5.4 18.3 12.9 19.7-.4 1.1-.7 2.2-.9 2.8-.7 2.4-.1 4.7.5 6.8.6 2.3 1 3.7.2 5-.7 1-.4 2.4.6 3.1.4.3.8.4 1.2.4.7 0 1.4-.4 1.9-1 2-3 1.1-6.1.4-8.6-.4-1.6-.9-3.1-.5-4.3.2-.8 1-3 1.4-4.3 4.1-1.2 7.5-5 9.5-9.5.6.3 1.1.6 1.7.8 0 .1-.1.2-.1.3-.5 1.4-1.1 3-1.3 3.8-.7 2.4-.1 4.7.5 6.8.6 2.3 1 3.7.2 5-.7 1-.4 2.4.6 3.1.4.3.8.4 1.2.4.7 0 1.4-.4 1.9-1 2-3 1.1-6.1.4-8.6-.4-1.6-.9-3.1-.5-4.3.2-.6.8-2.3 1.2-3.5.2-.5.4-1 .5-1.4.5-.1.9-.2 1.4-.3 6.8-2.1 11-11.1 11-18.3.1-9.3-6.1-16.6-13.7-16.6zM23.8 40.4c-5.2 0-10.2-7.6-10.2-15.4 0-7.2 4.6-13 10.2-13S34 17.8 34 25c0 7.7-5.1 15.4-10.2 15.4zm18.9-8.8c-1 .3-2 .3-2.9 0-.6-.2-1.3-.5-1.9-1 .5-1.8.7-3.7.7-5.6 0-5.4-2.1-10.2-5.3-13.4C35 8 38 5.8 41.3 5.8c5.1 0 9.3 5.3 9.3 11.8-.1 6.1-3.8 12.7-7.9 14z" />
  </svg>
);
export default SvgBaloon;
