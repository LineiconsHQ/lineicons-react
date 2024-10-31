import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNodejs = ({
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
      d="M11.903 22c-.258 0-.548-.032-.774-.226l-2.452-1.451c-.355-.226-.193-.259-.032-.323.484-.129.58-.226 1.097-.484.032-.032.129-.032.193.032l1.871 1.13c.033.032.13.032.226 0l7.323-4.226c.032-.033.129-.13.129-.194V7.774c0-.097-.033-.129-.13-.193L12 3.419c-.032-.032-.13-.032-.226 0l-7.29 4.226c-.033.032-.13.13-.13.194v8.42c0 .096.033.128.13.193l2 1.129c1.097.548 1.774-.097 1.774-.775V8.548a.22.22 0 0 1 .226-.225h.935a.22.22 0 0 1 .226.225v8.323c0 1.452-.774 2.258-2.129 2.258-.452 0-.71 0-1.677-.452l-1.904-1.064a1.573 1.573 0 0 1-.774-1.355V7.774c0-.548.258-1.032.774-1.355l7.258-4.225a1.645 1.645 0 0 1 1.549 0l7.322 4.258c.452.258.775.774.775 1.354v8.42c0 .548-.258 1.032-.775 1.355l-7.29 4.193c-.322.194-.58.226-.87.226Zm5.903-8.323c0-1.58-1.032-2-3.322-2.322-2.29-.323-2.484-.452-2.484-1 0-.452.193-1.032 1.87-1.032 1.485 0 2.033.322 2.259 1.354.032.097.097.13.226.13h.935c.032 0 .13-.033.13-.033s.031-.097.031-.129c-.129-1.774-1.322-2.548-3.612-2.548-2.097 0-3.355.87-3.355 2.355 0 1.58 1.258 2.032 3.226 2.225 2.387.226 2.58.581 2.58 1.033 0 .806-.645 1.129-2.161 1.129-1.936 0-2.355-.484-2.484-1.452-.032-.097-.097-.193-.226-.193h-.87a.22.22 0 0 0-.227.225c0 1.226.646 2.71 3.84 2.71 2.322.065 3.644-.839 3.644-2.452Z"
    />
  </svg>
);
export default SvgNodejs;