import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZoom = ({
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
      d="M21.604 7.442a.695.695 0 0 0-.76.033l-3.53 2.313a1.015 1.015 0 0 0-.462.871v2.682c0 .335.165.67.462.872l3.53 2.312c.133.067.265.135.397.135a.744.744 0 0 0 .363-.101.807.807 0 0 0 .396-.67V8.111a.764.764 0 0 0-.396-.67Zm-1.09 7.072-2.177-1.441v-2.179l2.178-1.441v5.061ZM11.538 6.604H2.759a.774.774 0 0 0-.759.77v6.302c0 2.045 1.683 3.72 3.762 3.72h8.78a.774.774 0 0 0 .758-.77v-6.302c0-2.045-1.683-3.72-3.762-3.72Zm2.277 9.284H5.762c-1.254 0-2.277-1.005-2.277-2.212V8.112h8.053c1.254 0 2.277 1.005 2.277 2.212v5.564Z"
    />
  </svg>
);
export default SvgZoom;
