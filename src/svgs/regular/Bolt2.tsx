import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBolt2 = ({
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
      fillRule="evenodd"
      d="M6.677 3.093A.75.75 0 0 1 7.41 2.5h7.28a.75.75 0 0 1 .678 1.069l-2.18 4.646h5.652a.75.75 0 0 1 .635 1.149l-8.029 12.785a.75.75 0 0 1-1.382-.464l.62-7.15H5.16a.75.75 0 0 1-.733-.906l2.25-10.536ZM8.017 4l-1.93 9.035h5.415a.75.75 0 0 1 .747.815l-.423 4.873 5.657-9.008h-5.476a.75.75 0 0 1-.679-1.069L13.508 4H8.018Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBolt2;
