import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDialogflow = ({
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
      d="M12 12.053 3.935 8.02v6.815c-.001.154.07.3.191.394L8.804 18a.323.323 0 0 1 .172.293v3.539a.172.172 0 0 0 .262.141l10.596-6.745a.505.505 0 0 0 .232-.424V8.02L12 12.053Z"
    />
    <path
      fill="#323544"
      d="m12 10.036 8.066-4.033-7.945-3.972a.252.252 0 0 0-.242 0L3.935 6.003 12 10.036Z"
    />
  </svg>
);
export default SvgDialogflow;
