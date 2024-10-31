import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapMarker5 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.504 6.475a3.835 3.835 0 1 0 0 7.67 3.835 3.835 0 0 0 0-7.67Zm-2.335 3.835a2.335 2.335 0 1 1 4.67 0 2.335 2.335 0 0 1-4.67 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.503 2.84a7.472 7.472 0 0 0-7.472 7.472c0 2.804 1.072 5.357 2.345 7.406 1.275 2.053 2.782 3.648 3.727 4.551a2.033 2.033 0 0 0 2.836-.004c.94-.904 2.439-2.5 3.706-4.551 1.266-2.049 2.33-4.6 2.33-7.402a7.472 7.472 0 0 0-7.472-7.472Zm-5.972 7.472a5.972 5.972 0 1 1 11.944 0c0 2.425-.925 4.702-2.106 6.613-1.179 1.909-2.583 3.406-3.47 4.26a.534.534 0 0 1-.76 0c-.89-.852-2.303-2.35-3.49-4.258-1.187-1.913-2.118-4.19-2.118-6.615Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMapMarker5;
