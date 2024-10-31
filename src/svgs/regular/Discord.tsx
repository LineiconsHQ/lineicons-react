import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiscord = ({
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
      d="M18.942 5.555a16.288 16.288 0 0 0-4.126-1.296 12.09 12.09 0 0 0-.529 1.097 15.15 15.15 0 0 0-4.573 0A11.737 11.737 0 0 0 9.18 4.26c-1.448.25-2.834.692-4.129 1.3-2.611 3.946-3.319 7.794-2.965 11.587a16.495 16.495 0 0 0 5.06 2.593c.408-.56.771-1.157 1.084-1.785a10.658 10.658 0 0 1-1.706-.83c.143-.107.283-.217.418-.331 3.29 1.539 6.866 1.539 10.118 0 .137.114.277.224.418.33a10.63 10.63 0 0 1-1.71.833c.314.626.675 1.224 1.084 1.785a16.463 16.463 0 0 0 5.064-2.595c.415-4.398-.71-8.21-2.973-11.59ZM8.678 14.813c-.988 0-1.798-.922-1.798-2.045 0-1.123.792-2.047 1.798-2.047 1.005 0 1.815.922 1.798 2.047.001 1.123-.793 2.045-1.798 2.045Zm6.644 0c-.988 0-1.798-.922-1.798-2.045 0-1.123.793-2.047 1.798-2.047 1.006 0 1.816.922 1.798 2.047 0 1.123-.793 2.045-1.798 2.045Z"
    />
  </svg>
);
export default SvgDiscord;
