import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStumbleupon = ({
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
      d="M22 12.403v2.774c0 2.452-2 4.452-4.452 4.452a4.44 4.44 0 0 1-4.451-4.452v-2.741l1.355.645 2.032-.58v2.806c0 .58.451 1.032 1.032 1.032.58 0 1.032-.452 1.032-1.032v-2.871c.033-.033 3.452-.033 3.452-.033Zm-7.613-1.677 2.032-.58v-1.42c0-2.42-2.032-4.355-4.451-4.355-2.42 0-4.452 1.903-4.452 4.323v6.451c0 .58-.451 1.032-1.032 1.032-.58 0-1.032-.451-1.032-1.032v-2.742H2v2.774c0 2.452 2 4.452 4.452 4.452 2.451 0 4.451-1.968 4.451-4.42V8.856c0-.58.452-1.032 1.032-1.032.581 0 1.033.451 1.033 1.032v1.19l1.42.68Z"
    />
  </svg>
);
export default SvgStumbleupon;
