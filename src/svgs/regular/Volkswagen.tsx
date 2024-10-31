import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolkswagen = ({
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
      d="M13.889 4.75a7.13 7.13 0 0 0-1.885-.245c-.645 0-1.254.086-1.85.237l1.871 5.24 1.864-5.233ZM19.38 12.004c0-.936-.156-1.828-.468-2.656l-3.507 9.298a7.524 7.524 0 0 0 3.975-6.642Z"
    />
    <path
      fill="#323544"
      d="m15.717 5.52-2.161 6.044h-3.047L8.341 5.49a7.434 7.434 0 0 0-2.084 1.814l3.083 8.118 1.127-2.965h2.961l1.127 2.965 3.111-8.219a7.387 7.387 0 0 0-1.956-1.691"
    />
    <path
      fill="#323544"
      d="M12.004 2c-5.42 0-9.85 4.49-9.85 10.004 0 5.512 4.43 9.996 9.85 9.996s9.843-4.498 9.843-9.996C21.847 6.505 17.432 2 12.004 2Zm0 18.726c-4.726 0-8.595-3.915-8.595-8.715s3.861-8.737 8.595-8.737 8.595 3.922 8.595 8.737c0 4.815-3.861 8.715-8.595 8.715Z"
    />
    <path
      fill="#323544"
      d="m11.94 14.055-1.906 5.016v.158c.623.18 1.282.267 1.97.267a7.23 7.23 0 0 0 1.863-.238l-.021-.187-1.906-5.016ZM4.627 12.004a7.493 7.493 0 0 0 3.84 6.563L5.046 9.514a7.4 7.4 0 0 0-.418 2.49Z"
    />
  </svg>
);
export default SvgVolkswagen;
