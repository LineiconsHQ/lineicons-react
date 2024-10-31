import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDollarCircle = ({
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
      d="M12.25 6.625a.75.75 0 0 1 .75.75v.438c.99.15 1.75 1.006 1.75 2.039a.75.75 0 1 1-1.5 0 .563.563 0 0 0-.563-.563H12a.75.75 0 0 0-.75.75v.265a.75.75 0 0 0 .487.703l1.553.582a2.25 2.25 0 0 1 1.46 2.107v.265A2.25 2.25 0 0 1 13 16.155v.47a.75.75 0 0 1-1.5 0v-.438a2.063 2.063 0 0 1-1.75-2.039.75.75 0 0 1 1.5 0c0 .311.252.563.563.563h.687a.75.75 0 0 0 .75-.75v-.265a.75.75 0 0 0-.487-.702l-1.553-.583a2.25 2.25 0 0 1-1.46-2.107v-.265a2.25 2.25 0 0 1 1.75-2.194v-.47a.75.75 0 0 1 .75-.75Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.25 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Zm-8.5 10a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDollarCircle;
