import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTelegram = ({
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
      d="m21.936 5.17-3.03 14.185c-.226.999-.806 1.224-1.644.773l-4.545-3.352-2.225 2.127c-.225.226-.451.452-.967.452l.355-4.675 8.478-7.704c.354-.355-.097-.484-.548-.193l-10.541 6.64-4.546-1.386c-.999-.322-.999-1 .226-1.45L20.614 3.72c.87-.258 1.612.194 1.322 1.45Z"
    />
  </svg>
);
export default SvgTelegram;