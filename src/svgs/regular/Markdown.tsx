import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMarkdown = ({
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
      d="M20.516 5.871H3.452C2.677 5.871 2 6.516 2 7.323v9.387c0 .742.645 1.42 1.452 1.42h17.096c.775 0 1.452-.646 1.452-1.453V7.258c-.032-.774-.677-1.387-1.484-1.387ZM21 16.71a.496.496 0 0 1-.484.484H3.452a.496.496 0 0 1-.484-.484V7.258c0-.258.226-.484.484-.484h17.096c.259 0 .484.226.484.484v9.42H21v.032Z"
    />
    <path
      fill="#323544"
      d="M17.839 8.71h-1.903v3.355h-1.968l2.903 3.193 2.871-3.193H17.84V8.71ZM8.71 11.13 6.805 8.71H4.871v6.548h1.935v-3.774l1.903 2.387 1.904-2.387v3.774h1.967V8.71h-1.967l-1.904 2.42Z"
    />
  </svg>
);
export default SvgMarkdown;
