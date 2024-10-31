import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAsana = ({
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
      d="M16.35 7.12A4.355 4.355 0 0 1 12 11.47a4.355 4.355 0 0 1-4.35-4.35A4.355 4.355 0 0 1 12 2.77a4.312 4.312 0 0 1 4.35 4.35Zm-10 5.41A4.355 4.355 0 0 0 2 16.88a4.355 4.355 0 0 0 4.35 4.35 4.355 4.355 0 0 0 4.349-4.35 4.334 4.334 0 0 0-4.35-4.35Zm11.3 0a4.355 4.355 0 0 0-4.349 4.35 4.355 4.355 0 0 0 4.35 4.35A4.355 4.355 0 0 0 22 16.88a4.334 4.334 0 0 0-4.35-4.35Z"
    />
  </svg>
);
export default SvgAsana;
