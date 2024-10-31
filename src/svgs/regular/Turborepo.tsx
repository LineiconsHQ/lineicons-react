import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTurborepo = ({
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
      d="M11.992 5.502A6.506 6.506 0 0 0 5.494 12a6.506 6.506 0 0 0 6.498 6.499A6.506 6.506 0 0 0 18.49 12a6.506 6.506 0 0 0-6.498-6.498Zm0 9.861a3.363 3.363 0 1 1 0-6.725 3.363 3.363 0 0 1 0 6.725Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.537 4.434V2.008C17.81 2.29 22 6.656 22 12c0 5.344-4.19 9.709-9.463 9.992v-2.426C16.467 19.285 19.58 16 19.58 12c0-4-3.113-7.285-7.043-7.566ZM6.26 16.962a7.556 7.556 0 0 1-1.833-4.418H2a9.965 9.965 0 0 0 2.543 6.135l1.717-1.717Zm5.187 5.03v-2.426a7.549 7.549 0 0 1-4.419-1.834L5.312 19.45a9.964 9.964 0 0 0 6.134 2.542h.002Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTurborepo;
