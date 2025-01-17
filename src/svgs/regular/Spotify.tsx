import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpotify = ({
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
      d="M12 2C6.452 2 2 6.452 2 12s4.452 10 10 10 10-4.452 10-10S17.548 2 12 2Zm4.58 14.42a.739.739 0 0 1-.87.225c-2.355-1.451-5.323-1.774-8.775-1a.59.59 0 0 1-.741-.451c-.097-.355.129-.678.451-.775 3.807-.87 7.032-.484 9.742 1.13.29.225.387.58.194.87Zm1.227-2.678c-.226.355-.742.451-1.033.226-2.677-1.645-6.774-2.13-9.968-1.13-.419.13-.87-.096-.967-.548-.13-.419.096-.87.548-.967 3.645-1.13 8.13-.549 11.226 1.322.29.226.42.678.194 1.097Zm.096-2.871c-3.226-1.903-8.548-2.097-11.645-1.13-.452.13-1-.128-1.129-.644-.129-.452.13-1 .645-1.13 3.549-1.032 9.355-.87 13.097 1.356.452.258.58.87.355 1.258-.258.419-.871.548-1.323.29Z"
    />
  </svg>
);
export default SvgSpotify;
