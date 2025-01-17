import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNuxt = ({
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
      d="M13.2 18.666h7.4c.236 0 .462-.083.667-.2.204-.117.415-.264.533-.466.118-.203.2-.433.2-.667 0-.234-.082-.464-.2-.667l-5-8.6a1.216 1.216 0 0 0-.467-.466 1.612 1.612 0 0 0-.733-.2c-.236 0-.462.083-.667.2a1.216 1.216 0 0 0-.466.466l-1.267 2.2L10.667 6c-.118-.203-.262-.417-.467-.534-.205-.117-.43-.133-.667-.133-.236 0-.462.016-.666.133-.205.117-.416.33-.534.534l-6.2 10.666c-.118.203-.133.433-.133.667 0 .234.015.464.133.667.118.202.33.35.534.466.204.117.43.2.666.2H8c1.85 0 3.195-.83 4.133-2.4l2.267-3.933 1.2-2.067 3.667 6.267H14.4l-1.2 2.133Zm-5.267-2.133H4.667l4.866-8.4 2.467 4.2-1.634 2.848c-.623 1.02-1.333 1.352-2.433 1.352Z"
    />
  </svg>
);
export default SvgNuxt;
