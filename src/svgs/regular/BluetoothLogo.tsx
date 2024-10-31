import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBluetoothLogo = ({
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
      d="m12.808 6.938 1.654 1.654-1.653 1.652V6.938Zm0 10.123 1.654-1.654-1.653-1.652v3.306Zm-1.765-5.062L7.468 8.416 8.504 7.38l2.848 2.849V3.4L16.53 8.58 13.11 12l3.42 3.42-5.179 5.178v-6.827L8.504 16.62l-1.036-1.037L11.043 12ZM12 22c4.367 0 7.376-2.075 7.376-10 0-7.926-3.009-10-7.376-10-4.366 0-7.377 2.075-7.377 10S7.633 22 12 22Z"
    />
  </svg>
);
export default SvgBluetoothLogo;
