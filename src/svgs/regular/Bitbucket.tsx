import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBitbucket = ({
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
      d="M12 2C7.234 2 3.32 3.277 3.32 4.894c0 .425 1.02 6.468 1.446 8.85.17 1.107 2.979 2.639 7.234 2.639 4.256 0 6.979-1.532 7.234-2.638.426-2.383 1.447-8.426 1.447-8.851C20.596 3.277 16.766 2 12 2Zm0 12.425a2.689 2.689 0 0 1-2.723-2.723A2.689 2.689 0 0 1 12 8.98a2.689 2.689 0 0 1 2.723 2.723c0 1.447-1.191 2.723-2.723 2.723Zm0-8.68c-3.064 0-5.532-.511-5.532-1.192 0-.68 2.468-1.191 5.532-1.191s5.532.51 5.532 1.191S15.064 5.745 12 5.745Z"
    />
    <path
      fill="#323544"
      d="M18.281 16.043c-.17 0-.255.085-.255.085s-2.128 1.702-5.957 1.702c-3.83 0-5.958-1.702-5.958-1.702s-.17-.085-.255-.085c-.17 0-.34.085-.34.34v.085c.34 1.787.595 3.064.595 3.234C6.366 20.98 8.92 22 11.983 22c3.064 0 5.617-1.021 5.873-2.298 0-.17.255-1.447.595-3.234v-.085c.086-.17 0-.34-.17-.34ZM12 12.979a1.362 1.362 0 1 0 0-2.724 1.362 1.362 0 0 0 0 2.724Z"
    />
  </svg>
);
export default SvgBitbucket;
