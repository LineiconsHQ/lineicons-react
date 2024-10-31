import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSteam = ({
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
      d="M11.968 2C6.767 2 2.4 6.045 2.048 11.181l5.329 2.216c.45-.322.995-.45 1.573-.45h.128l2.344-3.5v-.031a3.74 3.74 0 0 1 3.756-3.756c2.087 0 3.788 1.67 3.788 3.756a3.74 3.74 0 0 1-3.756 3.756h-.096l-3.403 2.44v.128a2.863 2.863 0 0 1-2.857 2.857c-1.349 0-2.536-.995-2.761-2.247l-3.724-1.637C3.557 18.886 7.44 22 11.968 22c5.49-.032 9.983-4.494 9.983-10.016S17.457 2 11.968 2Z"
    />
    <path
      fill="#323544"
      d="m8.276 17.152-1.22-.481c.225.45.578.867 1.092 1.027 1.027.45 2.311-.032 2.76-1.123a2.072 2.072 0 0 0 0-1.638 2.263 2.263 0 0 0-1.123-1.188c-.514-.224-1.027-.192-1.54-.032l1.251.546c.77.353 1.188 1.252.867 2.023-.353.802-1.252 1.155-2.087.866ZM17.778 9.416c0-1.349-1.124-2.536-2.536-2.536-1.349 0-2.536 1.123-2.536 2.536 0 1.412 1.188 2.536 2.536 2.536s2.536-1.156 2.536-2.536Zm-4.366 0c0-1.027.867-1.862 1.862-1.862 1.027 0 1.862.867 1.862 1.862 0 1.027-.867 1.862-1.862 1.862-1.027.032-1.862-.835-1.862-1.862Z"
    />
  </svg>
);
export default SvgSteam;
