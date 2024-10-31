import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLemonSqueezy = ({
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
      fillRule="evenodd"
      d="M9.633 14.275 15 16.755a2.747 2.747 0 0 1 1.388 1.417c.64 1.5-.236 3.033-1.611 3.584-1.376.552-2.842.197-3.509-1.363L8.932 14.92c-.18-.425.274-.842.701-.644ZM9.954 12.67l5.539-2.094c1.84-.695 3.851.621 3.824 2.534l-.002.075c-.04 1.863-1.994 3.115-3.794 2.456L9.96 13.606a.496.496 0 0 1-.006-.936ZM9.644 11.945l5.444-2.314c1.81-.769 2.268-3.076.851-4.41a9.103 9.103 0 0 0-.056-.051c-1.389-1.29-3.685-.836-4.476.862L8.964 11.28c-.195.418.245.85.68.665ZM8.243 11.03l1.98-5.427c.245-.673.2-1.36-.054-1.951-.643-1.5-2.382-1.983-3.758-1.43-1.375.552-2.152 1.807-1.484 3.366l2.35 5.468c.182.424.808.407.966-.025Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLemonSqueezy;
