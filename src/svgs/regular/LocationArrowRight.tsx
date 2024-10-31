import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocationArrowRight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M4.565 12.785c-1.916-.768-1.873-3.497.068-4.203L18.63 3.486c1.796-.654 3.538 1.088 2.884 2.884l-5.096 13.997c-.706 1.94-3.435 1.984-4.203.067l-2.069-5.163a.75.75 0 0 0-.417-.417l-5.164-2.07Zm.58-2.794c-.646.236-.66 1.145-.022 1.401l5.164 2.07a2.25 2.25 0 0 1 1.251 1.251l2.07 5.164c.256.638 1.165.624 1.4-.023l5.096-13.997a.75.75 0 0 0-.961-.961L5.146 9.99Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLocationArrowRight;
