import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGatsby = ({
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
      d="M12 2C6.452 2 2 6.452 2 12s4.452 10 10 10 10-4.452 10-10S17.548 2 12 2ZM4.129 12.097l7.742 7.742c-4.226-.032-7.677-3.484-7.742-7.742Zm9.645 7.548-9.42-9.42C5.195 6.743 8.259 4.13 12 4.13a7.896 7.896 0 0 1 6.355 3.226l-1.097.968C16.13 6.645 14.161 5.58 12 5.58c-2.774 0-5.129 1.774-6.032 4.225l8.226 8.226c2-.742 3.548-2.42 4.032-4.516h-3.42V12h5.033c.032 3.742-2.613 6.871-6.065 7.645Z"
    />
  </svg>
);
export default SvgGatsby;
