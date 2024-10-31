import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrown3 = ({
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
      d="M12 3.75a.75.75 0 0 1 .565.256l4.147 4.741 4.063-3.326a.75.75 0 0 1 1.22.668L20.65 17.513a2.25 2.25 0 0 1-2.235 1.987H5.584a2.25 2.25 0 0 1-2.235-1.987L2.005 6.089a.75.75 0 0 1 1.22-.668l4.063 3.326 4.147-4.74A.75.75 0 0 1 12 3.75Zm0 1.89L7.94 10.28a.75.75 0 0 1-1.04.087l-3.188-2.61.75 6.374h15.076l.75-6.374-3.188 2.61a.75.75 0 0 1-1.04-.087L12 5.64Zm7.362 9.992H4.638l.201 1.706a.75.75 0 0 0 .745.662h12.832c.38 0 .7-.285.745-.662l.2-1.706Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCrown3;
