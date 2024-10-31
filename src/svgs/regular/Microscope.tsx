import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicroscope = ({
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
      d="M15.461 2.3a2.25 2.25 0 0 0-3.073.823l-2.811 4.87a2.25 2.25 0 0 0 .823 3.073l.866.5a2.25 2.25 0 0 0 3.074-.824l1.742-3.018a5.642 5.642 0 0 1-4.053 9.56l-.006.001h-.006c-1.5-.002-2.733-.782-3.592-2.021h2.237a.75.75 0 1 0 0-1.5h-7a.75.75 0 0 0 0 1.5h3.015c.93 1.779 2.495 3.198 4.596 3.473V20.5h-3.25a.75.75 0 0 0 0 1.5h3.964a.722.722 0 0 0 .073 0h3.963a.75.75 0 1 0 0-1.5h-3.25v-1.754a7.143 7.143 0 0 0 4.083-12.362l.295-.51a2.25 2.25 0 0 0-.824-3.074l-.866-.5Zm-1.774 1.573A.75.75 0 0 1 14.71 3.6l.866.5a.75.75 0 0 1 .275 1.024l-2.811 4.87a.75.75 0 0 1-1.025.274l-.866-.5a.75.75 0 0 1-.274-1.025l2.81-4.869Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMicroscope;
