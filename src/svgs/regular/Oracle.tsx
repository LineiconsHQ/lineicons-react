import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOracle = ({
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
      d="M8.497 18.325h7.347c3.492-.085 6.24-3.002 6.154-6.474-.085-3.386-2.81-6.09-6.154-6.175H8.497c-3.492-.085-6.41 2.662-6.495 6.154a6.31 6.31 0 0 0 6.154 6.474c.107.021.213.021.34.021Zm7.176-2.236H8.646c-2.257-.064-4.025-1.96-3.96-4.216.084-2.151 1.81-3.897 3.96-3.961h7.027c2.258-.064 4.153 1.703 4.217 3.96.064 2.258-1.704 4.153-3.961 4.217h-.256Z"
    />
  </svg>
);
export default SvgOracle;
