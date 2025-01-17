import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPepsi = ({
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
      d="M18.005 4.04a2.584 2.584 0 0 1-.256-.221A9.947 9.947 0 0 0 12.001 2c-5.52 0-9.995 4.477-9.995 10a9.963 9.963 0 0 0 1.978 5.972 20.46 20.46 0 0 0 8.764-5.19 20.378 20.378 0 0 0 5.257-8.741Z"
    />
    <path
      fill="#323544"
      d="M12.002 22c5.52 0 9.995-4.478 9.995-10a9.951 9.951 0 0 0-1.53-5.318.537.537 0 0 1-.069-.083 7.11 7.11 0 0 1 .306 2.07 6.965 6.965 0 0 1-.777 3.214 7.275 7.275 0 0 1-2.096 2.428c-.699.515-1.537.952-2.524 1.31-.786.287-1.808.585-3.074.872l-3.65.822a58.699 58.699 0 0 0-4.226 1.126A9.967 9.967 0 0 0 12.002 22Z"
    />
  </svg>
);
export default SvgPepsi;
