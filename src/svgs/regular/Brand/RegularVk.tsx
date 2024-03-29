import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVk = ({
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
    <path d="M41.4 1H22.6C5.1 1 1 5.1 1 22.6v19C1 58.9 5.1 63 22.6 63h19C58.9 63 63 58.9 63 41.4V22.6C63 5.1 58.9 1 41.4 1zM51 45.2h-4.5c-1.7 0-2.3-1.4-5.4-4.5-2.7-2.7-3.9-3-4.5-3-.8 0-1.1.1-1.1 1.4v4.1c0 1.1-.3 1.7-3.2 1.7-4.8 0-10-3-13.8-8.3-5.6-7.9-7-13.8-7-15.1 0-.7.1-1.3 1.4-1.3h4.5c1.1 0 1.6.4 2 1.7 2.3 6.5 5.9 12.1 7.5 12.1.6 0 .8-.3.8-1.7v-6.6c-.1-3.1-1.7-3.2-1.7-4.5 0-.4.4-1.1 1.1-1.1h7c1 0 1.3.4 1.3 1.7v8.9c0 1 .4 1.3.7 1.3.6 0 1.1-.3 2.1-1.4 3.2-3.7 5.5-9.2 5.5-9.2.3-.7.8-1.3 2-1.3h4.5c1.4 0 1.7.7 1.4 1.7-.6 2.7-6.1 10.4-6.1 10.4-.4.7-.7 1.1 0 2 .4.7 2.1 2 3.1 3.2 2 2.3 3.4 4.1 3.8 5.4.5 1.7-.1 2.4-1.4 2.4z" />
  </svg>
);
export default SvgVk;
