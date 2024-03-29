import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAppStore = ({
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
    <path d="m32 15.1 1.1-2c.7-1.3 2.3-1.7 3.5-1 1.3.7 1.7 2.3 1 3.5l-11 18.9h7.9c2.5 0 3.9 3 3 5.1H14.2c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h6.5L29 20l-2.7-4.5c-.7-1.3-.3-2.8 1-3.5 1.3-.7 2.8-.3 3.5 1l1.2 2.1zm-9.9 27.3-2.4 4.2c-.7 1.3-2.3 1.7-3.5 1-1.3-.7-1.7-2.3-1-3.5l1.8-3.2c2.2-.7 3.9-.2 5.1 1.5zm21.2-7.7h6.6c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-3.7l2.5 4.4c.7 1.3.3 2.8-1 3.5s-2.8.3-3.5-1C40 39.3 36.9 34 34.8 30.3c-2.1-3.7-.6-7.3.8-8.6 1.8 2.8 4.3 7.2 7.7 13zM32 1C14.8 1 1 14.8 1 32s13.8 31 31 31 31-13.8 31-31S49.2 1 32 1zm27.1 31c0 14.8-12 27.1-27.1 27.1-14.8 0-27.1-12-27.1-27.1 0-14.8 12-27.1 27.1-27.1 14.8 0 27.1 12 27.1 27.1z" />
  </svg>
);
export default SvgAppStore;
