import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAmazonOriginal = ({
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
    <path d="M56 46.2C48.4 49.4 40.1 51 32.6 51c-11 .1-21.8-3-30.6-8.2-.7-.4-1.4.3-.7 1 8 7.3 18.7 11.7 30.6 11.7 8.5 0 18.3-2.7 25.1-7.6 1.2-.9.2-2.2-1-1.7z" />
    <path d="M62.7 42.4c-.7-1-7-1.7-11 1-.6.4-.4 1 .1 1 2.1-.3 7-.8 7.9.3s-1 5.6-1.7 7.7c-.3.6.3.8.8.4 3.8-3.1 4.8-9.5 3.9-10.4zM35.1 20.7c-3.2.3-7.6.6-10.6 2-3.5 1.5-6.1 4.6-6.1 9.2 0 5.9 3.7 8.9 8.5 8.9 3.9 0 6.2-1 9.3-4.1 1 1.4 1.4 2.3 3.2 3.8.4.1 1 .1 1.4-.1 1.1-1 3.2-2.8 4.4-3.7.4-.4.4-1 0-1.4-1-1.4-2.1-2.5-2.1-5.2v-8.9c0-3.7.3-7.2-2.5-9.7-2.1-2.1-5.8-2.8-8.5-2.8-5.4 0-11.3 2-12.5 8.6-.1.7.4 1.1.7 1.1l5.4.6c.6 0 .8-.6 1-1 .4-2.3 2.3-3.4 4.5-3.4 1.1 0 2.5.4 3.2 1.4.7 1.1.7 2.8.7 4.1v.6zM34 32.4c-.8 1.5-2.3 2.5-3.8 2.5-2.1 0-3.5-1.7-3.5-4.1 0-4.8 4.4-5.6 8.3-5.6v1.3c.1 2 .1 3.9-1 5.9z" />
  </svg>
);
export default SvgAmazonOriginal;
