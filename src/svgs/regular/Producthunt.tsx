import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgProducthunt = ({
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
      d="M13.322 9h-2.87v3h2.87c.807 0 1.517-.677 1.517-1.484.032-.87-.71-1.516-1.517-1.516Z"
    />
    <path
      fill="#323544"
      d="M12 2C6.452 2 2 6.452 2 12s4.452 10 10 10 10-4.452 10-10S17.548 2 12 2Zm1.323 12h-2.871v3h-2V7h4.87a3.484 3.484 0 0 1 3.517 3.516C16.87 12.452 15.259 14 13.323 14Z"
    />
  </svg>
);
export default SvgProducthunt;
