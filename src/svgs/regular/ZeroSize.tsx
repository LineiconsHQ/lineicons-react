import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZeroSize = ({
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
      d="M8.23 2.575a.75.75 0 0 0-1.46.35l.316 1.314a3.75 3.75 0 0 1-.448 2.833l-.604.987a9 9 0 0 0-.665 8.08l2.186 5.393a.75.75 0 0 0 1.39-.564L6.76 15.576c-.24-.59-.4-1.2-.483-1.818 1.569.14 2.828.605 3.72 1.056a8.844 8.844 0 0 1 1.254.768v5.668a.75.75 0 0 0 1.5 0v-5.669l.113-.082c.254-.182.638-.43 1.14-.685a10.257 10.257 0 0 1 3.72-1.056 7.492 7.492 0 0 1-.482 1.818l-2.186 5.392a.75.75 0 0 0 1.39.564l2.186-5.393a9 9 0 0 0-.665-8.08l-.604-.987a3.75 3.75 0 0 1-.448-2.833l.315-1.314a.75.75 0 1 0-1.458-.35l-.316 1.314a5.25 5.25 0 0 0 .628 3.966l.03.048c-.217.113-.492.245-.814.377-.857.352-2.022.694-3.299.694-1.277 0-2.442-.342-3.3-.694a9.979 9.979 0 0 1-.812-.377l.029-.048a5.25 5.25 0 0 0 .628-3.966l-.316-1.314Zm2.444 10.9a11.769 11.769 0 0 0-4.447-1.226c.072-1.06.37-2.104.885-3.059.264.14.609.31 1.02.478.97.398 2.334.806 3.868.806 1.534 0 2.899-.408 3.869-.806.41-.169.755-.338 1.019-.478.516.955.813 1.999.885 3.059-1.877.138-3.384.689-4.447 1.227a10.35 10.35 0 0 0-1.327.796 10.35 10.35 0 0 0-1.325-.796Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M3.28 3.193a.75.75 0 0 0-1.06 1.061l.97.97-.97.97a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5ZM21.78 4.254a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.97-.97.97-.97ZM12.75 6.723a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
    />
  </svg>
);
export default SvgZeroSize;
