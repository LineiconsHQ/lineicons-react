import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpellcheck = ({
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
      d="M9.25 4.5a.75.75 0 0 1 .686.445l6 13.5a.75.75 0 1 1-1.371.61l-1.728-3.888H5.663l-1.727 3.887a.75.75 0 0 1-1.371-.609l6-13.5A.75.75 0 0 1 9.25 4.5Zm0 2.597-2.92 6.57h5.84l-2.92-6.57ZM22.28 5.78a.75.75 0 1 0-1.06-1.06L17.738 8.2l-1.41-1.411a.75.75 0 1 0-1.061 1.06l1.941 1.942a.75.75 0 0 0 1.06 0l4.013-4.012Z"
    />
  </svg>
);
export default SvgSpellcheck;
