import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoodreads = ({
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
    <path d="M13.9 49.9H19c.1 0 .4-.1.4.3.8 4.2 3.7 6.6 7.6 7.8 3.2 1 6.6 1 9.9.1 4.1-.8 6.8-3.4 8.2-7.3 1-2.7 1.3-5.4 1.4-8v-6.3h-.1c-.1.1-.1.4-.3.6-2.7 5.2-7.5 8.2-12.8 8.3-12.6.3-20.7-7-21-21.4-.1-3 .1-5.8 1-8.5C15.7 6.8 22.2 1.1 31.9 1 39.3 1 44.2 5.7 46 9.6c.1.1.1.3.3.1V2.3h5.4v40.2c0 9.4-3.2 17.5-12.5 19.7-8.3 2-19.2.6-23.7-6.9-1-1.7-1.5-3.5-1.6-5.4zM31.7 5.4c-6.3-.1-13.3 4.9-14 16.2-.4 7.2 1.8 14.8 8.6 18 3.4 1.6 9 1.8 13.1-1.1 5.8-4.1 7.6-11.7 6.6-18.8-1.1-8.4-5.7-14.3-14.3-14.3z" />
  </svg>
);
export default SvgGoodreads;
