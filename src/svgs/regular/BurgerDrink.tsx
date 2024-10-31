import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBurgerDrink = ({
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
      d="M11.151 4.493A.75.75 0 0 1 11.856 4h2.41a.75.75 0 1 0 0-1.5h-2.41a2.25 2.25 0 0 0-2.114 1.48l-.759 2.083H4a.75.75 0 0 0-.746.823l1.164 11.836a2.25 2.25 0 0 0 2.239 2.03h2.641a2.246 2.246 0 0 1-.129-.754v-.746H6.657a.75.75 0 0 1-.746-.677L4.827 7.563H14.2l-.357 3.625h1.507l.423-4.302a.75.75 0 0 0-.746-.824H10.58l.571-1.569Z"
    />
    <path
      fill="#323544"
      d="M12.919 12.689a2.25 2.25 0 0 0-2.25 2.25v1.033a.75.75 0 0 0 0 1.492v2.535c0 .414.336.75.75.75h7.91a.75.75 0 0 0 .75-.75v-2.535a.75.75 0 0 0 0-1.492V14.94a2.25 2.25 0 0 0-2.25-2.25h-4.91Zm5.66 3.279h-6.41v-1.03a.75.75 0 0 1 .75-.75h4.91a.75.75 0 0 1 .75.75v1.03Zm-6.41 1.5h1.189l.781.78a.75.75 0 0 0 1.06 0l.781-.78h2.6v1.78h-6.411v-1.78Z"
    />
  </svg>
);
export default SvgBurgerDrink;
