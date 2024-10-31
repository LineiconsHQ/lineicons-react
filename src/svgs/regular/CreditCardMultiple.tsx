import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreditCardMultiple = ({
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
      d="M3.91 6.279a2.25 2.25 0 0 0-1.59 2.755l2.432 9.068v.398a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V9.824a2.25 2.25 0 0 0-2.206-2.25l-.823-3.069a2.25 2.25 0 0 0-2.756-1.59L3.91 6.278Zm16.842 4.538h-14.5v-.993a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v.993Zm-16 1.502-.984-3.673a.75.75 0 0 1 .53-.918l12.558-3.365a.75.75 0 0 1 .918.53l.718 2.681H7.002a2.25 2.25 0 0 0-2.25 2.25v2.495Zm1.5 1.295h14.5V18.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-4.886Z"
    />
  </svg>
);
export default SvgCreditCardMultiple;
