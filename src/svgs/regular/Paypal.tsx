import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaypal = ({
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
      d="m19.646 7.765-.032-.032c-.87 4.122-3.608 6.344-8.052 6.344H9.758l-1.03 6.667h-.966l-.13.709c-.031.257.194.547.452.547h3.22a.79.79 0 0 0 .773-.644l.033-.129.58-3.865.031-.225c.033-.354.355-.644.773-.644h.483c3.125 0 5.572-1.256 6.28-4.928.355-1.61.162-2.866-.611-3.8Z"
    />
    <path
      fill="#323544"
      d="m8.888 13.69-.032.194c.032-.45.451-.773.87-.773h1.803c3.575 0 6.345-1.45 7.215-5.668.032-.129.032-.226.032-.354.225-1.546 0-2.641-.87-3.575-.225-.258-.547-.483-.87-.709-.45-.257-.901-.45-1.449-.547-.354-.097-.805-.13-1.256-.194-.386-.032-.74-.064-1.16-.064h-6.15a.872.872 0 0 0-.87.709L3.574 19.102c-.032.354.194.644.548.644h3.8l.966-6.055Z"
    />
  </svg>
);
export default SvgPaypal;
