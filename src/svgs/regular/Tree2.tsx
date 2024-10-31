import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTree2 = ({
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
      fillRule="evenodd"
      d="M4.523 9.5a7.5 7.5 0 1 1 15 0V11a7.501 7.501 0 0 1-6.75 7.463v2.787a.75.75 0 1 1-1.5 0v-2.787A7.501 7.501 0 0 1 4.523 11V9.5Zm8.25 7.454A6.001 6.001 0 0 0 18.023 11V9.5a6 6 0 0 0-12 0V11c0 3.06 2.29 5.584 5.25 5.954v-2.202a2.241 2.241 0 0 1-.841-.53l-1.019-1.02a.75.75 0 1 1 1.06-1.06l1.02 1.019a.75.75 0 0 0 1.06 0l1.02-1.02a.75.75 0 0 1 1.06 1.061l-1.019 1.02a2.24 2.24 0 0 1-.84.53v2.202Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTree2;
