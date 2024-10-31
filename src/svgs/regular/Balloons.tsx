import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBalloons = ({
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
      d="M8.91 3.25a5.66 5.66 0 0 0-5.66 5.66c0 1.787.6 3.578 1.58 4.934.827 1.144 1.978 2.046 3.33 2.295V20a.75.75 0 0 0 1.5 0v-3.861c.977-.18 1.85-.701 2.57-1.408.038.055.076.11.115.163.687.95 1.644 1.716 2.776 1.957V20a.75.75 0 0 0 1.5 0v-3.15c1.133-.24 2.09-1.006 2.778-1.957a7.35 7.35 0 0 0 1.351-4.219 4.878 4.878 0 0 0-6.86-4.459A5.66 5.66 0 0 0 8.91 3.25Zm5.513 4.372a3.378 3.378 0 0 1 4.827 3.053 5.85 5.85 0 0 1-1.067 3.34c-.66.914-1.491 1.415-2.311 1.415-.82 0-1.652-.501-2.312-1.415a5.221 5.221 0 0 1-.33-.522 8.64 8.64 0 0 0 1.34-4.583c0-.443-.05-.874-.147-1.288ZM8.91 14.707c-1.036 0-2.062-.632-2.864-1.741C5.249 11.864 4.75 10.38 4.75 8.91a4.16 4.16 0 0 1 8.32 0c0 1.47-.5 2.954-1.296 4.056-.801 1.109-1.828 1.741-2.864 1.741Z"
    />
  </svg>
);
export default SvgBalloons;
