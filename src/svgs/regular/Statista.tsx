import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStatista = ({
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
      d="M3.644 3a.628.628 0 0 0-.63.63v11.413h.09s2.709-.051 3.857-.656a8.167 8.167 0 0 0 2.503-2.289l.677-.955.215-.305c.026-.03.137-.192.201-.286.064-.095.343-.49.613-.883a12.7 12.7 0 0 1 3.947-3.557c2.503-1.286 5.82-1.158 5.82-1.158h.051V3.67a.63.63 0 0 0-.63-.669H3.645Zm17.34 5.962a.681.681 0 0 1-.163.02s-2.704.052-3.865.66a8.137 8.137 0 0 0-2.503 2.285l-.664.96c-.099.137-.193.274-.219.304l-.202.288-.612.883s-1.633 2.357-3.947 3.557c-2.4 1.247-5.542 1.165-5.8 1.157v1.286a.632.632 0 0 0 .63.638h16.716a.63.63 0 0 0 .63-.63V8.962Z"
    />
  </svg>
);
export default SvgStatista;
