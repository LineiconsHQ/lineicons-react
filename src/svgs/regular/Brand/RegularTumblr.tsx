import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTumblr = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M50.1 59.1c-1.7 1.7-6 3.9-11.8 3.9-14.6 0-17.9-10.7-17.9-17V28.5h-5.8c-.7 0-1.3-.6-1.3-1.3V19c0-.8.6-1.7 1.4-2 7.7-2.6 10-9.1 10.3-14 .1-1.4.7-2 2-2h8.6c.7 0 1.3.6 1.3 1.3v13.9H47c.7 0 1.3.4 1.3 1.1v9.8c0 .7-.6 1.3-1.3 1.3H36.8v16c0 4.2 3 6.5 8.2 4.4.6-.1 1.1-.4 1.5-.3.4.1.7.4.8 1l2.7 7.7c.3.6.6 1.4.1 1.9Z" />
  </svg>
);
export default SvgTumblr;
