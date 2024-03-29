import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVimeo = ({
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
    <path d="M63 17.6c-.3 6.1-4.5 14.4-12.7 24.9C41.9 53.5 34.7 59 28.9 59c-3.5 0-6.6-3.2-9.2-10-1.7-6-3.2-12.2-5-18.4-1.8-6.6-3.8-10-6.1-10-.4 0-2.1 1-4.9 3l-2.7-4c3.1-2.7 6.1-5.4 9.2-8.2 4.1-3.5 7-5.4 9.2-5.5 4.8-.4 7.7 3 8.9 9.9 1.1 7.6 2 12.4 2.5 14.2 1.4 6.3 3 9.4 4.5 9.4 1.3 0 3.2-2 5.9-6.1s3.9-7.3 4.2-9.4c.4-3.5-1.1-5.4-4.2-5.4-1.4 0-3 .3-4.5 1.1 3-10 8.7-14.9 17.3-14.7 6.3.3 9.3 4.5 9 12.7z" />
  </svg>
);
export default SvgVimeo;
