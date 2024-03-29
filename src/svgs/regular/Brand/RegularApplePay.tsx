import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgApplePay = ({
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
    <path d="M12.2 22.5c-.7.8-1.8 1.6-3 1.4-.1-1.1.4-2.4 1.1-3.2.7-.8 2-1.6 3-1.6.1 1.5-.4 2.6-1.1 3.4m1.1 1.9c-1.7-.1-3.1 1-3.8 1-.8 0-2.1-1-3.4-1-1.7 0-3.2 1-4.2 2.5C0 30 1.4 34.7 3.1 37.2c.9 1.3 1.9 2.7 3.3 2.7 1.3 0 1.7-.8 3.2-.8s2 .8 3.4.7c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-3 0 0-2.7-1.1-2.7-4.2 0-2.7 2.1-3.8 2.3-3.8-1.3-1.8-3.1-1.9-3.8-1.9m9.7-3.7v18.9h3v-6.5h4.1c3.7 0 6.4-2.5 6.4-6.2s-2.5-6.2-6.2-6.2H23zm3 2.5h3.4c2.5 0 4 1.4 4 3.8s-1.4 3.8-4 3.8H26v-7.6zm15.7 16.7c1.8 0 3.5-1 4.4-2.4h.1v2.3h2.7v-9.5c0-2.7-2.1-4.5-5.5-4.5-3.1 0-5.4 1.7-5.5 4.2h2.5c.1-1.1 1.3-2 2.8-2 1.7 0 2.8.8 2.8 2.3v1.1l-3.7.1c-3.4.1-5.2 1.6-5.2 4-.1 2.7 1.9 4.4 4.6 4.4zm.8-2.3c-1.6 0-2.5-.7-2.5-2 0-1.1 1-1.8 2.8-2l3.2-.1v1.1c.1 1.8-1.5 3-3.5 3zm9.9 7.2c2.8 0 4.2-1.1 5.4-4.4L63 26.1h-3l-3.5 11.2h-.1l-3.5-11.2h-3.1l4.9 13.8-.3.7c-.4 1.4-1.1 2-2.4 2h-.8v2.3c.4-.1 1.1-.1 1.2-.1z" />
  </svg>
);
export default SvgApplePay;
