import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGit = ({
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
    <path d="M62.5 31 32.9 1.3c-.4-.4-1.4-.4-2 0l-8.2 8.2 7.6 7.6c.6-.3 1.3-.4 2-.4 2.8 0 4.9 2.3 4.9 4.9 0 .7-.1 1.4-.4 2l6.1 6.1c.6-.3 1.3-.4 2-.4 2.8 0 4.9 2.3 4.9 4.9 0 2.8-2.3 4.9-4.9 4.9-2.8 0-4.9-2.3-4.9-4.9 0-.7.1-1.4.4-2l-6.1-6.1h-.1v11.5c1.8.8 3.1 2.5 3.1 4.6 0 2.8-2.3 4.9-4.9 4.9-2.8 0-4.9-2.3-4.9-4.9 0-2.1 1.3-3.9 3.1-4.6V26.4c-1.8-.8-3.1-2.5-3.1-4.6 0-.7.1-1.4.4-2l-7.6-7.6L1.4 31c-.4.4-.4 1.4 0 2l29.7 29.7c.4.4 1.4.4 2 0L62.7 33c.3-.6.3-1.4-.2-2z" />
  </svg>
);
export default SvgGit;
