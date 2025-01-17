import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSelectCursor1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M5.523 4.75a.75.75 0 0 0-.75.75v1.625a.75.75 0 0 1-1.5 0V5.5a2.25 2.25 0 0 1 2.25-2.25h1.625a.75.75 0 0 1 0 1.5H5.523ZM9.648 4a.75.75 0 0 1 .75-.75h3.25a.75.75 0 1 1 0 1.5h-3.25a.75.75 0 0 1-.75-.75ZM16.148 4a.75.75 0 0 1 .75-.75h1.625a2.25 2.25 0 0 1 2.25 2.25v1.625a.75.75 0 1 1-1.5 0V5.5a.75.75 0 0 0-.75-.75h-1.625a.75.75 0 0 1-.75-.75ZM4.023 9.625a.75.75 0 0 1 .75.75v3.25a.75.75 0 0 1-1.5 0v-3.25a.75.75 0 0 1 .75-.75ZM20.023 9.625a.75.75 0 0 1 .75.75v3.25a.75.75 0 0 1-.724.75l-.748-.546a.75.75 0 0 1-.028-.204v-3.25a.75.75 0 0 1 .75-.75ZM12.127 20.65l-.151-1.4h-1.578a.75.75 0 0 0 0 1.5h1.742a2.053 2.053 0 0 1-.013-.1ZM4.023 16.125a.75.75 0 0 1 .75.75V18.5c0 .414.336.75.75.75h1.625a.75.75 0 0 1 0 1.5H5.523a2.25 2.25 0 0 1-2.25-2.25v-1.625a.75.75 0 0 1 .75-.75Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M13.01 11.726a.75.75 0 0 1 .818.044l6.525 4.767a.75.75 0 0 1-.305 1.343l-2.364.438 1.259 2.181a.75.75 0 0 1-1.3.75l-1.259-2.181-1.563 1.829a.75.75 0 0 1-1.315-.407l-.866-8.034a.75.75 0 0 1 .37-.73Zm1.8 6.874.778-.91a2.25 2.25 0 0 1 1.3-.75l1.176-.218-3.75-2.74.497 4.619Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSelectCursor1;
