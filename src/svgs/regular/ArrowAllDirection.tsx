import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowAllDirection = ({
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
      d="M2.571 11.948a.748.748 0 0 0 0 1.105l2.29 2.29a.75.75 0 1 0 1.06-1.06L4.89 13.25h4.313a.75.75 0 0 0 0-1.5H4.89l1.032-1.032a.75.75 0 1 0-1.061-1.06l-2.29 2.289ZM12.897 2.761a.748.748 0 0 0-1.12-.018l-2.292 2.29a.75.75 0 1 0 1.061 1.061l1.033-1.032v4.313a.75.75 0 1 0 1.5 0V5.064l1.03 1.03a.75.75 0 1 0 1.062-1.06l-2.274-2.273ZM13.079 15.624a.75.75 0 0 0-1.5 0v4.316l-1.032-1.033a.75.75 0 1 0-1.061 1.061l2.312 2.313a.75.75 0 0 0 1.061 0l2.312-2.313a.75.75 0 0 0-1.06-1.06l-1.032 1.031v-4.315ZM15.452 11.75a.75.75 0 0 0 0 1.5h4.315l-1.032 1.033a.75.75 0 1 0 1.06 1.061l2.313-2.312a.75.75 0 0 0-.013-1.073l-2.3-2.3a.75.75 0 0 0-1.06 1.06l1.03 1.032h-4.313Z"
    />
  </svg>
);
export default SvgArrowAllDirection;
