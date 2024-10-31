import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilePlusCircle = ({
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
      d="M10.945 20.5a6.914 6.914 0 0 0 1.393 1.5H6.75a2.25 2.25 0 0 1-2.25-2.25V9.621c0-.596.237-1.169.659-1.59l5.367-5.371A2.25 2.25 0 0 1 12.118 2h5.132a2.25 2.25 0 0 1 2.25 2.25v6.128a6.82 6.82 0 0 0-1.5-.49V4.25a.75.75 0 0 0-.75-.75h-5.002l.003 3.998A2.25 2.25 0 0 1 10 9.75H6v10c0 .414.336.75.75.75h4.195ZM10.75 4.559 7.059 8.25h2.942a.75.75 0 0 0 .75-.75l-.002-2.941Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M15.875 15a.75.75 0 0 1 1.5 0v.875h.875a.75.75 0 0 1 0 1.5h-.875v.875a.75.75 0 1 1-1.5 0v-.875H15a.75.75 0 0 1 0-1.5h.875V15Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M11.25 16.625a5.375 5.375 0 1 1 10.75 0 5.375 5.375 0 0 1-10.75 0Zm5.375-3.875a3.875 3.875 0 1 0 0 7.75 3.875 3.875 0 0 0 0-7.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilePlusCircle;
