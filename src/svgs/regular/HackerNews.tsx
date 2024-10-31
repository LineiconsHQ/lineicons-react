import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHackerNews = ({
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
      d="M3 3v18h18V3H3Zm9.61 10.103v4.036h-1.278v-4.123L8.14 6.832h1.48c2.12 3.92 1.975 4.094 2.381 5.023.493-1.103.203-.987 2.468-5.023h1.393l-3.251 6.271Z"
    />
  </svg>
);
export default SvgHackerNews;
