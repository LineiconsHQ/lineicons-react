import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBootstrap5Square = ({
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
      d="M14.73 14.236c0 1.712-1.598 1.683-1.743 1.683h-3.28v-3.28h3.251c1.742-.058 1.771 1.248 1.771 1.597Zm-2.004-2.962c.03 0 1.539.03 1.539-1.48 0-.61-.116-1.423-1.539-1.423h-3.02v2.903h3.02Zm8.245-5.255v11.99c0 1.627-1.335 2.991-3.02 2.991H6.05a2.999 2.999 0 0 1-3.02-3.02V6.02A2.999 2.999 0 0 1 6.05 3h11.99c1.597 0 2.932 1.335 2.932 3.02Zm-4.413 8.42c0-.871-.232-2.323-1.945-2.7v-.03c.93-.406 1.48-1.132 1.48-2.206 0-.29.088-2.613-3.106-2.613h-5.08v10.452c5.138 0 5.632.029 6.561-.203.552-.174 2.09-.697 2.09-2.7Z"
    />
  </svg>
);
export default SvgBootstrap5Square;
