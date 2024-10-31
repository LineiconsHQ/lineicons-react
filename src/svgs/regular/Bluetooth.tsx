import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBluetooth = ({
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
      d="M11.3 21.442a.748.748 0 0 0 .433.864.747.747 0 0 0 .876-.18l6.412-4.518a.75.75 0 0 0 0-1.226L13.35 12.38l5.693-4.017a.75.75 0 0 0 0-1.226l-6.557-4.62a.75.75 0 0 0-1.186.61v7.807L5.923 7.139a.75.75 0 0 0-.865 1.226l5.69 4.015-5.669 4a.75.75 0 1 0 .865 1.225l5.356-3.779v7.616Zm1.5-1.285v-6.33l4.488 3.167-4.488 3.163ZM17.31 7.75l-4.51 3.182v-6.36l4.51 3.178Z"
    />
  </svg>
);
export default SvgBluetooth;
