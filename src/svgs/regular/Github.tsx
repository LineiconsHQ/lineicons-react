import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGithub = ({
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
      d="M12 2.249c-5.484 0-10 4.452-10 10 0 4.387 2.871 8.13 6.871 9.484.516.097.677-.226.677-.452s0-.87-.032-1.742c-2.774.645-3.355-1.355-3.355-1.355-.451-1.129-1.129-1.451-1.129-1.451-.903-.645.033-.645.033-.645 1 .032 1.548 1.032 1.548 1.032.87 1.548 2.355 1.097 2.903.806.097-.645.355-1.096.645-1.354-2.193-.226-4.548-1.097-4.548-4.904 0-1.096.42-1.967 1.032-2.645-.097-.226-.451-1.258.097-2.645 0 0 .87-.258 2.774 1.032a9.296 9.296 0 0 1 2.516-.355c.871 0 1.742.097 2.516.355 1.904-1.258 2.742-1.032 2.742-1.032.549 1.355.226 2.42.097 2.645.645.678 1.032 1.58 1.032 2.645 0 3.807-2.355 4.678-4.548 4.904.355.322.677.967.677 1.87 0 1.355-.032 2.42-.032 2.742 0 .259.194.549.678.452C19.128 20.314 22 16.604 22 12.185c-.032-5.484-4.516-9.936-10-9.936Z"
    />
  </svg>
);
export default SvgGithub;