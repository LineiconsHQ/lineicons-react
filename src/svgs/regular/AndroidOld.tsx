import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAndroidOld = ({
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
      d="M4.776 8.478c-.345 0-.637.12-.877.36-.24.241-.36.53-.36.866v5.168c0 .345.12.637.36.878.24.24.532.36.877.36.344 0 .635-.12.872-.36.236-.24.354-.533.354-.878V9.704c0-.336-.12-.625-.36-.865a1.18 1.18 0 0 0-.866-.36Zm9.952-4.64.853-1.573c.056-.105.037-.185-.06-.24-.104-.05-.184-.025-.24.071l-.865 1.587A5.91 5.91 0 0 0 12 3.178c-.85 0-1.655.168-2.416.505l-.865-1.587c-.057-.096-.137-.12-.24-.072-.097.057-.117.136-.06.24l.853 1.575a5.27 5.27 0 0 0-2.068 1.845 4.66 4.66 0 0 0-.769 2.59h11.117c0-.937-.256-1.8-.769-2.59a5.292 5.292 0 0 0-2.055-1.845Zm-4.934 2.29a.45.45 0 0 1-.33.14.43.43 0 0 1-.325-.14.46.46 0 0 1-.132-.33c0-.128.044-.238.132-.33a.432.432 0 0 1 .324-.138c.129 0 .239.046.331.138a.452.452 0 0 1 .138.33.453.453 0 0 1-.138.33Zm5.066 0a.431.431 0 0 1-.324.14.45.45 0 0 1-.331-.14.45.45 0 0 1-.138-.33.45.45 0 0 1 .138-.33.451.451 0 0 1 .33-.138c.129 0 .237.046.325.138a.462.462 0 0 1 .132.33.46.46 0 0 1-.132.33ZM6.483 16.712c0 .37.128.682.384.938.257.256.569.384.938.384h.89l.011 2.729c0 .345.12.637.36.878.241.24.53.36.866.36.345 0 .637-.12.877-.36s.361-.534.361-.878v-2.729h1.659v2.729c0 .345.12.637.36.878.24.24.533.36.877.36.345 0 .637-.12.878-.36.24-.24.36-.534.36-.878v-2.729h.902c.36 0 .669-.128.925-.384.257-.256.385-.569.385-.937V8.706H6.483v8.005Zm12.74-8.233c-.336 0-.625.119-.865.355s-.36.527-.36.871v5.168c0 .345.12.637.36.878.24.24.529.36.865.36.345 0 .637-.12.878-.36.24-.24.36-.533.36-.878V9.704c0-.344-.12-.635-.36-.871a1.206 1.206 0 0 0-.878-.355Z"
    />
  </svg>
);
export default SvgAndroidOld;
