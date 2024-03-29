import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStumbleupon = ({
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
    <path d="M63 33.3v8.6c0 7.6-6.2 13.8-13.8 13.8s-13.8-6.1-13.8-13.8v-8.5l4.2 2 6.3-1.8v8.7c0 1.8 1.4 3.2 3.2 3.2s3.2-1.4 3.2-3.2v-8.9c.1-.1 10.7-.1 10.7-.1zm-27.8-7.2 4.2 2 6.3-1.8v-4.4c0-7.5-6.3-13.5-13.8-13.5s-13.8 5.9-13.8 13.4v20c0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2v-8.5H1v8.6c0 7.6 6.2 13.8 13.8 13.8S28.6 49.6 28.6 42V22.3c0-1.8 1.4-3.2 3.2-3.2 1.8 0 3.2 1.4 3.2 3.2v3.8h.2z" />
  </svg>
);
export default SvgStumbleupon;
