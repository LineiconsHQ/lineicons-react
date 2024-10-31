import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBusketBall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M12 2.5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10ZM6.598 5.937a8.461 8.461 0 0 1 4.652-1.904v3.809a8.461 8.461 0 0 1-4.652-1.905ZM5.524 6.994a9.956 9.956 0 0 0 5.726 2.353v2.403H3.533a8.463 8.463 0 0 1 1.99-4.756Zm7.226 2.353a9.957 9.957 0 0 0 5.726-2.353 8.464 8.464 0 0 1 1.991 4.756H12.75V9.347Zm4.652-3.41a8.46 8.46 0 0 1-4.652 1.905v-3.81a8.46 8.46 0 0 1 4.652 1.905ZM3.532 13.25h7.718v2.402a9.957 9.957 0 0 0-5.727 2.353 8.463 8.463 0 0 1-1.99-4.755Zm3.065 5.812a8.462 8.462 0 0 1 4.653-1.905v3.81a8.461 8.461 0 0 1-4.653-1.905Zm6.153-1.905a8.462 8.462 0 0 1 4.653 1.905 8.461 8.461 0 0 1-4.653 1.905v-3.81Zm5.727.848a9.956 9.956 0 0 0-5.727-2.353V13.25h7.717a8.463 8.463 0 0 1-1.99 4.755Z"
    />
  </svg>
);
export default SvgBusketBall;
