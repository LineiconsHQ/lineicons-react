import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHackerNews = ({
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
    <path d="M1 1v62h62V1H1zm3 27.3s0-.1 0 0c0-.1 0 0 0 0zm30.1 7.5v13.9h-4.4V35.5l-11-21.3h5.1c7.3 13.5 6.8 14.1 8.2 17.3 1.7-3.8.7-3.4 8.5-17.3h4.8L34.1 35.8z" />
  </svg>
);
export default SvgHackerNews;
