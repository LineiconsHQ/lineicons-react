import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrush2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M21.413 3.744a2.086 2.086 0 0 0-2.881-.066l-9.794 8.94a3.72 3.72 0 0 0-.239-.007c-1.125 0-2.248.516-3.016 1.702a.75.75 0 0 0-.035.06c-.706 1.353-1.466 2.098-2.016 2.5-.276.202-.504.32-.653.386a1.82 1.82 0 0 1-.16.063l-.03.01.005-.002h.004l.175.729-.183-.728a.75.75 0 0 0-.277 1.32l.46-.592-.46.592h.001l.001.002.005.003.013.01a8.756 8.756 0 0 0 .224.164c.15.106.366.253.633.42.53.331 1.278.748 2.126 1.075 1.645.634 3.977 1.034 5.705-.695.851-.85 1.342-1.971 1.39-3.071l9.068-9.933a2.086 2.086 0 0 0-.066-2.882ZM12.04 14.74a3.469 3.469 0 0 0-.657-.911 4.195 4.195 0 0 0-.961-.716l9.121-8.327a.586.586 0 0 1 .828.828l-8.33 9.126Zm-7.723 3.344c.736-.537 1.638-1.451 2.443-2.983.482-.727 1.117-.99 1.739-.99.663 0 1.349.303 1.824.778.843.843.833 2.485-.362 3.68-1.062 1.062-2.588.94-4.105.356a10.962 10.962 0 0 1-1.61-.79 5.26 5.26 0 0 0 .071-.05Z"
    />
  </svg>
);
export default SvgBrush2;
