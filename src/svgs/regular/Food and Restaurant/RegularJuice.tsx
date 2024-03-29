import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJuice = ({
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
    <path d="M50.9 16.1c-.9-1.1-2.3-1.7-3.7-1.7h-12l3.3-8.2h8.7c1.2 0 2.2-1 2.3-2.2 0-1.2-1-2.3-2.2-2.3h-9.2c-1.6 0-3 1-3.5 2.4l-4.2 10.3H16.8c-1.4 0-2.8.6-3.7 1.7-.9 1.1-1.4 2.5-1.2 3.9l4 35.4c.4 3.9 3.7 6.8 7.6 6.8h17.1c3.9 0 7.2-2.9 7.6-6.8l4-35.4c.1-1.4-.3-2.8-1.3-3.9zm-34.5 3c.1-.1.2-.2.3-.2h30.4c.2 0 .3.1.3.2s.1.2.1.4l-1.3 11.2-1-.5c-3-1.5-6.4-1.6-9.4-.3l-1.2.5c-1.7.8-3.6.7-5.3-.1l-.3-.2c-3.1-1.5-6.8-1.4-9.7.2l-1.6.8-1.3-11.6c-.1-.2 0-.3 0-.4zm24.1 38.7h-17c-1.6 0-3-1.2-3.2-2.8l-2.1-19 3.2-1.6c1.8-.9 3.9-1 5.7-.1l.5.3c2.9 1.4 6.2 1.4 9.1.1l1.2-.5c1.8-.8 3.8-.7 5.5.2l2.5 1.3-2.2 19.5c-.2 1.3-1.5 2.6-3.2 2.6z" />
  </svg>
);
export default SvgJuice;
