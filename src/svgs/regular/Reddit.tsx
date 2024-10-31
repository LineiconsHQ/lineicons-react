import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReddit = ({
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
      d="M8.963 13.707a1.001 1.001 0 0 1 .324-1.631 1 1 0 1 1-.324 1.631ZM14.555 15.594a.27.27 0 0 1-.082.19l.007-.034a3.842 3.842 0 0 1-2.47.77 3.863 3.863 0 0 1-1.912-.42 3.84 3.84 0 0 1-.558-.35.27.27 0 0 1 .38-.38A3.268 3.268 0 0 0 12 16a3.276 3.276 0 0 0 2.09-.61.327.327 0 0 1 .199-.07.27.27 0 0 1 .266.274ZM14.685 14.003c-.125.052-.26.079-.395.077l.01-.04a1 1 0 1 1 1-1 .997.997 0 0 1-.615.963Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-3.381.406c.036-.132.053-.269.051-.406a1.46 1.46 0 0 0-2.47-1 7.108 7.108 0 0 0-3.85-1.23L13 6.65l2.14.45a1 1 0 1 0 .13-.61L12.82 6a.312.312 0 0 0-.37.24l-.74 3.47a7.137 7.137 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.672 2.672 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.682 2.682 0 0 0 0-.44 1.455 1.455 0 0 0 .759-.924Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReddit;
