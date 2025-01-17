import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVk = ({
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
      d="M14.729 3H9.271C4.191 3 3 4.19 3 9.271v5.516C3 19.81 4.19 21 9.271 21h5.516C19.81 21 21 19.81 21 14.729V9.271C21 4.191 19.81 3 14.729 3Zm2.787 12.832H16.21c-.494 0-.668-.406-1.568-1.306-.784-.784-1.132-.871-1.306-.871-.233 0-.32.029-.32.406v1.19c0 .32-.087.494-.929.494-1.393 0-2.903-.87-4.006-2.41-1.626-2.293-2.033-4.006-2.033-4.383 0-.204.03-.378.407-.378H7.76c.32 0 .465.116.58.494.669 1.887 1.714 3.513 2.178 3.513.175 0 .233-.088.233-.494v-1.916c-.03-.9-.494-.93-.494-1.306 0-.117.116-.32.32-.32h2.032c.29 0 .377.116.377.494v2.584c0 .29.116.377.203.377.175 0 .32-.087.61-.406.929-1.075 1.597-2.671 1.597-2.671.087-.204.232-.378.58-.378h1.307c.406 0 .493.203.406.494-.174.784-1.77 3.02-1.77 3.02-.117.202-.204.318 0 .58.115.203.609.58.9.929.58.668.986 1.19 1.103 1.568.145.493-.03.696-.407.696Z"
    />
  </svg>
);
export default SvgVk;
