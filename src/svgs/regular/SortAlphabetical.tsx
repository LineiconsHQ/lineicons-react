import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSortAlphabetical = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M18.132 3.515a.75.75 0 0 0-1.268.204l-2.78 6.884a.75.75 0 0 0 1.39.562l.467-1.157h3.238l.467 1.157a.75.75 0 1 0 1.39-.562l-2.78-6.882a.769.769 0 0 0-.124-.206Zm.44 4.993h-2.024l1.012-2.506 1.013 2.506Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M6.972 3.47a.75.75 0 0 1 1.06 0l3.002 3a.75.75 0 0 1-1.06 1.061l-1.722-1.72v12.38l1.722-1.72a.75.75 0 0 1 1.06 1.06l-3.002 3a.75.75 0 0 1-1.06 0l-3.002-3a.75.75 0 1 1 1.06-1.06l1.722 1.72V5.811L5.03 7.53a.75.75 0 1 1-1.06-1.06l3.002-3ZM14.62 14.872a.75.75 0 0 1 0-1.5h5.88a.75.75 0 0 1 .53 1.28l-4.599 4.599H20.5a.75.75 0 0 1 0 1.5h-5.88a.75.75 0 0 1-.53-1.28l4.599-4.6h-4.068Z"
    />
  </svg>
);
export default SvgSortAlphabetical;
