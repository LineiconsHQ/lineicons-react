import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalculator1 = ({
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
      d="M13.71 17.61a.5.5 0 1 0 0 1h2.58a.5.5 0 0 0 0-1h-2.58ZM13.21 16.644a.5.5 0 0 1 .5-.5h2.58a.5.5 0 0 1 0 1h-2.58a.5.5 0 0 1-.5-.5ZM13.64 10.516a.5.5 0 0 0 0 .707l.653.654-.654.653a.5.5 0 1 0 .707.708l.654-.654.653.654a.5.5 0 0 0 .707-.707l-.653-.654.653-.654a.5.5 0 0 0-.707-.707L15 11.17l-.654-.654a.5.5 0 0 0-.707 0ZM7.21 17.377a.5.5 0 0 1 .5-.5h2.58a.5.5 0 1 1 0 1H7.71a.5.5 0 0 1-.5-.5ZM9 10.087a.5.5 0 0 0-.5.5v.79h-.79a.5.5 0 0 0 0 1h.79v.79a.5.5 0 0 0 1 0v-.79h.79a.5.5 0 1 0 0-1H9.5v-.79a.5.5 0 0 0-.5-.5Z"
    />
    <path
      fill="#323544"
      d="M4.5 4.25A2.25 2.25 0 0 1 6.75 2h10.5a2.25 2.25 0 0 1 2.25 2.25v15.5A2.25 2.25 0 0 1 17.25 22H6.75a2.25 2.25 0 0 1-2.25-2.25V4.25Zm2.25-.75a.75.75 0 0 0-.75.75v3h12v-3a.75.75 0 0 0-.75-.75H6.75ZM6 19.75c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-11H6v11Z"
    />
  </svg>
);
export default SvgCalculator1;
