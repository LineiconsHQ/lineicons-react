import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPartyFlags = ({
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
      d="M21.963 8.998a.75.75 0 0 0-1.02-.92l-.007.003-.027.012a13.44 13.44 0 0 1-.6.236c-.426.155-1.053.365-1.847.575a25.446 25.446 0 0 1-6.461.842c-2.627 0-4.873-.42-6.462-.842-.794-.21-1.42-.42-1.846-.575a13.458 13.458 0 0 1-.6-.236l-.028-.012-.006-.003a.75.75 0 0 0-1.022.918l1.75 5.38a.75.75 0 0 0 1.215.325l3.631-3.266 2.738 4.212a.75.75 0 0 0 1.258 0l2.739-4.213 3.63 3.266a.75.75 0 0 0 1.215-.326l1.75-5.376Zm-1.904 1.001-.915 2.814-2.247-2.021a26.626 26.626 0 0 0 1.95-.438c.456-.12.862-.242 1.212-.355Zm-14.904.355a26.59 26.59 0 0 0 1.95.438l-2.248 2.022L3.941 10c.35.113.757.234 1.214.355Zm8.583.835L12 13.862l-1.738-2.673a26.381 26.381 0 0 0 3.476 0Z"
    />
  </svg>
);
export default SvgPartyFlags;
