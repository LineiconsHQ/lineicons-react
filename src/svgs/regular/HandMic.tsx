import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHandMic = ({
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
      d="M19.09 4.909a5.66 5.66 0 0 0-9.602 4.823l.029.196-5.72 6.632a2.25 2.25 0 0 0 .112 3.06l.469.47a2.25 2.25 0 0 0 3.06.112l6.633-5.72.196.028a5.66 5.66 0 0 0 4.823-9.602Zm-6.943 1.06a4.16 4.16 0 1 1 2.574 7.085l-3.777-3.777a4.15 4.15 0 0 1 1.203-3.308ZM4.932 17.54l5.628-6.524 2.424 2.423-6.525 5.628a.75.75 0 0 1-1.02-.037l-.47-.469a.75.75 0 0 1-.037-1.02Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHandMic;
