import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWatchBeat1 = ({
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
      d="m10.453 12.209.548-1.16.808 3.294c.248 1.009 1.616 1.168 2.089.243l.886-1.734h.658a.75.75 0 0 0 0-1.5h-.889c-.421 0-.807.236-.999.611L13.024 13l-.82-3.343c-.253-1.026-1.654-1.167-2.105-.211l-.9 1.906h-.64a.75.75 0 0 0 0 1.5h.88c.434 0 .829-.25 1.014-.643Z"
    />
    <path
      fill="#323544"
      d="M9.427 2a2.25 2.25 0 0 0-2.012 1.244L6.53 5.01A2.25 2.25 0 0 0 4.5 7.25v9.5a2.25 2.25 0 0 0 2.031 2.24l.884 1.766A2.25 2.25 0 0 0 9.427 22h5.146a2.25 2.25 0 0 0 2.012-1.244l.884-1.767A2.25 2.25 0 0 0 19.5 16.75v-9.5a2.25 2.25 0 0 0-2.031-2.24l-.884-1.766A2.25 2.25 0 0 0 14.573 2H9.427ZM6.983 17.5H6.75a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75H17.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H7.015a.85.85 0 0 0-.032 0Zm1.773 2.585L8.214 19h7.572l-.542 1.085a.75.75 0 0 1-.671.415H9.427a.75.75 0 0 1-.67-.415ZM15.786 5H8.215l.542-1.085a.75.75 0 0 1 .671-.415h5.146a.75.75 0 0 1 .67.415L15.787 5Z"
    />
  </svg>
);
export default SvgWatchBeat1;
