import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAirtable = ({
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
      d="M11.993 3.509c-.361 0-.725.073-1.066.217L3.483 6.853c-.42.176-.409.768.01.944l7.484 3.012c.656.27 1.39.27 2.046 0l7.485-3.012c.419-.166.419-.768.01-.944l-7.465-3.127a2.676 2.676 0 0 0-1.06-.217ZM21.5 8.663a.484.484 0 0 0-.185.038l-8.343 3.281a.512.512 0 0 0-.317.478v7.529a.515.515 0 0 0 .221.416.494.494 0 0 0 .463.051l8.344-3.292a.487.487 0 0 0 .317-.466v-7.53a.512.512 0 0 0-.148-.357.496.496 0 0 0-.352-.148Zm-18.937.033a.53.53 0 0 0-.4.16A.497.497 0 0 0 2 9.2v7.071c0 .374.43.624.757.457l7.955-3.884c.388-.186.358-.768-.051-.924L2.736 8.732a.468.468 0 0 0-.173-.036Z"
    />
  </svg>
);
export default SvgAirtable;
