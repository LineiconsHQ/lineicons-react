import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAndroid = ({
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
      d="M16.604 14.784a.833.833 0 1 1 0-1.666.833.833 0 0 1 0 1.666Zm-9.206 0a.833.833 0 1 1 0-1.666.833.833 0 0 1 0 1.666Zm9.504-5.016 1.665-2.883a.345.345 0 0 0-.127-.473.346.346 0 0 0-.473.126l-1.685 2.92A10.274 10.274 0 0 0 12 8.541a10.28 10.28 0 0 0-4.28.915L6.034 6.538a.346.346 0 0 0-.6.347L7.1 9.768C4.242 11.322 2.287 14.216 2 17.634h20c-.286-3.418-2.241-6.312-5.099-7.866Z"
    />
  </svg>
);
export default SvgAndroid;
