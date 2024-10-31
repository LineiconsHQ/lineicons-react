import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrophy1 = ({
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
      d="M16.45 13.29c.74-.29 4.3-1.96 4.3-7.13 0-.41-.34-.75-.75-.75h-2.28V4c0-.41-.34-.75-.75-.75H7.03c-.41 0-.75.34-.75.75v1.41H4c-.41 0-.75.34-.75.75 0 5.17 3.56 6.84 4.3 7.13.9 1.12 2.21 1.88 3.7 2.08v1.29H8.5c-.32 0-.61.21-.71.51l-.86 2.59a.75.75 0 0 0 .1.68c.14.2.37.31.61.31h8.72c.24 0 .47-.12.61-.31s.18-.45.1-.68l-.86-2.59a.741.741 0 0 0-.71-.51h-2.75v-1.29c1.49-.2 2.8-.96 3.7-2.08Zm-1.13 5.96H8.68l.36-1.09h5.91l.37 1.09Zm3.9-12.34c-.15 1.81-.86 3-1.59 3.77.06-.32.09-.64.09-.98V6.91h1.5Zm-14.44 0h1.5V9.7c0 .33.03.66.09.98-.73-.77-1.43-1.96-1.58-3.77h-.01Zm3 2.79V4.75h8.45V9.7a4.22 4.22 0 0 1-4.22 4.22A4.23 4.23 0 0 1 7.78 9.7Z"
    />
  </svg>
);
export default SvgTrophy1;
