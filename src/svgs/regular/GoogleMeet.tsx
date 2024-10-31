import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogleMeet = ({
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
      d="M6.685 3.724 2 8.436H13.313V15.563H6.685V8.436H2v10.46c0 .762.614 1.38 1.371 1.38h13.142c.757 0 1.37-.618 1.37-1.38v-2.97l3.009 2.48A.686.686 0 0 0 22 17.863V6.252a.686.686 0 0 0-1.122-.533l-2.994 2.469V5.103c0-.762-.614-1.38-1.371-1.38H6.685Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGoogleMeet;
