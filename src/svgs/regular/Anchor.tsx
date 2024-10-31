import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnchor = ({
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
      fillRule="evenodd"
      d="M12.75 7.396a2.751 2.751 0 1 0-1.5 0V9H9.375a.75.75 0 0 0 0 1.5h1.875v10h-.247a5.25 5.25 0 0 1-5.25-5.25v-.812l.967.966a.75.75 0 0 0 1.06-1.06l-2.25-2.249a.75.75 0 0 0-1.06 0l-2.25 2.248a.75.75 0 1 0 1.06 1.062l.973-.973v.818a6.75 6.75 0 0 0 6.75 6.75h1.993a6.75 6.75 0 0 0 6.75-6.75v-.819l.974.974a.75.75 0 0 0 1.06-1.061l-2.25-2.249a.75.75 0 0 0-1.06 0l-2.25 2.248a.75.75 0 1 0 1.06 1.062l.966-.965v.81c0 2.9-2.35 5.25-5.25 5.25h-.246v-10h1.875a.75.75 0 0 0 0-1.5H12.75V7.396Zm-2-2.646a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAnchor;
