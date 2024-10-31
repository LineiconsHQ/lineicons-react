import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrello = ({
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
      d="M19.52 2.016H4.512A2.515 2.515 0 0 0 2 4.528v14.976c0 1.352 1.127 2.48 2.512 2.48h14.976c1.353 0 2.512-1.128 2.512-2.513V4.528c-.032-1.385-1.127-2.512-2.48-2.512ZM10.792 17.12a1.21 1.21 0 0 1-1.191 1.192H5.897c-.644 0-1.192-.548-1.224-1.192V5.784a1.21 1.21 0 0 1 1.192-1.192h3.671a1.21 1.21 0 0 1 1.192 1.192l.064 11.336Zm8.6-4.992A1.21 1.21 0 0 1 18.2 13.32h-3.64a1.21 1.21 0 0 1-1.191-1.192V5.784a1.21 1.21 0 0 1 1.191-1.192h3.64a1.21 1.21 0 0 1 1.191 1.192v6.344Z"
    />
  </svg>
);
export default SvgTrello;
