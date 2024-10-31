import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYahoo = ({
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
      d="M5.739 10.594h-1.18l-.69 1.646-.691-1.646H1.999l1.285 3.06-.475 1.13h1.18c.589-1.404 1.164-2.795 1.75-4.19Zm14.991-1.37H22l-1.147 2.772h-1.27l1.148-2.772Zm-.835 3.04a.715.715 0 1 1 0 1.43.715.715 0 0 1 0-1.43ZM17.4 10.51a1.609 1.609 0 1 1 0 3.217 1.609 1.609 0 0 1 0-3.217Zm0 .98a.628.628 0 1 0 0 1.256.628.628 0 0 0 0-1.256Zm-3.453-.98a1.609 1.609 0 1 1 0 3.217 1.609 1.609 0 0 1 0-3.217Zm0 .98a.628.628 0 1 0 0 1.257.628.628 0 0 0 0-1.257Zm-4.75-2.276h1.064v1.654s.186-.358.801-.358 1.01.27 1.017 1.378v1.806h-1.064v-1.806a.377.377 0 1 0-.754.01v1.796H9.197v-4.48ZM7.75 10.594h1.064v3.1H7.749v-.292a1.31 1.31 0 0 1-.857.326c-.784 0-1.42-.72-1.42-1.608 0-.889.636-1.61 1.42-1.61.322 0 .619.122.857.327v-.243Zm-.6.897a.628.628 0 1 0 0 1.257.628.628 0 0 0 0-1.257Z"
    />
  </svg>
);
export default SvgYahoo;
