import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWindows = ({
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
      d="M21.968 11.516V2.032c-3.645.484-7.258 1-10.936 1.58v7.969c3.678-.033 7.29-.033 10.936-.065ZM2 4.968v6.71c2.677 0 5.452-.033 8.129-.033V3.839c-2.677.354-5.452.71-8.129 1.129ZM2 12.451v6.71c2.677.355 5.452.71 8.129 1.097v-7.742c-2.677-.065-5.452-.065-8.129-.065ZM11.13 12.58c.031 2.646.031 5.226.031 7.84 3.613.483 7.226 1 10.839 1.548V12.58H11.13Z"
    />
  </svg>
);
export default SvgWindows;
