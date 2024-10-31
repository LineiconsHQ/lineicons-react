import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHelicopter2 = ({
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
      d="M19.125 6.734h-5.25v1.5h.126a6.75 6.75 0 0 1 6.75 6.75v.433a2.25 2.25 0 0 1-2.25 2.25H12.13a2.25 2.25 0 0 1-1.806-.907l-2.688-3.617a.75.75 0 0 0-.476-.292l-2.73-.467a2.25 2.25 0 0 1-1.843-1.866l-.582-3.666a.75.75 0 0 1 1.247-.672l2.035 1.858a.75.75 0 0 0 .506.196h6.582v-1.5h-5.25a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5Zm-6.014 3H5.793a2.25 2.25 0 0 1-1.517-.588l-.454-.414.246 1.552a.75.75 0 0 0 .615.621l2.73.468a2.25 2.25 0 0 1 1.426.875l2.689 3.617a.75.75 0 0 0 .602.302h6.37a.75.75 0 0 0 .75-.75v-.433c0-2.9-2.35-5.25-5.25-5.25h-.889ZM22.394 19.348a.75.75 0 1 0-.788-1.276l-.872.538a3.75 3.75 0 0 1-1.969.558H9.79a.75.75 0 0 0 0 1.5h8.976a5.25 5.25 0 0 0 2.756-.782l.872-.538Z"
    />
  </svg>
);
export default SvgHelicopter2;
