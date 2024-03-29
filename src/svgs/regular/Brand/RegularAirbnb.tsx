import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAirbnb = ({
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
    <path d="M32 48.2c-3.5-4.4-5.5-8.2-6.2-11.6-3.1-12.3 15.6-12.3 12.5 0-.8 3.4-2.9 7.4-6.3 11.6zm19 10.1c-5.8 2.5-11.6-1.5-16.5-6.9 14.4-18 6.5-27.8-2.5-27.8-7.6 0-11.8 6.3-10.1 13.9 1 4.1 3.5 8.6 7.6 13.8-4.5 4.9-8.3 7.3-11.8 7.6C10.8 60 5.4 53.3 8 46.4c2.1-5.4 15.5-32 16.1-33.4 2.1-4.2 3.5-7.9 8.2-7.9 4.5 0 6.1 3.5 8.3 8.3 5.1 9.7 12.4 24.5 15.9 33 1.5 4.5-.4 9.8-5.5 11.9zm6.6-18.8C39.7 1.6 38.7 1 32 1c-6.3 0-9 4.4-11.7 10C5.5 40.5 4.2 44.5 3.9 45 .5 54.6 7.7 63 16.3 63c3 0 8.5-.8 15.6-8.6C40.1 63.3 46 63 47.5 63c8.7 0 15.9-8.5 12.4-18 .1-.6-2.3-5.4-2.3-5.5z" />
  </svg>
);
export default SvgAirbnb;
