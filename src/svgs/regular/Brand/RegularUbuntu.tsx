import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUbuntu = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 66.1"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M32 2C14.8 2 1 16 1 33s13.8 31 31 31 31-13.8 31-31S49.2 2 32 2zm6.6 11.7c1.1-2 3.5-2.5 5.4-1.4 2 1.1 2.5 3.5 1.4 5.5s-3.5 2.5-5.4 1.4c-1.9-1.2-2.5-3.6-1.4-5.5zM12 37c-2.3 0-4-1.7-4-4s1.7-3.9 3.9-3.9 3.9 1.7 3.9 3.9c.1 2.3-1.7 4-3.8 4zm3.4.4c2.8-2.3 2.8-6.5 0-8.7 1.1-4.1 3.7-7.6 7-9.9l3 4.9c-6.3 4.5-6.3 14.1 0 18.6l-3 4.9c-3.2-2.2-5.9-5.7-7-9.8zM44 53.9c-2 1.1-4.4.4-5.4-1.4-1-1.8-.4-4.4 1.4-5.4 1.8-1 4.4-.4 5.4 1.4 1.3 1.9.6 4.3-1.4 5.4zm.1-8.6c-3.2-1.3-7 .8-7.6 4.4-.7.1-6.1 1.7-12.1-1.1l2.8-5.1c7.2 3.2 15.4-1.4 16.1-9.3l5.8.1c-.2 4.1-2.2 8-5 11zm-.8-13.2c-.7-7.7-8.9-12.7-16.1-9.3l-2.8-5.1c6.1-3 11.4-1.4 12.1-1.1.6 3.5 4.2 5.6 7.6 4.4 3 3 4.8 6.8 5.1 11l-5.9.1z" />
  </svg>
);
export default SvgUbuntu;
