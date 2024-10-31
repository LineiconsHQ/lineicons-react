import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBike = ({
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
      d="M15.792 3.616a1.25 1.25 0 1 0-1.768 1.768 1.25 1.25 0 0 0 1.768-1.768ZM17.068 10.218a.75.75 0 1 0 .088-1.497l-2.082-.122a.75.75 0 0 1-.636-.432l-.784-1.68a1.593 1.593 0 0 0-2.568-.452L8.428 8.693a1.61 1.61 0 0 0 .386 2.562l2.056 1.089a.75.75 0 0 1 .399.668l-.018 2.659a.75.75 0 0 0 1.5.01l.018-2.66a2.25 2.25 0 0 0-1.197-2.003l-1.272-.673 2.385-2.387.394.843a2.25 2.25 0 0 0 1.907 1.295l2.082.122Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2 15.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm3.75-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM18.25 12a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM16 15.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBike;
