import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLabelDollar2 = ({
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
      d="M12 8.25a.75.75 0 0 1 .75.75v.437c.99.151 1.75 1.007 1.75 2.04a.75.75 0 0 1-1.5 0 .563.563 0 0 0-.563-.563h-.687a.75.75 0 0 0-.75.75v.265a.75.75 0 0 0 .487.702l1.553.583a2.25 2.25 0 0 1 1.46 2.106v.265a2.25 2.25 0 0 1-1.75 2.195v.47a.75.75 0 0 1-1.5 0v-.438a2.063 2.063 0 0 1-1.75-2.04.75.75 0 0 1 1.5 0c0 .312.252.563.563.563h.687a.75.75 0 0 0 .75-.75v-.265a.75.75 0 0 0-.487-.702l-1.553-.582a2.25 2.25 0 0 1-1.46-2.107v-.265a2.25 2.25 0 0 1 1.75-2.194V9a.75.75 0 0 1 .75-.75Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M13.093 3.014a2.266 2.266 0 0 0-.193-.095v-.92a.9.9 0 1 0-1.8 0v.92c-.065.029-.13.06-.193.095l-5.25 2.917A2.25 2.25 0 0 0 4.5 7.898V19.75A2.25 2.25 0 0 0 6.75 22h10.5a2.25 2.25 0 0 0 2.25-2.25V7.898a2.25 2.25 0 0 0-1.157-1.967l-5.25-2.917ZM12 6.65a.9.9 0 0 0 .9-.9V4.623l4.714 2.62a.75.75 0 0 1 .386.655V19.75a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V7.898a.75.75 0 0 1 .386-.656L11.1 4.623V5.75a.9.9 0 0 0 .9.9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLabelDollar2;
