import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFirebase = ({
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
      d="m5.32 15.057 1.948-12.67c.067-.431.637-.533.839-.147l2.092 3.977-4.878 8.84Zm13.84 3.08-1.857-11.67a.449.449 0 0 0-.76-.25L4.84 18.137l6.478 3.692c.402.228.906.228 1.309 0l6.533-3.692ZM13.902 7.956l-1.5-2.898a.443.443 0 0 0-.793 0l-6.59 11.931 8.883-9.033Z"
    />
  </svg>
);
export default SvgFirebase;
