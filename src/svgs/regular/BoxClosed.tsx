import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBoxClosed = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M5.916 4.962a2.25 2.25 0 0 1 1.961-1.147h8.246a2.25 2.25 0 0 1 1.96 1.147l2.378 4.226c.19.337.289.717.289 1.103v8.774a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25V10.29c0-.386.1-.766.289-1.103l2.377-4.226ZM11.25 9.15V5.315H7.877a.75.75 0 0 0-.653.383l-1.942 3.45h5.968Zm-6.5 1.5v8.416c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75v-8.417H4.75Zm13.968-1.5-1.942-3.451a.75.75 0 0 0-.653-.383H12.75V9.15h5.968Z"
    />
  </svg>
);
export default SvgBoxClosed;
