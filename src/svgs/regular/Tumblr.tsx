import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTumblr = ({
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
      d="M17.892 20.742C17.344 21.29 15.957 22 14.086 22c-4.71 0-5.774-3.452-5.774-5.484v-5.645H6.44a.427.427 0 0 1-.42-.42V7.807c0-.258.194-.548.452-.645C8.957 6.323 9.7 4.226 9.796 2.645c.032-.451.226-.645.645-.645h2.774c.226 0 .42.194.42.42v4.483h3.257c.226 0 .42.13.42.355v3.161c0 .226-.194.42-.42.42h-3.29V16c0 1.355.968 2.097 2.645 1.42.194-.033.355-.13.484-.097.13.032.226.129.258.322l.871 2.484c.097.194.194.452.032.613Z"
    />
  </svg>
);
export default SvgTumblr;
