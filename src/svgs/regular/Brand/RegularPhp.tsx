import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhp = ({
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
    <path d="M32 17.4c16.6 0 29.3 6.9 29.3 14.7S48.6 46.9 32 46.9s-29.3-7-29.3-14.8S15.4 17.4 32 17.4m0-1.7C14.8 15.7 1 23 1 32s13.8 16.2 31 16.2S63 41 63 32 49.2 15.7 32 15.7zm-9.9 15.1c-.7 3.9-3.5 3.5-6.8 3.5l1.4-6.9c3.7 0 6.1-.4 5.4 3.4zM10.4 41.2H14l.8-4.4c3.9 0 6.5.3 8.7-1.8 2.5-2.4 3.2-6.5 1.4-8.5-1-1.1-2.4-1.7-4.5-1.7h-6.9l-3.1 16.4zm18.1-20.7H32l-.8 4.4c3 0 5.9-.1 7.3 1.1 1.4 1.4.7 3-.7 11h-3.7c1.4-7.6 1.7-8.3 1.3-8.9-.4-.6-2-.6-4.8-.6L28.8 37h-3.5l3.2-16.5zm21.4 10.3c-.7 3.9-3.5 3.5-6.8 3.5l1.4-6.9c3.7 0 6.1-.4 5.4 3.4zM38.2 41.2h3.5l.8-4.2c4.2 0 6.5.3 8.7-1.8 2.5-2.4 3.2-6.5 1.4-8.5-1-1.1-2.4-1.7-4.5-1.7h-6.9l-3 16.2z" />
  </svg>
);
export default SvgPhp;
