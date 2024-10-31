import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBtc = ({
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
      d="M16.615 11.452c1.097-.549 1.774-1.549 1.645-3.194-.225-2.226-2.032-3-4.484-3.193V2h-1.903v3.032c-.516 0-1 0-1.484.033V2H8.454v3.097c-.678.032-1.484 0-3.807 0v2.032C6.131 7.097 6.906 7 7.1 8v8.516c-.129.774-.742.645-2.097.645l-.355 2.258h3.807V22h1.903v-2.645h1.484V22h1.903v-2.645c3.194-.194 5.323-.968 5.58-3.968.227-2.42-.935-3.484-2.709-3.935Zm-6.258-4.226c1.032 0 4.42-.355 4.42 1.903 0 2.13-3.355 1.871-4.42 1.871V7.226Zm0 9.87v-4.128c1.258 0 5.194-.355 5.194 2.097.032 2.29-3.936 2.032-5.194 2.032Z"
    />
  </svg>
);
export default SvgBtc;