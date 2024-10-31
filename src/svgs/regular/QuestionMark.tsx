import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuestionMark = ({
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
      d="M9.16 8.84a2.84 2.84 0 1 1 4.66 2.177c-.522.437-1.154.97-1.65 1.588-.501.62-.92 1.396-.92 2.323v.822a.75.75 0 0 0 1.5 0v-.822c0-.453.201-.903.588-1.383.39-.484.909-.929 1.445-1.378A4.34 4.34 0 1 0 7.66 8.84a.75.75 0 1 0 1.5 0ZM11.998 17.851a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z"
    />
  </svg>
);
export default SvgQuestionMark;
