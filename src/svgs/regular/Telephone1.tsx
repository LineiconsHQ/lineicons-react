import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTelephone1 = ({
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
      fillRule="evenodd"
      d="M4.265 3.257a2.584 2.584 0 0 1 4.18.758l1.622 3.567c.4.88.272 1.897-.307 2.648-.19.245-.428.397-.617.493l-2.8 1.436a17.274 17.274 0 0 0 2.438 3.06 17.277 17.277 0 0 0 3.06 2.438l1.436-2.8c.097-.19.248-.427.493-.617a2.584 2.584 0 0 1 2.648-.306l3.567 1.62a2.584 2.584 0 0 1 .758 4.18l-1.068 1.069a2.33 2.33 0 0 1-2.056.661A18.635 18.635 0 0 1 7.72 16.28a18.636 18.636 0 0 1-5.184-9.899 2.33 2.33 0 0 1 .661-2.056m1.068-1.068Zm8.883 15.139a17.148 17.148 0 0 0 4.737 1.592.83.83 0 0 0 .729-.246l1.068-1.068a1.084 1.084 0 0 0-.318-1.754l-3.567-1.62a1.085 1.085 0 0 0-1.11.127.626.626 0 0 0-.075.114l-1.464 2.855Zm-7.544-7.544L8.46 9.39a.625.625 0 0 0 .09-.055l.024-.02c.243-.315.296-.743.128-1.111L7.08 4.636a1.084 1.084 0 0 0-1.754-.318L4.258 5.386a.83.83 0 0 0-.246.729c.294 1.632.825 3.23 1.592 4.737Z"
      clipRule="evenodd"
    />
    <path fill="#323544" d="m3.197 4.325 1.068-1.068-1.068 1.068Z" />
  </svg>
);
export default SvgTelephone1;
