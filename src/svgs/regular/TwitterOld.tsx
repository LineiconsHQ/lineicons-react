import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitterOld = ({
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
      d="M8.226 20.194c7.613 0 11.742-6.29 11.742-11.742 0-.13 0-.355-.032-.549A8.626 8.626 0 0 0 22 5.774a7.767 7.767 0 0 1-2.355.646 3.994 3.994 0 0 0 1.807-2.29c-.807.45-1.646.806-2.646 1-.774-.807-1.806-1.323-3-1.323a4.171 4.171 0 0 0-4.16 4.16c0 .324.031.646.096.969-3.323-.226-6.355-1.871-8.42-4.355a4.204 4.204 0 0 0-.548 2.064c0 1.452.742 2.678 1.871 3.42a4.487 4.487 0 0 1-1.87-.516v.032c0 1.968 1.419 3.677 3.29 4.064-.355.097-.742.13-1.033.13-.258 0-.548-.033-.774-.097.548 1.645 2.065 2.838 3.871 2.87-1.42 1.097-3.194 1.775-5.097 1.775-.387.064-.71 0-1.032-.032 1.742 1.225 3.903 1.903 6.226 1.903Z"
    />
  </svg>
);
export default SvgTwitterOld;
