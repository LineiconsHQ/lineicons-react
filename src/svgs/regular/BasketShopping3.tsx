import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBasketShopping3 = ({
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
      d="M9.75 11.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM15 12.25a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z"
    />
    <path
      fill="#323544"
      d="M10.68 2.136a.75.75 0 0 1 .184 1.044L8.365 6.75h7.27l-2.5-3.57a.75.75 0 0 1 1.23-.86l3.1 4.43h2.285A2.25 2.25 0 0 1 22 9v.785a2.25 2.25 0 0 1-.833 1.748l-1.163.943-.803 6.308a2.25 2.25 0 0 1-2.232 1.966H7.031a2.25 2.25 0 0 1-2.232-1.966l-.804-6.308-1.162-.943A2.25 2.25 0 0 1 2 9.785V9a2.25 2.25 0 0 1 2.25-2.25h2.284l3.102-4.43a.75.75 0 0 1 1.044-.184Zm9.07 6.114H4.25A.75.75 0 0 0 3.5 9v.785c0 .226.102.44.278.583L5.174 11.5a.75.75 0 0 1 .271.488l.842 6.607a.75.75 0 0 0 .744.655h9.938a.75.75 0 0 0 .744-.655l.841-6.607a.75.75 0 0 1 .272-.488l1.396-1.132a.75.75 0 0 0 .278-.583V9a.75.75 0 0 0-.75-.75Z"
    />
  </svg>
);
export default SvgBasketShopping3;
