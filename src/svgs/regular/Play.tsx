import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlay = ({
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
      d="M19.436 13.917c1.43-.878 1.43-2.956 0-3.834l-9.884-6.07c-1.499-.92-3.427.159-3.427 1.918V18.07c0 1.759 1.928 2.838 3.427 1.917l9.884-6.069Zm-.785-2.556a.75.75 0 0 1 0 1.278l-9.884 6.069a.75.75 0 0 1-1.142-.64V5.932a.75.75 0 0 1 1.142-.639l9.884 6.069Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlay;
