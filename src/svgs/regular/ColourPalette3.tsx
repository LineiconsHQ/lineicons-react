import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgColourPalette3 = ({
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
      d="M15.028 7.227a1.25 1.25 0 1 1 1.768 1.767 1.25 1.25 0 0 1-1.768-1.767ZM9.018 15.005a1.25 1.25 0 1 0-1.767 1.768 1.25 1.25 0 0 0 1.767-1.768ZM7.034 9.369a1.25 1.25 0 1 1-.647 2.415 1.25 1.25 0 0 1 .647-2.415ZM10.923 7.895a1.25 1.25 0 1 0-.647-2.415 1.25 1.25 0 0 0 .647 2.415Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2.023 12c0-5.523 4.478-10 10-10 5.523 0 10 4.477 10 10 0 .735-.607 1.273-1.288 1.273h-3.698a3.004 3.004 0 0 0-2.127 5.125c.54.541.739 1.286.59 1.956a1.87 1.87 0 0 1-1.484 1.447c-.644.13-1.31.199-1.993.199-5.522 0-10-4.477-10-10Zm10-8.5a8.5 8.5 0 1 0 1.696 16.831c.189-.038.283-.151.317-.301a.63.63 0 0 0-.188-.573 4.504 4.504 0 0 1 3.19-7.684h3.482A8.5 8.5 0 0 0 12.023 3.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgColourPalette3;
