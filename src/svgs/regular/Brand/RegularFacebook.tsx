import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebook = ({
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
    <path d="M36.2 63.8h-7.8c-2 0-3.6-1.7-3.6-3.8V36.2h-6.4c-2 0-3.6-1.7-3.6-3.8v-6.9c0-2.1 1.6-3.8 3.6-3.8h6.2v-6.3C24.6 6.3 30 .2 38 .2h6c2 0 3.6 1.7 3.6 3.8v8.1c0 2.1-1.6 3.8-3.6 3.8h-4.3v5.7h5.7c1.2.1 2.2.6 2.9 1.4.7.9 1 2.1.8 3.2L47.9 33c-.2 1.8-1.7 3.1-3.6 3.1h-4.6V60c0 2-1.6 3.8-3.5 3.8zm-9.7-31.1c1 0 1.8.8 1.8 1.8V60c0 .2.1.3.1.3h7.8s.1-.1.1-.3V34.3c0-1 .8-1.8 1.8-1.8h6.3s.1 0 .1-.1v-.1l1.2-6.7c0-.2 0-.3-.1-.4 0 0-.1-.1-.2-.1H38c-1 0-1.8-.8-1.8-1.8v-7.1c0-1.8.3-3.8 3.7-3.8H44s.1-.1.1-.3v-8c0-.2-.1-.3-.1-.3h-5.9c-6 0-9.9 4.6-9.9 11.7v8.1c0 1-.8 1.8-1.8 1.8h-8s-.1.1-.1.3v6.9c0 .2.1.3.1.3l8.1-.2z" />
  </svg>
);
export default SvgFacebook;
