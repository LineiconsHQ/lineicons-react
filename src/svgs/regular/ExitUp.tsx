import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExitUp = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M12.078 4c.223 0 .423.097.56.252l3.97 3.967a.75.75 0 0 1-1.06 1.06l-2.72-2.717V12.5a.75.75 0 0 1-1.5 0V6.562L8.608 9.28a.75.75 0 0 1-1.06-1.061l3.968-3.965A.748.748 0 0 1 12.078 4Z"
    />
    <path
      fill="#323544"
      d="M22.078 12a2.25 2.25 0 0 0-2.25-2.25H17.95c-.08.12-.175.236-.281.342L16.51 11.25h3.318a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-15.5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h3.318l-1.158-1.158a2.263 2.263 0 0 1-.282-.342H4.328A2.25 2.25 0 0 0 2.078 12v6a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25v-6Z"
    />
  </svg>
);
export default SvgExitUp;
