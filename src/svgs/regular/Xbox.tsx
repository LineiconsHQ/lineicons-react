import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgXbox = ({
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
      d="m8.888 7.942.42-.484-.742-.645C7.34 5.717 6.534 5.168 5.792 4.91c-.58-.225-.644-.193-1.128.323-1.129 1.225-2.128 3.225-2.419 4.934-.225 1.419-.258 1.773-.193 2.45.258 2.032.71 3.451 1.677 4.87.419.58.483.742.354.42-.193-.452-.032-1.549.355-2.58.742-1.968 2.644-5.16 4.45-7.385ZM7.405 3.395c1.354 0 2.627.426 3.838 1.032.387.258.774.419.774.387 0 0 .419-.194.87-.42 1.484-.741 2.902-1.096 3.87-1.032l.484.033-.323-.097c-.677-.452-1.967-.903-2.999-1.129-1-.225-2.87-.225-3.87 0-.87.194-1.547.42-2.321.774-.871.452-.936.516-.323.452ZM12.113 10.134c-.193-.032-2 1.548-3.257 2.903-2.257 2.418-3.58 4.482-3.58 5.707 0 .58.226.903 1.355 1.645 1.354.903 2.902 1.451 4.45 1.58 1.258.097 2.806-.032 4.031-.419 1.451-.451 3.418-1.677 3.709-2.257.419-.774-.42-2.58-2.193-4.773-1.097-1.354-4.16-4.321-4.515-4.386ZM21.82 10.07a11.567 11.567 0 0 0-1.677-3.87c-.483-.677-1.128-1.354-1.322-1.354-.323 0-1 .226-1.451.548-.58.355-1.129.806-1.967 1.548l-.645.548.58.742c1.806 2.257 3.773 5.643 4.354 7.449.258.806.419 1.645.322 2.096-.032.322-.032.322.032.226.258-.323.807-1.258 1.032-1.774.258-.645.58-1.644.742-2.354.226-.935.194-2.902 0-3.805Z"
    />
  </svg>
);
export default SvgXbox;
