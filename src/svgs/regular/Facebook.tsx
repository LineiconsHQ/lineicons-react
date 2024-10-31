import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebook = ({
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
      d="M12 2.54c5.523 0 10 4.476 10 10 0 4.99-3.657 9.127-8.438 9.878V15.43h2.33l.444-2.89-2.773-.001v-1.922c.015-.774.411-1.515 1.63-1.515h1.26V6.64s-1.144-.196-2.238-.196c-2.249 0-3.73 1.342-3.776 3.774l-.002.117v2.203H7.899v2.89h2.54v6.988C5.657 21.667 2 17.53 2 12.54c0-5.523 4.477-10 10-10Z"
    />
  </svg>
);
export default SvgFacebook;
