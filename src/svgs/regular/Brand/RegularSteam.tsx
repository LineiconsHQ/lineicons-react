import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSteam = ({
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
    <path d="M31.9.9C15.7.9 2.1 13.5 1 29.5l16.6 6.9c1.4-1 3.1-1.4 4.9-1.4h.4l7.3-10.9V24c0-6.5 5.2-11.7 11.7-11.7S53.7 17.5 53.7 24 48.5 35.7 42 35.7h-.3l-10.6 7.6v.4c0 4.8-3.9 8.9-8.9 8.9-4.2 0-7.9-3.1-8.6-7L2 40.5c3.7 13 15.8 22.7 29.9 22.7C49 63.1 63 49.2 63 32S49 .9 31.9.9z" />
    <path d="m20.4 48.1-3.8-1.5c.7 1.4 1.8 2.7 3.4 3.2 3.2 1.4 7.2-.1 8.6-3.5.7-1.7.7-3.4 0-5.1s-2-3-3.5-3.7c-1.6-.7-3.2-.6-4.8-.1l3.9 1.7c2.4 1.1 3.7 3.9 2.7 6.3-1.1 2.5-3.9 3.6-6.5 2.7zM50 24c0-4.2-3.5-7.9-7.9-7.9-4.2 0-7.9 3.5-7.9 7.9s3.7 7.9 7.9 7.9S50 28.3 50 24zm-13.6 0c0-3.2 2.7-5.8 5.8-5.8 3.2 0 5.8 2.7 5.8 5.8 0 3.2-2.7 5.8-5.8 5.8-3.2.1-5.8-2.6-5.8-5.8z" />
  </svg>
);
export default SvgSteam;
