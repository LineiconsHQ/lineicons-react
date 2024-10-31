import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPrisma = ({
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
      d="M4.003 15.728a.996.996 0 0 1-.008-1.054l7.479-12.199a.996.996 0 0 1 1.753.104l6.832 14.82a.996.996 0 0 1-.618 1.37L8.813 21.959a.996.996 0 0 1-1.127-.42l-3.683-5.81Zm8.334-9.686L9.707 19.14a.373.373 0 0 0 .472.431l7.343-2.192a.373.373 0 0 0 .236-.506L13.046 5.968a.373.373 0 0 0-.71.074Z"
    />
  </svg>
);
export default SvgPrisma;
