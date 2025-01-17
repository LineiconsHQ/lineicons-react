import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCodepen = ({
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
      d="m21.66 8.264-9.18-6.12a.878.878 0 0 0-.966 0l-9.146 6.12c-.225.129-.354.451-.354.676v6.087c0 .258.129.548.354.741l9.147 6.087a.878.878 0 0 0 .966 0l9.146-6.087c.226-.129.355-.45.355-.74V8.94c.032-.257-.097-.547-.323-.676Zm-8.793-3.8 6.731 4.509-3.06 1.996-3.703-2.512c.032 0 .032-3.993.032-3.993Zm-1.707 0v3.993L7.424 10.97 4.43 8.973l6.731-4.51ZM3.753 10.55 5.878 12l-2.125 1.45v-2.9Zm7.407 8.985-6.73-4.509 2.994-1.996 3.736 2.512v3.993Zm.87-5.475L8.97 12l3.06-2.061L15.09 12l-3.06 2.061Zm.837 5.475v-3.993l3.736-2.512 2.995 1.996-6.73 4.51Zm7.407-6.087L18.15 12l2.125-1.45v2.9Z"
    />
  </svg>
);
export default SvgCodepen;
