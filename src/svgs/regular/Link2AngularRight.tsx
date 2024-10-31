import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLink2AngularRight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M18.102 14.1a2.25 2.25 0 0 1-3.182 0l-1.362-1.362-1.06 1.06 1.361 1.363a2.25 2.25 0 0 1 0 3.182l-3.74 3.74a2.25 2.25 0 0 1-3.181 0l-3.783-3.784a2.25 2.25 0 0 1 0-3.181l3.74-3.74a2.25 2.25 0 0 1 3.181 0l1.36 1.36 1.062-1.061-1.36-1.36a2.25 2.25 0 0 1 0-3.182l3.743-3.744a2.25 2.25 0 0 1 3.182 0l3.783 3.783a2.25 2.25 0 0 1 0 3.182L18.102 14.1Zm-7.726-.301-1.36-1.36a.75.75 0 0 0-1.06 0l-3.74 3.74a.75.75 0 0 0 0 1.06l3.783 3.783a.75.75 0 0 0 1.06 0l3.74-3.74a.75.75 0 0 0 0-1.06l-1.362-1.363-1.232 1.232a.75.75 0 1 1-1.06-1.06l1.23-1.232Zm5.605-.76a.75.75 0 0 0 1.06 0l3.744-3.744a.75.75 0 0 0 0-1.06l-3.782-3.783a.75.75 0 0 0-1.061 0l-3.744 3.744a.75.75 0 0 0 0 1.06l1.36 1.36 1.243-1.243a.75.75 0 0 1 1.06 1.06l-1.242 1.244 1.362 1.362Z"
    />
  </svg>
);
export default SvgLink2AngularRight;
