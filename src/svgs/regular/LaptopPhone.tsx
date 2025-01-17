import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLaptopPhone = ({
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
      d="M6.247 3.25a2.25 2.25 0 0 0-2.25 2.25v8.174c-.13.177-.234.375-.308.59l-1.212 3.5a2.25 2.25 0 0 0 2.126 2.986h5.144v-1.5H4.603a.75.75 0 0 1-.708-.995l1.211-3.5a.75.75 0 0 1 .709-.505h3.932v-1.5h-4.25V5.5a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v4.25h1.5V5.5a2.25 2.25 0 0 0-2.25-2.25h-11.5ZM15.812 18.25a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.592 13.5a2.25 2.25 0 0 1 2.25-2.25h3.56a2.25 2.25 0 0 1 2.25 2.25v6.25a2.25 2.25 0 0 1-2.25 2.25h-3.56a2.25 2.25 0 0 1-2.25-2.25V13.5Zm2.25-.75a.75.75 0 0 0-.75.75v6.25c0 .414.336.75.75.75h3.56a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-3.56Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLaptopPhone;
