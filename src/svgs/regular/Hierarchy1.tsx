import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHierarchy1 = ({
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
      d="M10.274 3.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM10.521 7.927c-.345.255-.608.628-.803 1.106a.75.75 0 1 1-1.389-.566c.268-.659.677-1.286 1.302-1.747.63-.466 1.427-.72 2.393-.72.965 0 1.761.254 2.393.72.624.461 1.033 1.088 1.301 1.747a.75.75 0 0 1-1.389.566c-.195-.478-.458-.85-.803-1.106-.339-.25-.811-.427-1.502-.427s-1.164.177-1.503.427ZM5.218 21.533c.195-.478.458-.85.803-1.106.34-.25.812-.427 1.503-.427.69 0 1.163.177 1.502.427.345.255.608.628.803 1.106a.75.75 0 1 0 1.39-.566c-.27-.659-.678-1.286-1.302-1.747-.632-.466-1.428-.72-2.393-.72-.966 0-1.762.254-2.393.72-.625.461-1.034 1.088-1.302 1.747a.75.75 0 1 0 1.39.566ZM5.774 16.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM14.218 21.533c.195-.478.458-.85.803-1.106.34-.25.812-.427 1.503-.427.69 0 1.163.177 1.502.427.345.255.608.628.803 1.106a.75.75 0 1 0 1.39-.566c-.27-.659-.678-1.286-1.302-1.747-.632-.466-1.428-.72-2.393-.72-.966 0-1.762.254-2.393.72-.625.461-1.034 1.088-1.302 1.747a.75.75 0 1 0 1.39.566ZM14.774 16.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM9.916 12.85a.75.75 0 1 0 .75 1.3l1.357-.784 1.357.784a.75.75 0 0 0 .75-1.3l-1.356-.783V10.5a.75.75 0 0 0-1.5 0v1.567l-1.358.784Z"
    />
  </svg>
);
export default SvgHierarchy1;
