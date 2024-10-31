import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNpm = ({
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
      d="M12 12.58h-1.129v-2.225H12v2.226ZM22 8.13v6.645H12v1.097H7.548v-1.13H2V8.13h20ZM7.548 9.193H3.097v4.452h2.226v-3.29h1.129v3.355H7.58l-.033-4.517Zm5.581 0H8.677v5.549h2.226v-1.13h2.226V9.194Zm7.742 0h-6.645v4.452h2.226v-3.29h1.129v3.355h1.129v-3.355h1.129v3.355h1.129V9.193h-.097Z"
    />
  </svg>
);
export default SvgNpm;
