import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgProtonMailSymbol = ({
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
      d="M4.099 16.785V22h3.656v-4.992c0-.477.191-.954.54-1.304a1.8 1.8 0 0 1 1.304-.54h3.72c1.75 0 3.435-.7 4.643-1.94a6.62 6.62 0 0 0 1.94-4.674 6.62 6.62 0 0 0-1.94-4.674A6.704 6.704 0 0 0 13.32 2H4.099v6.518h3.656V5.434h5.31c.827 0 1.622.318 2.194.922.604.572.922 1.367.922 2.194s-.318 1.622-.922 2.194a3.132 3.132 0 0 1-2.194.922H9.218c-.668 0-1.336.127-1.94.382a5.226 5.226 0 0 0-1.653 1.113 5.227 5.227 0 0 0-1.113 1.653 4.772 4.772 0 0 0-.413 1.971Z"
    />
  </svg>
);
export default SvgProtonMailSymbol;
