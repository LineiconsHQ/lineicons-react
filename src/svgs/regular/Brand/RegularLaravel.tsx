import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLaravel = ({
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
    <path d="M62 15.2c-.2-.2-.2-.2 0 0-.1-.1-.1-.1-.1-.3 0 0 0-.1-.1-.1l-.1-.1-.1-.1-11.7-6.7c-.3-.1-.7-.1-1 0l-11.5 6.6-.1.1s-.1 0-.1.1l-.1.1s0 .1-.1.1c0 .1 0 .1-.1.1V28.1l-9.7 5.6V8.3c0-.1 0-.1-.1-.1 0 0 0-.1-.1-.1l-.1-.1-.1-.1-.1-.1-11.6-6.7c-.3-.1-.7-.1-1 0L2.6 7.7l-.1.2s-.1 0-.1.1v.1s0 .1-.1.1c0 0 0 .1-.1.1V48.5c0 .4.1.7.4.8l23.2 13.4c.1 0 .1 0 .1.1h.6c.1 0 .1 0 .1-.1l22.9-13.4c.3-.1.4-.4.4-.8V36L61 29.7c.3-.1.4-.4.4-.8V15.5c.6-.2.6-.3.6-.3zm-47.4-12 9.7 5.6-9.7 5.6-9.7-5.6 9.7-5.6zm10.5 7.3v24.3L19.5 38l-4.1 2.3V16l5.6-3.2 4.1-2.3zm0 49.8L3.7 48.1V10.5l4.1 2.3 5.6 3.2V42.2s0 .1.1.1c0 0 0 .1.1.1l.1.1s.1 0 .1.1l.1.1L25.2 49v11h-.1zm1-12.8-9.6-5.6L26.7 36l11.1-6.3 9.7 5.6-7 4.1-14.4 8.1zm22.2.6L27.1 60.3V49.1l15.8-9 5.5-3.2v11.2zm0-14.5-4.1-2.3-5.6-3.2v-11l4.1 2.3 5.6 3.2v11zm1-12.7-9.7-5.6 9.7-5.5 9.7 5.6-9.7 5.5zm1 12.7v-11l5.6-3.2 4.1-2.3v11l-9.7 5.5z" />
  </svg>
);
export default SvgLaravel;
