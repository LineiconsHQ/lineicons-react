import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMegaphone1 = ({
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
      d="M22.023 3.2a.75.75 0 1 0-1.5 0v.26l-10.29 3.438h-5.96a2.25 2.25 0 0 0-2.25 2.25v3.102a2.25 2.25 0 0 0 2.25 2.25h2.472l.438 3.095a2.216 2.216 0 1 0 4.38-.672l-.346-2.094 9.306 3.11v.26a.75.75 0 0 0 1.5 0v-15Zm-1.5 13.157-9.418-3.147V8.189l9.418-3.148v11.316ZM9.604 13h-5.33a.75.75 0 0 1-.75-.75V9.148a.75.75 0 0 1 .75-.75h5.33V13Zm.038 1.5.441 2.667a.716.716 0 1 1-1.415.217L8.26 14.5h1.382Z"
    />
  </svg>
);
export default SvgMegaphone1;
