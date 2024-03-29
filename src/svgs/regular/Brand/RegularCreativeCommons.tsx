import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreativeCommons = ({
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
    <path d="M31.7 26.9 27.5 29c-1.1-2.4-3.2-2.5-3.4-2.5-2.8 0-4.2 1.8-4.2 5.5 0 3 1.1 5.5 4.2 5.5 1.8 0 3.1-.8 3.8-2.7l3.8 2c-.7 1.4-3.2 4.8-8.2 4.8-2.8 0-9.2-1.3-9.2-9.6 0-7.3 5.4-9.6 9.2-9.6 3.9 0 6.5 1.4 8.2 4.5zm17.9 0L45.5 29c-1.1-2.5-3.2-2.5-3.5-2.5-2.8 0-4.2 1.8-4.2 5.5 0 3 1.1 5.5 4.2 5.5 1.8 0 3.1-.8 3.8-2.7l3.9 2c-.3.4-2.7 4.8-8.2 4.8-2.8 0-9.2-1.3-9.2-9.6 0-7.3 5.4-9.6 9.2-9.6 3.7 0 6.4 1.4 8.1 4.5zM31.9 1C14.1 1 1 15.4 1 32c0 17.3 14.2 31 30.9 31C48.2 63 63 50.5 63 32 63 14.8 49.6 1 31.9 1zm.2 56.4c-14 0-25.5-11.6-25.5-25.4 0-13.2 10.7-25.4 25.5-25.4 14.1 0 25.4 11.1 25.4 25.4-.1 15.2-12.5 25.4-25.4 25.4z" />
  </svg>
);
export default SvgCreativeCommons;
