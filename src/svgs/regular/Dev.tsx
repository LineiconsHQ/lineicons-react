import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDev = ({
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
      d="M7.848 10.084c-.174-.116-.319-.174-.493-.174h-.697v4.152h.697a.69.69 0 0 0 .493-.175c.175-.116.204-.29.204-.522v-2.816a.578.578 0 0 0-.204-.465ZM19.2 3.03H4.8c-.987 0-1.8.813-1.8 1.8v14.43c0 .9.813 1.712 1.8 1.712h14.458c.987 0 1.742-.784 1.742-1.742V4.83c-.029-.987-.813-1.8-1.8-1.8ZM9.213 13.394c0 .784-.494 1.916-1.916 1.916H5.439V8.662h1.916c1.422 0 1.916 1.132 1.916 1.916l-.058 2.816ZM13.19 9.88h-2.119v1.539h1.306v1.19h-1.306v1.539h2.12v1.19h-2.498a.878.878 0 0 1-.87-.784V9.503c0-.435.319-.812.784-.87h2.583V9.88Zm4.181 4.558c-.523 1.22-1.48.987-1.916 0l-1.539-5.806h1.336l1.19 4.558 1.19-4.53h1.307L17.37 14.44Z"
    />
  </svg>
);
export default SvgDev;