import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitch = ({
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
      d="M3.774 2 2.45 5.452v14.032h4.774V22h2.678l2.548-2.548h3.871l5.226-5.226V2H3.774ZM19.74 13.323l-3 3H12L9.451 18.87v-2.548H5.42V3.774H19.74v9.549Zm-2.967-6.097v5.226h-1.775V7.226h1.775Zm-4.775 0v5.226h-1.774V7.226H12Z"
    />
  </svg>
);
export default SvgTwitch;
