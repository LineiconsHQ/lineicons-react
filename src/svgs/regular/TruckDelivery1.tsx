import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTruckDelivery1 = ({
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
      d="M4.25 3.25A2.25 2.25 0 0 0 2 5.5V16a2.25 2.25 0 0 0 2.25 2.25h.052a3.066 3.066 0 0 0 6.026 0h3.724a3.066 3.066 0 0 0 6.026 0H22a.75.75 0 0 0 0-1.5v-4.345c0-.45-.134-.889-.386-1.26l-2.547-3.766a2.25 2.25 0 0 0-1.863-.989H15.75V5.5a2.25 2.25 0 0 0-2.25-2.25H4.25Zm3.065 11.37a3.066 3.066 0 0 0-2.92 2.13H4.25A.75.75 0 0 1 3.5 16V5.5a.75.75 0 0 1 .75-.75h9.25a.75.75 0 0 1 .75.75v10.97c-.04.091-.074.185-.105.28h-3.91a3.066 3.066 0 0 0-2.92-2.13Zm9.75 0c-.47 0-.917.106-1.315.296v-2.221h4.75v4.055h-.515a3.066 3.066 0 0 0-2.92-2.13Zm2.772-3.425H15.75V7.89h1.454a.75.75 0 0 1 .62.33l2.013 2.975Zm-4.337 6.49a1.565 1.565 0 1 1 3.13 0 1.565 1.565 0 0 1-3.13 0Zm-9.75 0a1.565 1.565 0 1 1 3.13 0 1.565 1.565 0 0 1-3.13 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTruckDelivery1;
