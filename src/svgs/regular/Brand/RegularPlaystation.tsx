import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlaystation = ({
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
    <path d="M38.8 15.7v14.9c6.3 3.1 11.2 0 11.2-8 0-8.2-3-11.8-11.4-14.8-3.4-1.1-9.6-3-13.9-3.8v44.6l10.1 3.2V14.5c0-1.8.8-3 2.1-2.5 1.5.3 1.9 2 1.9 3.7z" />
    <path d="M58.8 35.4c-4.2-1.5-9.6-2.1-13.9-1.7-4.4.4-7.5 1.5-7.5 1.5l-.7.3v6l10.8-3.8c1.8-.7 4.5-.8 6-.3 1.5.4 1.3 1.4-.6 2.1l-16.3 5.6V51l22.1-7.9s3-1.1 4.2-2.7c1.2-1.3.7-3.4-4.1-5zM2.7 38.8c-2.2 1.7-1.4 4.5 3.5 5.9 5.2 1.7 10.5 2.1 15.5 1.3.3 0 .7-.1 1-.1v-5.2l-5.1 1.8c-1.8.7-4.5.8-6 .3-1.5-.4-1.3-1.4.7-2.1L22.7 37v-6L8.2 36.2c.1-.1-3.4 1-5.5 2.6z" />
  </svg>
);
export default SvgPlaystation;
