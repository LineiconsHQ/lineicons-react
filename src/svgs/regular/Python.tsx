import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPython = ({
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
      d="M21.57 9.429c-.354-1.355-1-2.42-2.355-2.42H17.41v2.13c0 1.645-1.42 3.032-2.936 3.032H9.665c-1.322 0-2.355 1.13-2.355 2.452v4.55c0 1.257 1.13 2.032 2.355 2.451 1.485.452 2.936.549 4.775 0 1.194-.355 2.356-1.032 2.356-2.452v-1.807h-4.743v-.58h7.162c1.355 0 1.904-.968 2.355-2.42.484-1.581.484-3.033 0-4.936Zm-6.84 9.033c.485 0 .904.42.904.904 0 .484-.42.903-.903.903-.484.032-.904-.42-.904-.903-.032-.484.387-.904.904-.904Zm-5.29-6.904h4.774c1.323 0 2.356-1.097 2.356-2.452V4.621c0-1.258-1.097-2.226-2.356-2.452-1.58-.225-3.323-.225-4.774 0-2.033.355-2.356 1.097-2.356 2.452v1.807h4.775v.58H5.342c-1.355 0-2.581.872-2.936 2.42-.452 1.807-.452 2.936 0 4.808.355 1.42 1.13 2.42 2.549 2.42h1.549v-2.162c-.033-1.581 1.355-2.936 2.936-2.936Zm-.29-6.356a.923.923 0 0 1-.904-.903c0-.484.42-.904.903-.904.484 0 .904.42.904.904 0 .484-.42.903-.904.903Z"
    />
  </svg>
);
export default SvgPython;
