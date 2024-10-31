import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPizza2 = ({
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
      d="M12.352 14.96a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM8.56 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM14.629 10.02a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
    />
    <path
      fill="#323544"
      d="M2.82 5.604c5.326-3.972 13.033-3.972 18.359 0 .945.706 1.063 1.99.466 2.9l-7.763 11.851a2.25 2.25 0 0 1-3.764 0L2.354 8.505c-.597-.912-.479-2.195.467-2.9Zm17.462 1.203c-4.794-3.576-11.77-3.576-16.564 0-.239.178-.322.55-.11.875l.844 1.287c4.306-3.459 10.79-3.459 15.095 0l.844-1.287c.212-.325.13-.697-.11-.875Zm-8.91 12.726a.75.75 0 0 0 1.255 0l6.094-9.302c-3.793-3.141-9.65-3.141-13.443 0l6.094 9.302Z"
    />
  </svg>
);
export default SvgPizza2;
