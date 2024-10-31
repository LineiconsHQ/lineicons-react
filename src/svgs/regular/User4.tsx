import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUser4 = ({
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
      fillRule="evenodd"
      d="M16.434 6.35c0 2.39-1.94 4.34-4.34 4.34l-.01-.01c-2.39 0-4.34-1.95-4.34-4.34 0-2.39 1.96-4.34 4.35-4.34 2.39 0 4.34 1.96 4.34 4.35Zm-1.5-.01c0-1.56-1.27-2.84-2.84-2.84-1.56 0-2.84 1.28-2.84 2.84 0 1.56 1.28 2.84 2.84 2.84a2.85 2.85 0 0 0 2.84-2.84Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M12.024 12.19c2.67 0 4.76.75 6.21 2.23v-.01c2.046 2.086 2.04 4.846 2.04 5.024v.005c-.01.41-.34.74-.75.74h-.01a.755.755 0 0 1-.74-.76c0-.05 0-2.33-1.62-3.97-1.16-1.17-2.89-1.77-5.13-1.77-2.24 0-3.97.6-5.13 1.77-1.62 1.65-1.62 3.95-1.62 3.97 0 .41-.33.76-.74.76-.36.02-.76-.32-.76-.73v-.004c-.001-.168-.008-2.939 2.04-5.026 1.45-1.48 3.54-2.23 6.21-2.23Z"
    />
  </svg>
);
export default SvgUser4;
