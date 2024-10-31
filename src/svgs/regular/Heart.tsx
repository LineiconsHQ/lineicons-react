import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeart = ({
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
      fillRule="evenodd"
      d="M11.823 4.771 12 4.95l.177-.178a5.754 5.754 0 0 1 8.138 8.138l-6.724 6.723a2.25 2.25 0 0 1-3.182 0L3.685 12.91a5.754 5.754 0 1 1 8.138-8.138Zm-1.061 1.06a4.254 4.254 0 1 0-6.016 6.017l6.724 6.724a.75.75 0 0 0 1.06 0l6.724-6.724a4.254 4.254 0 0 0-6.016-6.016l-.708.708a.75.75 0 0 1-1.06 0l-.708-.708Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeart;
