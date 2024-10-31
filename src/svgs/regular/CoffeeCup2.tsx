import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoffeeCup2 = ({
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
      d="M15.969 4a.75.75 0 0 0-1.5 0v1.75a.75.75 0 1 0 1.5 0V4ZM4 7.25a.75.75 0 0 0-.75.75v5.25a7.489 7.489 0 0 0 3 6H4a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5h-2.25a7.54 7.54 0 0 0 1.68-1.75H17a4.5 4.5 0 0 0 4.5-4.5v-1.25a2.25 2.25 0 0 0-2.25-2.25h-1V8a.75.75 0 0 0-.75-.75H4Zm12.75 6a6 6 0 0 1-12 0v-4.5h12v4.5Zm1.5-2.25h1a.75.75 0 0 1 .75.75V13a3.001 3.001 0 0 1-2.232 2.9 7.482 7.482 0 0 0 .482-2.65V11ZM10.75 3.25a.75.75 0 0 1 .75.75v1.75a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75ZM7.031 4a.75.75 0 0 0-1.5 0v1.75a.75.75 0 0 0 1.5 0V4Z"
    />
  </svg>
);
export default SvgCoffeeCup2;
