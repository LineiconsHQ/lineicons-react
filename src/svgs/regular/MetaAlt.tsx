import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMetaAlt = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M16.354 5.354c-1.64 0-2.922 1.236-4.083 2.805-1.594-2.03-2.928-2.805-4.524-2.805C4.493 5.354 2 9.59 2 14.071c0 2.805 1.357 4.574 3.63 4.574 1.636 0 2.812-.771 4.903-4.427l1.472-2.6c.21.34.432.705.664 1.097l.98 1.65c1.911 3.197 2.976 4.28 4.905 4.28 2.214 0 3.446-1.793 3.446-4.656 0-4.693-2.55-8.635-5.646-8.635Zm-7.415 7.874c-1.696 2.658-2.283 3.254-3.227 3.254-.971 0-1.549-.853-1.549-2.374 0-3.254 1.623-6.581 3.557-6.581 1.047 0 1.922.605 3.263 2.524-1.273 1.952-2.044 3.177-2.044 3.177Zm6.4-.335-1.173-1.955a40.807 40.807 0 0 0-.915-1.425c1.057-1.632 1.929-2.444 2.965-2.444 2.154 0 3.877 3.17 3.877 7.066 0 1.485-.486 2.347-1.494 2.347-.965 0-1.427-.638-3.26-3.589Z"
    />
  </svg>
);
export default SvgMetaAlt;
