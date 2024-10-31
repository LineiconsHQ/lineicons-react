import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRefreshDollar1 = ({
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
      d="M3.378 10.46a.75.75 0 0 1-.53-.918 9.5 9.5 0 0 1 18.058-.908l.76-1.351a.75.75 0 0 1 1.308.735L21.239 11.1a.75.75 0 0 1-1.021.285L17.137 9.65a.75.75 0 0 1 .736-1.307l1.675.944a7.999 7.999 0 0 0-15.252.643.75.75 0 0 1-.918.53ZM20.671 13.54a.75.75 0 0 1 .53.918 9.5 9.5 0 0 1-18.062.898l-.767 1.362a.75.75 0 0 1-1.307-.736L2.8 12.901a.75.75 0 0 1 1.022-.285l3.08 1.734a.75.75 0 1 1-.736 1.307l-1.662-.936a8 8 0 0 0 15.249-.651.75.75 0 0 1 .918-.53Z"
    />
    <path
      fill="#323544"
      d="M12.024 7.808a.75.75 0 0 1 .75.75v.17c.749.188 1.303.866 1.303 1.673a.75.75 0 1 1-1.5 0 .227.227 0 0 0-.227-.226h-.395a.483.483 0 0 0-.17.934l1.005.377a1.983 1.983 0 0 1-.016 3.72v.236a.75.75 0 0 1-1.5 0v-.169a1.728 1.728 0 0 1-1.302-1.674.75.75 0 0 1 1.5 0c0 .125.102.227.227.227h.395a.483.483 0 0 0 .17-.935l-1.005-.377a1.983 1.983 0 0 1 .015-3.72v-.236a.75.75 0 0 1 .75-.75Z"
    />
  </svg>
);
export default SvgRefreshDollar1;
