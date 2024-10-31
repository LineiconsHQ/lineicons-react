import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCamera1 = ({
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
      fillRule="evenodd"
      d="M12 7.002a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm-3.25 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M9.994 2.75a2.25 2.25 0 0 0-1.803.904l-.594.795a.75.75 0 0 1-.6.301H4.25A2.25 2.25 0 0 0 2 7v10.25a2.25 2.25 0 0 0 2.25 2.25h15.5A2.25 2.25 0 0 0 22 17.25V7a2.25 2.25 0 0 0-2.25-2.25h-2.747a.75.75 0 0 1-.6-.301l-.594-.795a2.25 2.25 0 0 0-1.803-.904H9.994Zm-.601 1.801a.75.75 0 0 1 .6-.301h4.013a.75.75 0 0 1 .601.301l.594.795a2.25 2.25 0 0 0 1.802.904h2.747a.75.75 0 0 1 .75.75v10.25a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 .75-.75h2.746A2.25 2.25 0 0 0 8.8 5.346l.594-.795Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCamera1;
