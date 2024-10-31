import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRuler1 = ({
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
      d="M17.15 2.656a2.25 2.25 0 0 0-3.182 0l-1.186 1.186a.658.658 0 0 0-.049.05l-2.048 2.047a.854.854 0 0 0-.048.049l-7.478 7.478a2.25 2.25 0 0 0 0 3.182l4.694 4.693a2.25 2.25 0 0 0 3.181 0l10.81-10.81a2.25 2.25 0 0 0 0-3.181L17.15 2.656Zm-4.655 6.202a.75.75 0 1 0 1.061-1.06l-1.304-1.304 1.036-1.036 3.139 3.138a.75.75 0 0 0 1.06-1.06L14.35 4.397l.68-.68a.75.75 0 0 1 1.06 0l4.694 4.693a.75.75 0 0 1 0 1.06L9.973 20.28a.75.75 0 0 1-1.06 0L4.22 15.587a.75.75 0 0 1 0-1.06l.679-.68 3.14 3.14a.75.75 0 1 0 1.06-1.06l-3.14-3.14 1.037-1.037 1.306 1.306a.75.75 0 0 0 1.06-1.061l-1.305-1.306 1.036-1.036 3.14 3.14a.75.75 0 1 0 1.06-1.06l-3.14-3.14 1.038-1.039 1.304 1.304Z"
    />
  </svg>
);
export default SvgRuler1;
