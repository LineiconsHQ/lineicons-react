import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRemixJs = ({
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
      d="M19.932 17.424c.18 2.31.18 3.394.18 4.576h-5.35c0-.258.004-.493.009-.732.014-.743.03-1.517-.09-3.081-.16-2.29-1.147-2.799-2.961-2.799H3.305v-4.166h8.67c2.291 0 3.437-.696 3.437-2.54 0-1.623-1.146-2.605-3.438-2.605h-8.67V2h9.625c5.189 0 7.767 2.449 7.767 6.36 0 2.926-1.814 4.834-4.265 5.152 2.069.413 3.278 1.59 3.501 3.912Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M3.305 22v-3.106h5.657c.945 0 1.15.7 1.15 1.118V22H3.305Z"
    />
  </svg>
);
export default SvgRemixJs;
