import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoubleQuotesEnd1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="m7.449 18.177-.322-.677.322.677a.751.751 0 0 1-1.072-.677v-2.557a4.628 4.628 0 0 1 .75-9.193 4.627 4.627 0 0 1 4.626 4.627c0 2.845-1.049 4.796-2.12 6.034a8.135 8.135 0 0 1-1.47 1.333 6.435 6.435 0 0 1-.647.4 3.9 3.9 0 0 1-.045.023l-.014.006-.006.003-.002.001ZM4 10.377c0 1.726 1.4 3.126 3.127 3.126a.75.75 0 0 1 .75.75v1.807c.198-.176.41-.386.62-.63.867-1.001 1.756-2.612 1.756-5.053a3.127 3.127 0 0 0-6.253 0ZM18.199 18.177l-.322-.677.322.677a.751.751 0 0 1-1.072-.677v-2.557a4.628 4.628 0 0 1 .75-9.193 4.627 4.627 0 0 1 4.626 4.627c0 2.845-1.049 4.796-2.12 6.034a8.132 8.132 0 0 1-1.47 1.333 6.416 6.416 0 0 1-.692.422l-.014.008-.006.002-.002.001Zm-3.449-7.8c0 1.726 1.4 3.126 3.127 3.126a.75.75 0 0 1 .75.75v1.807c.198-.176.41-.386.62-.63.867-1.001 1.756-2.612 1.756-5.053a3.127 3.127 0 0 0-6.253 0Z"
    />
  </svg>
);
export default SvgDoubleQuotesEnd1;
