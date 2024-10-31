import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCertificateBadge1 = ({
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
      d="M2 6.75A2.25 2.25 0 0 1 4.25 4.5h15.5A2.25 2.25 0 0 1 22 6.75v5.588a6.914 6.914 0 0 0-1.5-1.393V6.75a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h5.638a6.82 6.82 0 0 0 .49 1.5H4.25A2.25 2.25 0 0 1 2 17.25V6.75Z"
    />
    <path
      fill="#323544"
      d="M18.25 9.75H5.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5ZM10.945 12.75a6.909 6.909 0 0 1 1.33-1.448.747.747 0 0 0-.275-.052H5.75a.75.75 0 0 0 0 1.5h5.195Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M20.657 15.281c0 1.217-.54 2.308-1.392 3.047v2.922a.75.75 0 0 1-1.256.553l-1.383-1.264-1.382 1.264a.75.75 0 0 1-1.256-.553v-2.919a4.031 4.031 0 1 1 6.668-3.05Zm-4.032-2.531a2.532 2.532 0 1 0 0 5.063 2.532 2.532 0 0 0 0-5.063Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCertificateBadge1;
