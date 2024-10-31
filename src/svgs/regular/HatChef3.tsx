import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHatChef3 = ({
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
      d="M12.001 2a4.748 4.748 0 0 0-4.163 2.46 3.73 3.73 0 0 0-2.723 6.86l.425.245V20c0 .414.336.75.75.75h11.352a.75.75 0 0 0 .75-.75v-8.397l.494-.284a3.73 3.73 0 0 0-2.723-6.86A4.748 4.748 0 0 0 12 2ZM8.944 5.645a3.252 3.252 0 0 1 6.114-.001.75.75 0 0 0 1.023.424 2.23 2.23 0 0 1 2.055 3.952l-.869.5a.75.75 0 0 0-.375.65v4.33H7.04v-4.368a.75.75 0 0 0-.375-.65l-.8-.461a2.23 2.23 0 0 1 2.056-3.952.75.75 0 0 0 1.023-.424ZM7.04 17h9.852v2.25H7.04V17Z"
    />
  </svg>
);
export default SvgHatChef3;
