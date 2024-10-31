import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBooks2 = ({
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
      d="M7.333 5.5a2.25 2.25 0 0 1 2.25-2.25h1.583a2.25 2.25 0 0 1 2.25 2.196c.227-.175.492-.308.786-.387l2.253-.604a2.25 2.25 0 0 1 2.756 1.591L21.93 16.19a2.25 2.25 0 0 1-1.591 2.755l-2.254.604a2.25 2.25 0 0 1-2.756-1.59l-1.912-7.136v6.428a2.25 2.25 0 0 1-2.25 2.25H9.583a2.242 2.242 0 0 1-1.5-.573 2.242 2.242 0 0 1-1.5.573H4.25A2.25 2.25 0 0 1 2 17.25v-9.5A2.25 2.25 0 0 1 4.25 5.5h2.333c.263 0 .516.045.75.128V5.5Zm0 11.75V7.728A.75.75 0 0 0 6.583 7H4.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h2.333a.75.75 0 0 0 .75-.73v-.02Zm2.25.75h1.583a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75H9.583a.75.75 0 0 0-.75.75v11.77a.75.75 0 0 0 .75.73Zm4.476-10.573 2.718 10.142a.75.75 0 0 0 .919.53l2.253-.604a.75.75 0 0 0 .53-.918L17.763 6.435a.75.75 0 0 0-.918-.53l-2.254.603a.75.75 0 0 0-.53.919Z"
    />
  </svg>
);
export default SvgBooks2;
