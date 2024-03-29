import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSquarespace = ({
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
    <path d="M23.6 42.6c-1.1 1.1-1.1 3.1 0 4.2s3.1 1.1 4.2 0l19-19c2.4-2.4 6.1-2.4 8.4 0 2.4 2.4 2.4 6.1 0 8.4L36.6 54.9c2.4 2.4 6.1 2.4 8.4 0l14.5-14.5c4.6-4.6 4.6-12.2 0-17-4.6-4.6-12.2-4.6-17 0L23.6 42.6zm29.6-12.7c-1.1-1.1-3.1-1.1-4.2 0L30 49c-2.4 2.4-6.1 2.4-8.4 0-1.1-1.1-3.1-1.1-4.2 0s-1.1 3.1 0 4.2c4.6 4.6 12.2 4.6 17 0l18.9-19c1-1.2 1-3.2-.1-4.3zM21.5 40.4l19-19c1.1-1.1 1.1-3.1 0-4.2s-3.1-1.1-4.2 0l-19.1 19c-2.4 2.4-6.1 2.4-8.4 0-2.4-2.4-2.4-6.2 0-8.6L27.4 9.1c-2.4-2.4-6.1-2.4-8.4 0L4.5 23.6c-4.6 4.6-4.6 12.2 0 17 4.6 4.6 12.4 4.6 17-.2zM11 34.1c1.1 1.1 3.1 1.1 4.2 0l19.1-19c2.4-2.4 6.1-2.4 8.4 0 1.1 1.1 3.1 1.1 4.2 0s1.1-3.1 0-4.2c-4.6-4.6-12.2-4.6-17 0l-19 19C9.7 31 9.7 33 11 34.1z" />
  </svg>
);
export default SvgSquarespace;
