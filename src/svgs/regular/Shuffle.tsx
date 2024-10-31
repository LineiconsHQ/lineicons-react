import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShuffle = ({
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
      d="M18.97 3.72a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-2.754a.75.75 0 0 0-.567.26L12.74 12l3.878 4.49a.75.75 0 0 0 .567.26h2.753l-.97-.97a.75.75 0 1 1 1.061-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-2.754a2.25 2.25 0 0 1-1.702-.78l-3.734-4.322-3.734 4.323a2.25 2.25 0 0 1-1.703.779H3.25a.75.75 0 0 1 0-1.5h3.063a.75.75 0 0 0 .568-.26L10.76 12 6.881 7.51a.75.75 0 0 0-.568-.26H3.25a.75.75 0 0 1 0-1.5h3.063a2.25 2.25 0 0 1 1.703.78l3.734 4.322 3.734-4.323a2.25 2.25 0 0 1 1.702-.779h2.753l-.97-.97a.75.75 0 0 1 0-1.06Z"
    />
  </svg>
);
export default SvgShuffle;
