import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChrome = ({
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
      d="M21.436 8.695h-6.815a4.209 4.209 0 0 1 .828 5.735l-4.217 7.536c.256.02.512.035.769.034 5.52-.005 9.995-4.479 10-10a9.86 9.86 0 0 0-.565-3.305Z"
    />
    <path
      fill="#323544"
      d="M11.986 16.22a4.188 4.188 0 0 1-2.095-.563 4.235 4.235 0 0 1-1.547-1.547 4.3 4.3 0 0 1-.221-.448L3.808 6.278a9.991 9.991 0 0 0-1.728 4.47c-.672 5.321 2.97 10.191 8.2 11.098l3.33-5.948a4.236 4.236 0 0 1-1.624.321Z"
    />
    <path
      fill="#323544"
      d="M9.889 8.347a4.221 4.221 0 0 1 2.565-.541h8.616a9.99 9.99 0 0 0-2.959-3.72C13.87.808 7.828 1.474 4.392 5.516l3.434 5.877c.18-1.233.9-2.375 2.063-3.046Z"
    />
    <path
      fill="#323544"
      d="M9.073 10.313a3.378 3.378 0 1 0 4.617-1.236 3.377 3.377 0 0 0-1.68-.452h-.002a3.366 3.366 0 0 0-2.935 1.688Z"
    />
  </svg>
);
export default SvgChrome;
