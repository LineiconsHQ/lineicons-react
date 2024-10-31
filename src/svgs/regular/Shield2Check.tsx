import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShield2Check = ({
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
      d="M15.507 9.776a.75.75 0 0 0-1.06-1.06l-3.482 3.48-1.411-1.41a.75.75 0 0 0-1.061 1.06l1.941 1.942a.75.75 0 0 0 1.061 0l4.012-4.012Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.86 2.296a2.25 2.25 0 0 0-1.721 0L4.59 5.01a2.184 2.184 0 0 0-1.362 1.944c-.134 4.54 1.204 10.818 7.707 14.57.66.382 1.475.378 2.132-.01 6.363-3.75 7.82-10.012 7.703-14.557-.023-.883-.585-1.625-1.361-1.947l-6.548-2.713Zm-1.147 1.386a.75.75 0 0 1 .574 0l6.548 2.713a.68.68 0 0 1 .436.6c.108 4.228-1.24 9.852-6.966 13.227a.616.616 0 0 1-.62.002c-5.843-3.371-7.083-8.988-6.958-13.227a.685.685 0 0 1 .437-.602l6.549-2.713Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShield2Check;
