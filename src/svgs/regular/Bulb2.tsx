import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBulb2 = ({
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
      d="M9.063 18.045c-.046-1.131-.794-2.194-1.803-3.18a7.5 7.5 0 1 1 10.48 0c-1.041 1.017-1.805 2.117-1.805 3.29v1.595a2.25 2.25 0 0 1-2.25 2.25h-2.373a2.25 2.25 0 0 1-2.25-2.25v-1.705ZM6.5 9.5a5.98 5.98 0 0 0 1.808 4.293c.741.724 1.512 1.633 1.933 2.707h1.509v-4.659a2.242 2.242 0 0 1-.841-.53l-.846-.846a.75.75 0 1 1 1.061-1.06l.846.845a.75.75 0 0 0 1.06 0l.846-.846a.75.75 0 1 1 1.06 1.06l-.845.846a2.24 2.24 0 0 1-.841.531V16.5h1.509c.421-1.074 1.192-1.984 1.933-2.707A6 6 0 1 0 6.5 9.5Zm4.063 8.713v1.537c0 .414.335.75.75.75h2.372a.75.75 0 0 0 .75-.75V18h-3.873v.017a4.17 4.17 0 0 1 0 .196Z"
    />
  </svg>
);
export default SvgBulb2;
