import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacetime = ({
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
      d="M2 8.497v7.006a2.768 2.768 0 0 0 2.767 2.766h8.43a2.768 2.768 0 0 0 2.766-2.766V8.497a2.768 2.768 0 0 0-2.767-2.767H4.772A2.766 2.766 0 0 0 2 8.497Zm18.188-1.875L17.012 9.24c-.283.235-.446.58-.446.945v3.625c0 .364.159.705.437.94l3.174 2.666c.724.604 1.822.091 1.822-.849V7.476c.005-.935-1.088-1.453-1.813-.854Z"
    />
  </svg>
);
export default SvgFacetime;
