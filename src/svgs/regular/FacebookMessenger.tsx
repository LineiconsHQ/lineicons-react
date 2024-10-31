import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebookMessenger = ({
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
      d="M11.968 2.025C6.355 2.025 2 6.155 2 11.703c0 2.935 1.194 5.451 3.129 7.161.13.13.226.355.258.549l.032 1.774c.033.548.581.967 1.13.71l2-.872c.128-.032.354-.096.548-.032.903.226 1.87.42 2.903.42 5.645-.033 10-4.162 10-9.678 0-5.516-4.387-9.71-10.032-9.71Zm6 7.452-2.936 4.613c-.451.71-1.451.968-2.129.42l-2.322-1.775a.699.699 0 0 0-.71 0L6.71 15.09c-.42.322-.968-.194-.678-.645l2.936-4.613c.451-.71 1.451-.968 2.129-.42l2.322 1.775a.699.699 0 0 0 .71 0l3.13-2.42c.483-.193.967.29.709.71Z"
    />
  </svg>
);
export default SvgFacebookMessenger;
