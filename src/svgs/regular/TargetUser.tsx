import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTargetUser = ({
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
      d="M10.384 9.86a1.616 1.616 0 1 1 3.232 0 1.616 1.616 0 0 1-3.232 0ZM10.786 12.087a2.238 2.238 0 0 0-2.238 2.238v.93c0 .415.336.75.75.75h5.405a.75.75 0 0 0 .75-.75v-.93a2.238 2.238 0 0 0-2.239-2.238h-2.428Zm-.738 2.238c0-.407.33-.738.738-.738h2.428c.408 0 .739.33.739.738v.18h-3.905v-.18Z"
    />
    <path
      fill="#323544"
      d="M12.75 2a.75.75 0 0 0-1.5 0v1.282a8.752 8.752 0 0 0-7.968 7.968H2a.75.75 0 0 0 0 1.5h1.282a8.752 8.752 0 0 0 7.968 7.968V22a.75.75 0 0 0 1.5 0v-1.282a8.752 8.752 0 0 0 7.968-7.968H22a.75.75 0 0 0 0-1.5h-1.282a8.752 8.752 0 0 0-7.968-7.968V2Zm-7.5 10.75a.75.75 0 0 0 0-1.5h-.462a7.253 7.253 0 0 1 6.462-6.462v.462a.75.75 0 0 0 1.5 0v-.462a7.253 7.253 0 0 1 6.462 6.462h-.462a.75.75 0 0 0 0 1.5h.462a7.253 7.253 0 0 1-6.462 6.462v-.462a.75.75 0 0 0-1.5 0v.462a7.253 7.253 0 0 1-6.462-6.462h.462Z"
    />
  </svg>
);
export default SvgTargetUser;
